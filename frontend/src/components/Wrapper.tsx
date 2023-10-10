import React from "react";
import classes from "./moduleStyles/Wrapper.module.css";

/* eslint-disable */
interface WrapperProps {
    children: React.ReactNode;
}

/* eslint-enable */

export function Wrapper({ children }: WrapperProps) {
    return <div className={classes.wrapper}>{children}</div>;
}
