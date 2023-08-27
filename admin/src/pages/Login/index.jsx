import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { useUserContext } from "~/hook/useUserContext";

function Login() {
    const nav = useNavigate();
    const [alert, setAlert] = useAlertContext();
    const [user, dispatch] = useUserContext();

    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setAlert({
                content: "Username or password is empty",
            });
            return;
        }

        await AxiosAPI.post(endpoints.login, {
            username,
            password,
            role: "ADMIN",
        })
            .then((res) => {
                dispatch({
                    type: "LOGIN",
                    payload: res.data.data,
                });
                nav("/");
            })
            .catch((err) => {
                if (err.response.status === 409) {
                    setAlert({
                        content: "Username or password is incorrect",
                    });
                    return;
                }
                console.log(err.response?.data || err);
            });
    };

    return (
        <div className="p-4">
            <h1 className="text-center">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter username here ..."
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter password here ..."
                    />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;
