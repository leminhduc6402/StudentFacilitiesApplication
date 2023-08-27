import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "~/pages/Dashboard";
import User from "~/pages/User";
import Sidebar from "~/components/Sidebar";
import MyAlert from "~/components/MyAlert";
import Login from "~/pages/Login";
import { useUserContext } from "~/hook/useUserContext";
import { useAlertContext } from "~/hook/useAlertContext";

function App() {
    const [user] = useUserContext();
    const [alert, setAlert] = useAlertContext();

    return (
        <Router>
            <div className="d-flex">
                {user && <Sidebar />}
                <div className="flex-fill">
                    {alert && <MyAlert />}
                    <Routes>
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
