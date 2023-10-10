import { useState } from "react";
import { User } from "../models";
import axios, { AxiosError } from "axios";

export function useLogIn() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function createAccount(data: User) {
        try {
            setError("");
            setLoading(true);
            const response = await axios.post<User>(
                "http://localhost:8000/api/users",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            if (response.status === 201) {
                console.log("Пользователь успешно создан");
            } else if (response.status === 400) {
                setError(
                    "Пользователь с таким логином или адресом электронной почты уже существует"
                );
                console.error(
                    "Пользователь с таким логином или адресом электронной почты уже существует"
                );
            } else {
                setError(
                    "Произошла ошибка при создании пользователя. Пожалуйста сообщите об ошибке."
                );
                console.error("Произошла ошибка при создании пользователя");
            }
            setLoading(false);
            console.log(response.data);
        } catch (err) {
            const error = err as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    return { error, loading, createAccount };
}
