import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { initSOSY } from "./data";
import { AxiosAPI, endpoints } from "~/configs/AxiosAPI";
import { useAlertContext } from "~/hook/useAlertContext";
import { handleDatetime } from "~/utils/datetime";

function SubjectOfSchoolYear() {
    const [, setAlert] = useAlertContext();

    const [sosy, setSosy] = useState(initSOSY);
    const [sosys, setSosys] = useState([]);
    const [edit, setEdit] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [schoolyears, setSchoolyears] = useState([]);
    const [classes, setClasses] = useState([]);
    const [lecturers, setLecturers] = useState([]);
    const [credits, setCredits] = useState([]);

    const getDataDropdown = async (endpoint, setState) => {
        await AxiosAPI.get(endpoint)
            .then((res) => setState(res.data.data))
            .catch((err) => console.log(err.response?.data || err));
    };

    useEffect(() => {
        getDataDropdown(endpoints.subject, setSubjects);
        getDataDropdown(endpoints.room, setRooms);
        getDataDropdown(endpoints.schoolyear, setSchoolyears);
        getDataDropdown(endpoints.class, setClasses);
        getDataDropdown(endpoints.credit, setCredits);
        getDataDropdown(`${endpoints.user}/lecturers`, setLecturers);
        getDataDropdown(endpoints.sosy, setSosys);
    }, []);

    const handleChange = (e, field) => {
        setSosy({
            ...sosy,
            [field]: e.target.value,
        });
    };

    const handleEdit = (item) => {
        setEdit(item._id);
        setSosy({
            subjectId: item.subjectId._id,
            schoolYearId: item.schoolYearId._id,
            classId: item.classId._id,
            roomId: item.roomId?._id,
            lecturerId: item.lecturerId?._id || "NONE",
            creditId: item.creditId?._id,
            start: new Date(item.start).toISOString().slice(0, 16),
            fromTime: item.fromTime || "",
            toTime: item.toTime || "",
            timeStudyOfWeek: item.timeStudyOfWeek[0],
            totalWeek: item.totalWeek,
            timeFinalExam: new Date(item.timeFinalExam)
                .toISOString()
                .slice(0, 16),
            totalSlot: item.totalSlot,
            userCourse: item.userCourse,
        });
    };

    const handleDelete = async (id) => {
        await AxiosAPI.delete(`${endpoints.sosy}/${id}`)
            .then(() => {
                setAlert({
                    content: "Delete successfully!",
                    type: "success",
                });
                getDataDropdown(endpoints.sosy, setSosys);
            })
            .catch((err) => console.log(err.response?.data || err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (edit) {
            console.log(sosy);
            await AxiosAPI.patch(`${endpoints.sosy}/${edit}`, sosy)
                .then(() => {
                    setAlert({
                        content: "Update successfully!",
                        type: "success",
                    });
                    setEdit(null);
                    setSosy(initSOSY);
                    getDataDropdown(endpoints.sosy, setSosys);
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

        await AxiosAPI.post(`${endpoints.sosy}/create`, sosy)
            .then(() => {
                setAlert({
                    content: "Create successfully!",
                    type: "success",
                });
                setSosy(initSOSY);
                getDataDropdown(endpoints.sosy, setSosys);
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
        <div>
            <h2>User</h2>
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
                        <th>Subject</th>
                        <th>School Year</th>
                        <th>Class</th>
                        <th>Lecturer</th>
                        <th>Room</th>
                        <th>Credit</th>
                        <th>Start Date</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Day Of Week</th>
                        <th>Total Week</th>
                        <th>Time Final Exam</th>
                        <th>Total Slot</th>
                        <th>User Course</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {sosys.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
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
                                <td>{item.subjectId?.name}</td>
                                <td>{item.schoolYearId?.name}</td>
                                <td>{item.classId?.name}</td>
                                <td>
                                    {item?.lecturerId?.username} -{" "}
                                    {item?.lecturerId?.fullName}
                                </td>
                                <td>{item.roomId?.name}</td>
                                <td>{item.creditId?.price} VND</td>
                                <td>{handleDatetime(item.start)}</td>
                                <td>{item?.fromTime || "---"}</td>
                                <td>{item?.toTime || "---"}</td>
                                <td>{item.timeStudyOfWeek}</td>
                                <td>{item.totalWeek}</td>
                                <td>{handleDatetime(item.timeFinalExam)}</td>
                                <td>{item.totalSlot}</td>
                                <td>{item.userCourse}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <h2
                onClick={() => {
                    setEdit(null);
                }}
            >
                {edit ? "Edit mode" : "Create mode"}
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex gap-2">
                    <Form.Select
                        value={sosy.subjectId}
                        onChange={(e) => handleChange(e, "subjectId")}
                        className="w-33"
                    >
                        <option value={0}>Subject</option>
                        {subjects.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        value={sosy.schoolYearId}
                        onChange={(e) => handleChange(e, "schoolYearId")}
                        className="w-33"
                    >
                        <option value={0}>School Year</option>
                        {schoolyears.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        value={sosy.classId}
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
                        value={sosy.roomId}
                        onChange={(e) => handleChange(e, "roomId")}
                        className="w-33"
                    >
                        <option value={0}>Room</option>
                        {rooms.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        value={sosy.lecturerId}
                        onChange={(e) => handleChange(e, "lecturerId")}
                        className="w-33"
                    >
                        <option value={"NONE"}>Lecturer</option>
                        {lecturers.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.username} - {item.fullName}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        value={sosy.creditId}
                        onChange={(e) => handleChange(e, "creditId")}
                        className="w-33"
                    >
                        <option value={0}>Credit</option>
                        {credits.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.price} VND
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex gap-2 mt-2">
                    <Form.Control
                        value={sosy.start}
                        onChange={(e) => handleChange(e, "start")}
                        className="w-25"
                        title="Start date"
                        type="datetime-local"
                    />
                    <Form.Control
                        value={sosy.totalWeek}
                        onChange={(e) => handleChange(e, "totalWeek")}
                        className="w-25"
                        title="Week study total"
                        type="number"
                        placeholder="Week study total ... "
                    />
                    <Form.Control
                        value={sosy.timeStudyOfWeek}
                        onChange={(e) => handleChange(e, "timeStudyOfWeek")}
                        className="w-25"
                        title="Day of week"
                        maxLength={20}
                        type="text"
                        placeholder="[0, 1, 2, 3, 4, 5, 6]"
                    />
                    <Form.Control
                        value={sosy.userCourse}
                        onChange={(e) => handleChange(e, "userCourse")}
                        className="w-25"
                        title="User study course"
                        type="text"
                        placeholder="User study course ... "
                    />
                </Form.Group>
                <Form.Group className="d-flex gap-2 mt-2">
                    <Form.Control
                        value={sosy.fromTime}
                        onChange={(e) => handleChange(e, "fromTime")}
                        className="w-25"
                        title="From time"
                        type="time"
                    />
                    <Form.Control
                        value={sosy.toTime}
                        onChange={(e) => handleChange(e, "toTime")}
                        className="w-25"
                        title="To time"
                        type="time"
                    />

                    <Form.Control
                        value={sosy.totalSlot}
                        onChange={(e) => handleChange(e, "totalSlot")}
                        className="w-25"
                        title="Slot total"
                        type="number"
                        placeholder="Slot total ... "
                    />

                    <Form.Control
                        value={sosy.timeFinalExam}
                        onChange={(e) => handleChange(e, "timeFinalExam")}
                        className="w-25"
                        title="Time Final Exam"
                        type="datetime-local"
                    />
                </Form.Group>

                <Button className="w-100 mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SubjectOfSchoolYear;
