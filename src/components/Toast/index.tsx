"use client";
import { HTMLAttributes, useContext } from "react";
import style from "./style.module.css";
import { AppContext } from "@/context/app";

interface IToast extends HTMLAttributes<HTMLDivElement>{
    typeStyle?: string;
}
export default function Toast({className, typeStyle="error", ...props}:IToast){
    const { toast } = useContext(AppContext);
    const type: { [key:string]: string} = {
        error: `${style.error}`
    }
    const classNames = `${type[typeStyle]} ${className}`;
    return(
        <div className={classNames} {...props}>{toast}</div>
    );
}