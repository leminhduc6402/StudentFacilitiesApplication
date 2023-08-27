/* eslint-disable react/prop-types */
import { useState } from "react";
import { AlertContext } from "./Context";

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    return (
        <AlertContext.Provider value={[alert, setAlert]}>
            {children}
        </AlertContext.Provider>
    );
};
