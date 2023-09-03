/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "~/hook/useUserContext";

function Wrapper({ children }) {
    const nav = useNavigate();
    const location = useLocation();

    const [user] = useUserContext();

    useEffect(() => {
        if (!user && !location.pathname.includes("/auth/login")) {
            nav("/auth/login");
        }

        if (user && location.pathname.includes("/auth/login")) {
            console.log("OK 2");
            nav("/");
        }
    }, [user, location.pathname]);

    return <>{children}</>;
}

export default Wrapper;
