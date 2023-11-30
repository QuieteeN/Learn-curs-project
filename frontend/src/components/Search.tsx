import React from "react";
import { ReactComponent as Icon } from "../icons/search.svg";
import classes from "./moduleStyles/Search.module.css";

export function Search() {
    return (
        <div className={classes.search_block}>
            <input
                type='text'
                name='search'
                placeholder='В разработке...'
                id=''
                className={classes.search_input}
            />
            <Icon className={classes.icon} />
            <button className={classes.search_btn}>Найти</button>
        </div>
    );
}
