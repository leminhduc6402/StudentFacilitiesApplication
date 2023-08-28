import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "~/components/Sidebar";
import MyAlert from "~/components/MyAlert";
import { useUserContext } from "~/hook/useUserContext";
import { useAlertContext } from "~/hook/useAlertContext";
import { routes } from "./routes";

function App() {
    const [user] = useUserContext();
    const [alert] = useAlertContext();

    return (
        <Router>
            <div className="d-flex">
                {user && <Sidebar />}
                <div
                    style={{
                        width: "calc(100% - 300px)",
                    }}
                    className="p-2"
                >
                    {alert && <MyAlert />}
                    <Routes>
                        {routes.map((route) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
