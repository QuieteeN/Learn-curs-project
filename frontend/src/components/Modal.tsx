import React from "react";
import classes from "./moduleStyles/Modal.module.css";

/* eslint-disable */
interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
}
/* eslint-enable */

export function Modal({ children, onClose }: IModalProps) {
    return (
        <>
            <div className={classes.out_container} onClick={onClose}>
                {children}
            </div>
        </>
    );
}
