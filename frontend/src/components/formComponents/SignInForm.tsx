import React from "react";

export function SignInForm() {
    return (
        <form>
            <h2>Авторизация</h2>
            <span>Используйте почту и пароль</span>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>Войти</button>
        </form>
    );
}
