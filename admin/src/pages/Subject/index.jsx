import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Subject() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [credit, setCredit] = useState("");
    const [subjects, setSubjects] = useState([]);

    const getSubjects = async () => {
        await AxiosAPI.get(endpoints.subject)
            .then((res) => setSubjects(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getSubjects();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setCredit(subjects.find((item) => item._id === id).price);
    };

    const handleDelete = async (id) => {
        await AxiosAPI.delete(`${endpoints.credit}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete credit successfully!",
                    type: "success",
                });
                getSubjects();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!credit) {
            setAlert({
                content: "Credit price is empty!",
            });
            return;
        }

        if (!edit) {
            await AxiosAPI.post(`${endpoints.credit}/create`, {
                price: credit,
            })
                .then(() => {
                    setAlert({
                        content: "Create credit successfully!",
                        type: "success",
                    });
                    setCredit("");
                    getSubjects();
                })
                .catch((err) => {
                    setAlert({
                        content: err.response?.data || "Create credit failed!",
                    });
                    console.log(err.response?.data || err);
                    return;
                });
            return;
        }

        if (edit) {
            await AxiosAPI.patch(`${endpoints.credit}/${edit}`, {
                price: credit,
            })
                .then(() => {
                    setAlert({
                        content: "Update credit successfully!",
                        type: "success",
                    });
                    setCredit("");
                    setEdit(null);
                    getSubjects();
                })
                .catch((err) => {
                    setAlert({
                        content: err.response?.data || "Update credit failed!",
                    });
                    console.log(err.response?.data || err);
                    return;
                });
            return;
        }
    };

    return (
        <div>
            <h2>Subject</h2>
            <Table>
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {subjects.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.price}</td>
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
                    setCredit("");
                }}
            >
                {edit ? "Edit mode" : "Create mode"}
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="flex-fill">
                    <Form.Select aria-label="Default select example">
                        <option>Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="flex-fill mt-2">
                    <Form.Control
                        type="text"
                        placeholder="Enter name here ..."
                    />
                </Form.Group>
                <Form.Group className="flex-fill d-flex mt-2 gap-2">
                    <Form.Control
                        maxLength={6}
                        type="text"
                        placeholder="Enter code here ... (6 characters)"
                    />
                    <Form.Control
                        min={2}
                        max={4}
                        type="number"
                        placeholder="Credit count ..."
                    />
                </Form.Group>

                <Button className="w-100 mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Subject;
