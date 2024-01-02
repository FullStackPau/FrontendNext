import { User } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";


type AppContextType =  {
    users: User[],
    setUsers: Dispatch<SetStateAction<User[]>>;
    toast: string | null,
    setToast: Dispatch<SetStateAction<string | null>>

}
export const AppContext = createContext<AppContextType>({
    users:[],
    setUsers: () => {},
    toast:null,
    setToast: () => {}
});

