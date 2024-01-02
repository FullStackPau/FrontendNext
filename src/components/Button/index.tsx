import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./style.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "secondary" | "tertiary" | "danger"
  size?: "full" | "big" | "medium" | "small";
  disabled?: boolean;
}


export default function Button({ children, className, disabled=false, type="primary", size="big", ...props }:ButtonProps){
    //We can use the package classNames(better approach)
    const classNames = `${styles[type]} ${styles[size]} ${disabled ? styles.tertiary : ""} ${className ? className : ""}`
    return(
        <button className={classNames} disabled={disabled} {...props}>{children}</button>
    );
}