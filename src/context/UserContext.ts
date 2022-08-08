import { createContext} from "react";

type TUserContext = {
    loggedInUser: string;
    setLoggedInUser: (user:string) => void;
    authToken: string;
    setAuthToken: (token: string) => void;
}

export const UserContext : React.Context<TUserContext> = createContext({
    loggedInUser: '',
    setLoggedInUser: (user) => {},
    authToken: '',
    setAuthToken: (token) => {}
})

