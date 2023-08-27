import { useContext } from "react";
import { UserContext } from "~/store/UserContext";

export const useUserContext = () => {
    const [user, dispatch] = useContext(UserContext);
    return [user, dispatch];
};
