import React from "react";
import ReactDOM from "react-dom/client";
import { default as UserProvider } from "~/store/UserContext";
import { default as AlertProvider } from "~/store/AlertContext";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <AlertProvider>
                <App />
            </AlertProvider>
        </UserProvider>
    </React.StrictMode>
);
