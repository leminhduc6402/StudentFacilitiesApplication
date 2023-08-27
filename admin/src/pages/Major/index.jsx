import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Major() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [major, setMajor] = useState("");
    const [majors, setMajors] = useState([]);

    const getMajors = async () => {
        await AxiosAPI.get(endpoints.major)
            .then((res) => setMajors(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getMajors();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setMajor(majors.find((item) => item._id === id).name);
    };

    const handleDelete = async (id) => {
        await AxiosAPI.delete(`${endpoints.major}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete major successfully!",
                    type: "success",
                });
                getMajors();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!major) {
            setAlert({
                content: "Major is empty!",
            });
            return;
        }

        if (!edit) {
            await AxiosAPI.post(`${endpoints.major}/create`, {
                name: major.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Create major successfully!",
                        type: "success",
                    });
                    setMajor("");
                    getMajors();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Major is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }

        if (edit) {
            await AxiosAPI.patch(`${endpoints.major}/${edit}`, {
                name: major.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Update major successfully!",
                        type: "success",
                    });
                    setMajor("");
                    setEdit(null);
                    getMajors();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Major is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }
    };

    return (
        <div>
            <h2>Major</h2>
            <Table>
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {majors.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{handleDatetime(item.createdAt)}</td>
                                <td>{handleDatetime(item.updatedAt)}</td>
                                <td>
                                    <Button
                                        onClick={() => handleEdit(item._id)}
                                        className="mx-2"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item._id)}
                                        variant="outline-danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <h2
                onClick={() => {
                    setEdit(null);
                    setMajor("");
                }}
            >
                {edit ? "Edit mode" : "Create mode"}
            </h2>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Group className="flex-fill" controlId="username">
                    <Form.Control
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        type="text"
                        placeholder="Enter classname here ..."
                    />
                </Form.Group>

                <Button
                    style={{
                        height: "38px",
                        marginLeft: "10px",
                        width: "100px",
                    }}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Major;
