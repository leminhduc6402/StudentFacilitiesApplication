import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";

function Subject() {
    const [, setAlert] = useAlertContext();

    const [edit, setEdit] = useState(null);
    const [subject, setSubject] = useState({
        departmentId: "",
        name: "",
        code: "",
        creditCount: 2,
    });
    const [subjects, setSubjects] = useState([]);
    const [departments, setDepartments] = useState([]);

    const getSubjects = async () => {
        await AxiosAPI.get(endpoints.subject)
            .then((res) => {
                setSubjects(res.data.data);
            })
            .catch((err) => console.log(err.respponse.data || err));
    };

    const getDepartments = async () => {
        await AxiosAPI.get(endpoints.department)
            .then((res) => setDepartments(res.data.data))
            .catch((err) => console.log(err.respponse.data || err));
    };

    useEffect(() => {
        getSubjects();
        getDepartments();
    }, []);

    const handleChange = (value, field) => {
        setSubject({
            ...subject,
            [field]: value,
        });
    };

    const handleEdit = (item) => {
        setEdit(item._id);
        setSubject({
            departmentId: item.departmentId._id,
            name: item.name,
            code: item.code,
            creditCount: item.credit,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!subject.departmentId) {
            setAlert({
                content: "Select department!",
            });
            return;
        }

        if (!edit) {
            AxiosAPI.post(`${endpoints.subject}/create`, subject)
                .then(() => {
                    setAlert({
                        content: "Create subject successfully!",
                        type: "success",
                    });
                    setSubject({
                        departmentId: "",
                        name: "",
                        code: "",
                        creditCount: 2,
                    });
                    getSubjects();
                })
                .catch((err) => {
                    setAlert({
                        content: err.response.data.message,
                    });
                    return;
                });
        }

        if (edit) {
            AxiosAPI.patch(`${endpoints.subject}/${edit}`, subject)
                .then(() => {
                    setAlert({
                        content: "Update subject successfully!",
                        type: "success",
                    });
                    setSubject({
                        departmentId: "",
                        name: "",
                        code: "",
                        creditCount: 2,
                    });
                    getSubjects();
                })
                .catch((err) => {
                    setAlert({
                        content: err.response.data.message || "Update failed!",
                    });
                    console.log(err.response.data.message || err);
                    return;
                });
        }
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm(
            "Hành động này có thể ảnh hưởng đến các dữ liệu liên quan, bạn có chắc chắn xoá?"
        );

        if (!confirm) return;
        await AxiosAPI.delete(`${endpoints.subject}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete subject successfully!",
                    type: "success",
                });
                getSubjects();
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    return (
        <div>
            <h2>Subject</h2>
            <Table>
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Department</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Credit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {subjects?.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.departmentId?.name}</td>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.credit}</td>
                                <td>
                                    <Button
                                        onClick={() => handleEdit(item)}
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
                    setSubject({
                        departmentId: "",
                        name: "",
                        code: "",
                        creditCount: 2,
                    });
                }}
            >
                {edit ? "Edit mode" : "Create mode"}
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="flex-fill">
                    <Form.Select
                        value={subject.departmentId}
                        onChange={(e) =>
                            handleChange(e.target.value, "departmentId")
                        }
                    >
                        <option value={0}>Department</option>

                        {departments.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="flex-fill mt-2">
                    <Form.Control
                        value={subject.name}
                        onChange={(e) => handleChange(e.target.value, "name")}
                        type="text"
                        placeholder="Enter name here ..."
                    />
                </Form.Group>
                <Form.Group className="flex-fill d-flex mt-2 gap-2">
                    <Form.Control
                        value={subject.code}
                        onChange={(e) => handleChange(e.target.value, "code")}
                        maxLength={8}
                        type="text"
                        placeholder="Enter code here ... (6 characters)"
                    />
                    <Form.Control
                        value={subject.creditCount}
                        onChange={(e) =>
                            handleChange(e.target.value, "creditCount")
                        }
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
