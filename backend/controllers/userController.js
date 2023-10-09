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
            console.log(req.body);
            res.status(201);
        } catch (error) {
            console.error(err);
            res.status(500).send("Ошибка при подключении к базам данных");
        }
    };
}
