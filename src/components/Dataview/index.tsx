"use client";
import { User } from "@/types";
import style from "./style.module.css";
import Card from "../Card";
import { AppContext } from "@/context/app";
import { useContext } from "react";


export default function Dataview(){
    const { users, setUsers } = useContext(AppContext);
    const handleDeleteCard = (id: number) => {
        setUsers((state) => state.filter(item => item.id !== id));
    }
    return(
        <section  className={style.sectiondata}>
            {users.length > 0 ? users.map((user: User) => (
            <Card key={user.id} data={user} onDeleteCard={handleDeleteCard}/>
            )) : <div className={style.texttofetchdata}>Click the button to get users list</div>}
        </section>
    );
}
