import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Department() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [department, setDepartment] = useState("");
    const [departments, setDepartments] = useState([]);

    const getDepartments = async () => {
        await AxiosAPI.get(endpoints.department)
            .then((res) => setDepartments(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getDepartments();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setDepartment(departments.find((item) => item._id === id).name);
    };

    const handleDelete = async (id) => {
        await AxiosAPI.delete(`${endpoints.department}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete department successfully!",
                    type: "success",
                });
                getDepartments();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!department) {
            setAlert({
                content: "Department is empty!",
            });
            return;
        }

        if (!edit) {
            await AxiosAPI.post(`${endpoints.department}/create`, {
                name: department.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Create department successfully!",
                        type: "success",
                    });
                    setDepartment("");
                    getDepartments();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Department is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }

        if (edit) {
            await AxiosAPI.patch(`${endpoints.department}/${edit}`, {
                name: department.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Update department successfully!",
                        type: "success",
                    });
                    setDepartment("");
                    setEdit(null);
                    getDepartments();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Department is already existed!",
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
            <h2>Department</h2>
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
                    {departments.map((item, index) => {
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
                    setDepartment("");
                }}
            >
                {edit ? "Edit mode" : "Create mode"}
            </h2>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Group className="flex-fill" controlId="username">
                    <Form.Control
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        type="text"
                        placeholder="Enter department here ..."
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

export default Department;
