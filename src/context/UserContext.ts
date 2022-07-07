import { createContext} from "react";

type TUserContext = {
    loggedInUser: string;
    setLoggedInUser: () => void;
}

export const UserContext : React.Context<TUserContext> = createContext({
    loggedInUser: '',
    setLoggedInUser: () => {}
})

