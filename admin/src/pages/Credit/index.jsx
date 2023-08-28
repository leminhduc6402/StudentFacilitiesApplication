import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Credit() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [credit, setCredit] = useState("");
    const [credits, setCredits] = useState([]);

    const getCredits = async () => {
        await AxiosAPI.get(endpoints.credit)
            .then((res) => setCredits(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getCredits();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setCredit(credits.find((item) => item._id === id).price);
    };

    const handleDelete = async (id) => {
        await AxiosAPI.delete(`${endpoints.credit}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete credit successfully!",
                    type: "success",
                });
                getCredits();
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
                    getCredits();
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
                    getCredits();
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
            <h2>Credit</h2>
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
                    {credits.map((item, index) => {
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
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Group className="flex-fill" controlId="username">
                    <Form.Control
                        value={credit}
                        onChange={(e) => setCredit(e.target.value)}
                        type="number"
                        placeholder="Enter price here ..."
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

export default Credit;
