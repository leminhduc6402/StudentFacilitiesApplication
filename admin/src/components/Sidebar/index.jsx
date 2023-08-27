import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserContext } from "~/hook/useUserContext";

function Sidebar() {
    const [user, dispatch] = useUserContext();

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
    };

    return (
        <div
            style={{
                height: "100vh",
                minWidth: "300px",
                borderRight: "1px solid #dee2e6",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <ListGroup
                style={{
                    borderRadius: 0,
                    borderWidth: "0px",
                }}
            >
                <Link to="/">
                    <ListGroup.Item>Home</ListGroup.Item>
                </Link>
                <Link to="/user">
                    <ListGroup.Item>User</ListGroup.Item>
                </Link>
                <Link to="/class">
                    <ListGroup.Item>Class</ListGroup.Item>
                </Link>
                <Link to="/major">
                    <ListGroup.Item>Major</ListGroup.Item>
                </Link>
                <Link to="/department">
                    <ListGroup.Item>Department</ListGroup.Item>
                </Link>
                <Link to="/room">
                    <ListGroup.Item>Room</ListGroup.Item>
                </Link>
                <Link to="/schoolyear">
                    <ListGroup.Item>School Year</ListGroup.Item>
                </Link>
                <Link to="/subject">
                    <ListGroup.Item>Subject</ListGroup.Item>
                </Link>
            </ListGroup>

            <ListGroup
                style={{
                    marginTop: "auto",
                }}
            >
                <Link to="/auth/login">
                    <ListGroup.Item onClick={handleLogout}>
                        Logout {user?.fullName}
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
