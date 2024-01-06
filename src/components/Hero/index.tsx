"use client";
import Button from "@/components/Button";
import style from "./style.module.css";
import { AppContext } from "@/context/app";
import { useContext, useState } from "react";
import getUsers from "@/services/getUsers";

export default function Hero(){
    const { setUsers, setToast } = useContext(AppContext);
    const [disable, setDisable] = useState(false);
    const handleError = (text: string = "Error Element") => {
        setToast(text);
        setTimeout(() => {setToast(null)}, 2000);
    }
    const handleFetchUser = async () => {
        setDisable(true);
        const users = await getUsers();
        if(users.length <= 0){
            handleError("Error Getting Users");
            setDisable(false);
            return;
        }
        setUsers(users);
        setTimeout(() => setDisable(false), 400);
    }

    return(
    <section className={style.sectionbutton}>
        <h1>Welcome to the Biggest Recruitment Database!</h1>
        <Button onClick={handleFetchUser} disabled={disable}>Get Users</Button>
    </section>
    );
}