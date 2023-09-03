import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function Room() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [room, setRoom] = useState("");
    const [rooms, setRooms] = useState([]);

    const getRooms = async () => {
        await AxiosAPI.get(endpoints.room)
            .then((res) => setRooms(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getRooms();
    }, []);

    const handleEdit = (id) => {
        setEdit(id);
        setRoom(rooms.find((item) => item._id === id).name);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm(
            "Hành động này có thể ảnh hưởng đến các dữ liệu liên quan, bạn có chắc chắn xoá?"
        );

        if (!confirm) return;
        await AxiosAPI.delete(`${endpoints.room}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete room successfully!",
                    type: "success",
                });
                getRooms();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!room) {
            setAlert({
                content: "Room is empty!",
            });
            return;
        }

        if (!edit) {
            await AxiosAPI.post(`${endpoints.room}/create`, {
                name: room.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Create room successfully!",
                        type: "success",
                    });
                    setRoom("");
                    getRooms();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Room is already existed!",
                        });
                        return;
                    }
                    console.log(err.response?.data || err);
                });
            return;
        }

        if (edit) {
            await AxiosAPI.patch(`${endpoints.room}/${edit}`, {
                name: room.trim(),
            })
                .then(() => {
                    setAlert({
                        content: "Update room successfully!",
                        type: "success",
                    });
                    setRoom("");
                    setEdit(null);
                    getRooms();
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        setAlert({
                            content: "Room is already existed!",
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
            <h2>Room</h2>
            <div
                style={{
                    overflowY: "scroll",
                }}
            >
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
                        {rooms?.map((item, index) => {
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
                        setRoom("");
                    }}
                >
                    {edit ? "Edit mode" : "Create mode"}
                </h2>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Group className="flex-fill" controlId="username">
                        <Form.Control
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            type="text"
                            placeholder="Enter room here ..."
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

export default Room;
