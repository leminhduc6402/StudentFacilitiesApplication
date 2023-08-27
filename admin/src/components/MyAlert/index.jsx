import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useAlertContext } from "~/hook/useAlertContext";

function MyAlert() {
    const [alert, setAlert] = useAlertContext();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <Alert show={alert} variant={alert.type || "danger"}>
                <Alert.Heading>{alert.title || "Alert"}</Alert.Heading>
                <p>{alert.content}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={() => setAlert(null)}
                        variant={`outline-${alert.type || "danger"}`}
                    >
                        Close
                    </Button>
                </div>
            </Alert>
        </div>
    );
}

export default MyAlert;
