/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { UserContext } from "./Context";
import { userReducer } from "./reducer";

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(
        userReducer,
        JSON.parse(localStorage.getItem("user")) || null
    );

    return (
        <UserContext.Provider value={[user, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};
