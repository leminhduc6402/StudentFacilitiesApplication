import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Class() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [className, setClassName] = useState("");
    const [classes, setClasses] = useState([]);

    const getClasses = async () => {
        await AxiosAPI.get(endpoints.class)
            .then((res) => setClasses(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getClasses();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setClassName(classes.find((item) => item._id === id).name);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm(
            "Hành động này có thể ảnh hưởng đến các dữ liệu liên quan, bạn có chắc chắn xoá?"
        );

        if (!confirm) return;
        await AxiosAPI.delete(`${endpoints.class}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete class successfully!",
                    type: "success",
                });
                getClasses();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!className) {
            setAlert({
                content: "Class name is empty!",
            });
            return;
        }

        if (!edit) {
            await AxiosAPI.post(`${endpoints.class}/create`, {
                name: className.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Create class successfully!",
                        type: "success",
                    });
                    setClassName("");
                    getClasses();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Class name is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }

        if (edit) {
            await AxiosAPI.patch(`${endpoints.class}/${edit}`, {
                name: className.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Update class successfully!",
                        type: "success",
                    });
                    setClassName("");
                    setEdit(null);
                    getClasses();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Class name is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                padding: "12px",
            }}
        >
            <h2>Class</h2>
            <div
                style={{
                    overflowY: "scroll",
                }}
            >
                <Table style={{}}>
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
                        {classes.map((item, index) => {
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
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
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
            </div>

            <div
                style={{
                    flex: 1,
                }}
            >
                <h2
                    onClick={() => {
                        setEdit(null);
                        setClassName("");
                    }}
                >
                    {edit ? "Edit mode" : "Create mode"}
                </h2>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Group className="flex-fill" controlId="username">
                        <Form.Control
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
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
        </div>
    );
}

export default Class;
