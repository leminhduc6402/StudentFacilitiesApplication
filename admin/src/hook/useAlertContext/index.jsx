import { useContext } from "react";
import { AlertContext } from "~/store/AlertContext";

export const useAlertContext = () => {
    const [alert, setAlert] = useContext(AlertContext);
    return [alert, setAlert];
};
