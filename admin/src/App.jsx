import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "~/pages/Dashboard";
import User from "~/pages/User";
import Sidebar from "~/components/Sidebar";
import MyAlert from "~/components/MyAlert";
import Login from "~/pages/Login";
import Class from "~/pages/Class";
import Major from "~/pages/Major";
import Department from "~/pages/Department";
import { useUserContext } from "~/hook/useUserContext";
import { useAlertContext } from "~/hook/useAlertContext";
import Room from "./pages/Room";
import SchoolYear from "./pages/SchoolYear";

function App() {
    const [user] = useUserContext();
    const [alert] = useAlertContext();

    return (
        <Router>
            <div className="d-flex">
                {user && <Sidebar />}
                <div className="flex-fill p-2">
                    {alert && <MyAlert />}
                    <Routes>
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/class" element={<Class />} />
                        <Route path="/major" element={<Major />} />
                        <Route path="/department" element={<Department />} />
                        <Route path="/room" element={<Room />} />
                        <Route path="/schoolyear" element={<SchoolYear />} />

                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
