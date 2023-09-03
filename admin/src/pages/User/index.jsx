import { useEffect, useState } from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";
import { initUser } from "./data";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function User() {
    const [, setAlert] = useAlertContext();

    const [user, setUser] = useState(initUser);
    const [edit, setEdit] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [majors, setMajors] = useState([]);
    const [classes, setClasses] = useState([]);
    const [users, setUsers] = useState([]);

    const getDataDropdown = async (endpoint, setState) => {
        await AxiosAPI.get(endpoint)
            .then((res) => setState(res.data.data))
            .catch((err) => console.log(err.response?.data || err));
    };

    useEffect(() => {
        getDataDropdown(endpoints.department, setDepartments);
        getDataDropdown(endpoints.major, setMajors);
        getDataDropdown(endpoints.class, setClasses);
        getDataDropdown(endpoints.user, setUsers);
    }, []);

    const handleChange = (e, field) => {
        setUser({
            ...user,
            [field]: e.target.value,
        });
    };

    const handleEdit = (user) => {
        setEdit(user.userId._id);
        setUser({
            ...user.userId,
            ...user,
            departmentId: user.departmentId?._id,
            majorId: user.majorId?._id,
            classId: user.classId?._id,
            dateOfBirth: user.dateOfBirth
                ? new Date(user.dateOfBirth).toISOString().slice(0, 10)
                : "",
        });
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm(
            "Hành động này có thể ảnh hưởng đến các dữ liệu liên quan, bạn có chắc chắn xoá?"
        );

        if (!confirm) return;

        await AxiosAPI.delete(`${endpoints.user}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete user successfully!",
                    type: "success",
                });
                getDataDropdown(endpoints.user, setUsers);
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (edit) {
            await AxiosAPI.patch(`${endpoints.user}/${edit}`, user)
                .then(() => {
                    setAlert({
                        content: "Update user successfully!",
                        type: "success",
                    });
                    setEdit(null);
                    setUser(initUser);
                    getDataDropdown(endpoints.user, setUsers);
                })
                .catch((err) => {
                    setAlert({
                        content: err.response.data.message,
                    });
                    console.log(err.response?.data || err);
                    return;
                });

            return;
        }

        await AxiosAPI.post(endpoints.signup, user)
            .then(() => {
                setAlert({
                    content: "Create user successfully!",
                    type: "success",
                });
                setUser(initUser);
                getDataDropdown(endpoints.user, setUsers);
            })
            .catch((err) => {
                setAlert({
                    content: err.response.data.message,
                });
                console.log(err.response?.data || err);
                return;
            });
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
            <h2>User</h2>
            <div
                style={{
                    overflowY: "scroll",
                }}
            >
                <Table
                    style={{
                        overflow: "auto",
                        display: "block",
                        tableLayout: "auto",
                        width: "100%",
                        whiteSpace: "nowrap",
                        position: "relative",
                    }}
                >
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>Role</th>
                            <th>Fullname</th>
                            <th>Student Code</th>
                            <th>User Course</th>
                            <th>Class</th>
                            <th>Major</th>
                            <th>Department</th>
                            <th>Date Of Birth</th>
                            <th>Place Of Birth</th>
                            <th>Sex</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {users?.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Button
                                            onClick={() => handleEdit(user)}
                                            className="mx-2"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDelete(user.userId._id)
                                            }
                                            variant="outline-danger"
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                    <td>{user.userId?.role}</td>
                                    <td>{user.userId?.fullName}</td>
                                    <td>{user.userId?.username}</td>
                                    <td>{user.userId?.userCourse}</td>
                                    <td>{user.classId?.name}</td>
                                    <td>{user.majorId?.name}</td>
                                    <td>{user.departmentId?.name}</td>
                                    <td>{handleDatetime(user.dateOfBirth)}</td>
                                    <td>{user.placeOfBirth}</td>
                                    <td>{user.sex ? "Female" : "Male"}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
            <div style={{ flex: 1 }}>
                <h2
                    onClick={() => {
                        setEdit(null);
                        setUser(initUser);
                    }}
                >
                    {edit ? "Edit mode" : "Create mode"}
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="d-flex gap-2">
                        <Form.Control
                            value={user.fullName}
                            onChange={(e) => handleChange(e, "fullName")}
                            className="w-50"
                            maxLength={25}
                            type="text"
                            placeholder="Full name here ... "
                        />
                        <Form.Control
                            value={user.username}
                            onChange={(e) => handleChange(e, "username")}
                            className="w-25"
                            maxLength={10}
                            type="text"
                            placeholder="MSSV (10 characters)"
                        />
                        <Form.Control
                            value={user.userCourse}
                            onChange={(e) => handleChange(e, "userCourse")}
                            className="w-25"
                            maxLength={4}
                            type="text"
                            placeholder="User course ... "
                        />
                        <Form.Select
                            value={user.role}
                            onChange={(e) => handleChange(e, "role")}
                            className="w-25"
                        >
                            <option value={0}>User role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="LECTURER">Lecturer</option>
                            <option value="STUDENT">Student</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2 mt-2">
                        <Form.Select
                            value={user.departmentId}
                            onChange={(e) => handleChange(e, "departmentId")}
                            className="w-33"
                        >
                            <option value={0}>Department</option>
                            {departments.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Select
                            value={user.majorId}
                            onChange={(e) => handleChange(e, "majorId")}
                            className="w-33"
                        >
                            <option value={0}>Major</option>
                            {majors.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Select
                            value={user.classId}
                            onChange={(e) => handleChange(e, "classId")}
                            className="w-33"
                        >
                            <option value={0}>Class</option>
                            {classes.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2 mt-2">
                        <Form.Select
                            value={user.sex}
                            onChange={(e) => handleChange(e, "sex")}
                            className="w-25"
                        >
                            <option value={false}>Male</option>
                            <option value={true}>Female</option>
                        </Form.Select>
                        <Form.Control
                            value={user.dateOfBirth}
                            onChange={(e) => handleChange(e, "dateOfBirth")}
                            className="w-25"
                            title="Date of birth"
                            type="date"
                            placeholder="Enter start here ..."
                        />
                        <Form.Control
                            value={user.placeOfBirth}
                            onChange={(e) => handleChange(e, "placeOfBirth")}
                            className="w-25"
                            maxLength={20}
                            type="text"
                            placeholder="Place of birth ... "
                        />
                        <Form.Control
                            value={user.personalId}
                            onChange={(e) => handleChange(e, "personalId")}
                            className="w-25"
                            maxLength={12}
                            type="text"
                            placeholder="Personal ID ... "
                        />
                    </Form.Group>
                    <Form.Group className="d-flex gap-2 mt-2">
                        <Form.Control
                            value={user.phone}
                            onChange={(e) => handleChange(e, "phone")}
                            className="w-25"
                            maxLength={10}
                            type="text"
                            placeholder="Phone ... "
                        />
                        <Form.Control
                            value={user.email}
                            onChange={(e) => handleChange(e, "email")}
                            className="w-25"
                            maxLength={20}
                            type="email"
                            placeholder="Email ... "
                        />
                        <Form.Control
                            value={user.address}
                            onChange={(e) => handleChange(e, "address")}
                            className="w-50"
                            maxLength={100}
                            type="text"
                            placeholder="Address ... "
                        />
                    </Form.Group>

                    <Button
                        className="w-100 mt-2"
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

export default User;
