import React, { useState } from "react";
import classes from "./moduleStyles/LogIn.module.css";
import { ToggleContent } from "./formComponents/ToggleContent";
import { SignInForm } from "./formComponents/SignInForm";
import { SignUpForm } from "./formComponents/SignUpForm";
import { ReactComponent as Icon } from "../icons/close.svg";

/* eslint-disable */
interface ILogInProps {
    onClose: () => void;
}
/* eslint-enable */

export function LogIn({ onClose }: ILogInProps) {
    const [active, setActive] = useState(false);

    let containerClasses = classes.container;

    containerClasses += active ? " " + classes.active : "";

    return (
        <div
            className={containerClasses}
            id='container'
            onClick={(e) => e.stopPropagation()}
        >
            <div className={classes.form_container + " " + classes.sign_up}>
                <SignUpForm />
            </div>
            <div className={classes.form_container + " " + classes.sign_in}>
                <SignInForm />
            </div>
            <div className={classes.toggle_container}>
                <div className={classes.toggle}>
                    <div
                        className={
                            classes.toggle_panel + " " + classes.toggle_left
                        }
                    >
                        <ToggleContent
                            title='И снова, здравствуй! И снова, как дела?'
                            text='Зайди в аккаунт, чтобы тебе открылись все
                            возможности сайта'
                        />
                        <button
                            className={classes.hidden}
                            id='login'
                            onClick={() => {
                                setActive(false);
                            }}
                        >
                            Войти
                        </button>
                    </div>
                    <div
                        className={
                            classes.toggle_panel + " " + classes.toggle_right
                        }
                    >
                        <ToggleContent
                            title='Привет, друг'
                            text='Зарегистрируйся, чтобы пользоваться всеми
                            возможностями сайта'
                        />
                        <button
                            className={classes.hidden}
                            id='register'
                            onClick={() => {
                                setActive(true);
                            }}
                        >
                            Регистация
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.close_icon} onClick={onClose}>
                <Icon />
            </div>
        </div>
    );
}
