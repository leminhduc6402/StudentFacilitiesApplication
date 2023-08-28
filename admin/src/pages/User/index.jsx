import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { initUser } from "./data";

function User() {
    const [user, setUser] = useState(initUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>User</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex gap-2">
                    <Form.Control
                        className="w-50"
                        maxLength={25}
                        type="text"
                        placeholder="Full name here ... "
                    />
                    <Form.Control
                        className="w-25"
                        maxLength={10}
                        type="text"
                        placeholder="MSSV (10 characters)"
                    />
                    <Form.Control
                        className="w-25"
                        maxLength={4}
                        type="text"
                        placeholder="User course ... "
                    />
                    <Form.Select className="w-25">
                        <option value={0}>User role</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Teacher</option>
                        <option value={3}>Student</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex gap-2 mt-2">
                    <Form.Select className="w-33">
                        <option value={0}>Department</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Teacher</option>
                        <option value={3}>Student</option>
                    </Form.Select>
                    <Form.Select className="w-33">
                        <option value={0}>Major</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Teacher</option>
                        <option value={3}>Student</option>
                    </Form.Select>
                    <Form.Select className="w-33">
                        <option value={0}>Class</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Teacher</option>
                        <option value={3}>Student</option>
                    </Form.Select>
                </Form.Group>

                <Button className="w-100 mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default User;
