import React from "react";
import classes from "./moduleStyles/Header.module.css";
import { Wrapper } from "./Wrapper";
import { Search } from "./Search";

/* eslint-disable */
interface IHeaderProps {
    onOpen: () => void;
}
/* eslint-enable */

export function Header({ onOpen }: IHeaderProps) {
    return (
        <header className={classes.header}>
            <Wrapper>
                <section className={classes.header_content}>
                    <div className={classes.logo}>DistLearn</div>
                    <Search></Search>
                    <div className={classes.btn} onClick={onOpen}>
                        Войти
                    </div>
                </section>
            </Wrapper>
        </header>
    );
}
