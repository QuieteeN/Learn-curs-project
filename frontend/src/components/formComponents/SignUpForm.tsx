import React, { useState } from "react";
import { useLogIn } from "../../hooks/LogIn";
import classes from "../moduleStyles/LogIn.module.css";

export function SignUpForm() {
    const { error, loading, createAccount } = useLogIn();
    const [username, setUsername] = useState("");
    const [secondName, setSecondName] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [warning, setWarning] = useState(false);

    let inputClasses = "";
    inputClasses += error ? " " + classes.error : "";
    inputClasses += loading ? " " + classes.loading : "";
    inputClasses += warning ? " " + classes.warning : "";

    function submitHandler(event: React.FormEvent) {
        if (username && secondName && name && patronymic && email && password) {
            createAccount({
                _login: username,
                second_name: secondName,
                first_name: name,
                _patronymic: patronymic,
                _email: email,
                password: password,
            });
        } else {
            setWarning(true);
        }
        event.preventDefault();
    }

    function changeHandler(
        event: React.ChangeEvent<HTMLInputElement>,
        func: (data: string) => void
    ) {
        func(event.target.value);
        setWarning(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Создайте аккаунт</h2>
            <span>Заполните поля для регистрации</span>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => changeHandler(event, setUsername)}
                className={inputClasses}
            />
            <input
                type='text'
                placeholder='Фамилия'
                value={secondName}
                onChange={(event) => changeHandler(event, setSecondName)}
                className={inputClasses}
            />
            <input
                type='text'
                placeholder='Имя'
                value={name}
                onChange={(event) => changeHandler(event, setName)}
                className={inputClasses}
            />
            <input
                type='text'
                placeholder='Отчество'
                value={patronymic}
                onChange={(event) => changeHandler(event, setPatronymic)}
                className={inputClasses}
            />
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(event) => changeHandler(event, setEmail)}
                className={inputClasses}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(event) => changeHandler(event, setPassword)}
                className={inputClasses}
            />
            <button>Создать</button>
        </form>
    );
}
