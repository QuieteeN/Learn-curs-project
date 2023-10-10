import { query } from "../connectors/mysqlConnector.js";

export default class UserController {
    static getAll = async (req, res) => {
        try {
            const sql = "select * from user_tb";
            const result = await query(sql);
            await res.status(200).json(result);
            console.log(result);
        } catch (err) {
            console.error(err);
            res.status(500).send("Ошибка при подключении к базам данных");
        }
    };

    static getUser = async (req, res) => {
        try {
            const id = req.params.id;
            const sql = `select * from user_tb where id = ${id};`;
            const result = await query(sql);
            await res.status(200).json(result);
            console.log(result);
        } catch (err) {
            console.error(err);
            res.status(500).send("Ошибка при подключении к базам данных");
        }
    };

    static createUser = async (req, res) => {
        try {
            const user = req.body;
            const checkUserSql =
                "SELECT COUNT(*) AS count FROM user_tb WHERE _login = ? OR _email = ?";
            const [userCheckResult] = await query(checkUserSql, [
                user._login,
                user._email,
            ]);

            if (userCheckResult.count > 0) {
                // Пользователь с такими данными уже существует
                return await res.status(400).json({
                    error: "Пользователь с таким логином или адресом электронной почты уже существует",
                });
            }
            const sql =
                "INSERT INTO user_tb (_login, second_name, first_name, _patronymic, _email, password) VALUES (?, ?, ?, ?, ?, ?)";
            const result = await query(sql, Object.values(user));
            await res
                .status(201)
                .json({ ...result, message: "Данные успешно внесены" });
        } catch (err) {
            console.error(err);
            res.status(500).send("Ошибка при подключении к базам данных");
        }
    };
}
