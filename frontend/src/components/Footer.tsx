import React from "react";
import { Wrapper } from "./Wrapper";
import classes from "./moduleStyles/Footer.module.css";

export function Footer() {
    return (
        <footer className={classes.footer}>
            <Wrapper>
                <div className={classes.content}></div>
            </Wrapper>
        </footer>
    );
}
