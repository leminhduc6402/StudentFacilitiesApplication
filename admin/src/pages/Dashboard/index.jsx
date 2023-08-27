import { useEffect } from "react";
import { useUserContext } from "~/hook/useUserContext";

function Dashboard() {
    const [user, dispatch] = useUserContext();

    useEffect(() => {
        console.log(user);
    }, []);
    return <h1>Dashboard</h1>;
}

export default Dashboard;
