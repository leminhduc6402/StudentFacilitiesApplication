import { createContext } from "react";

const UserContext = createContext({ user: null, dispatch: () => {} });

export { UserContext };
