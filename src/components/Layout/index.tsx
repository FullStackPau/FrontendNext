"use client";
import { ReactNode, useContext, useState } from "react";
import { AppContext } from "@/context/app";
import style from "./style.module.css";
import { User } from "@/types";
import Toast from "../Toast";

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props){
    const [users, setUsers] = useState<User[]>([]);
    const [toast, setToast] = useState<string | null>(null);
    return(
        <AppContext.Provider value={{users, toast, setUsers, setToast}}>
            <main className={style.main}>
            {toast !== null ? <Toast/> : null}
                {children}
            </main>
        </AppContext.Provider>

    );
}