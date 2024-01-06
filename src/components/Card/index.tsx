import { HTMLAttributes, useContext } from "react";
import style from "./style.module.css";
import { User } from "@/types";
import Button from "../Button";

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    data: User;
    onDeleteCard: (id: number) => void;
}
export default function Card({data, onDeleteCard,  ...props}: CardProps){

    const { id, name, email, phone, company: { name:companyname, catchPhrase, bs } } = data;

    return (
        <div className={style.wrappercard}>
            <div className={style.card} {...props}>
                <h3>{name}</h3>
                <h5>{email}</h5>
                <div className={style.companycard}>
                    <p><b>Phone:</b> {phone}</p>
                    <p><b>Company:</b> {companyname}</p>
                    <p><b>Attitude:</b> {catchPhrase}</p>
                    <p><b>Objective:</b> {bs}</p>
                </div>
                <Button onClick={() => onDeleteCard(id)} type="danger" size="small" className={style.rightdeletebutton}>Delete</Button>
            </div>

        </div> 
    );
}