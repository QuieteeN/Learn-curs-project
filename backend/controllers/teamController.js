import { query } from "../connectors/mysqlConnector.js";

export default class TeamController {
    static getAll = async (req, res) => {
        try {
            const sql = "select * from team_tb";
            const result = await query(sql);
            await res.status(200).json(result);
            console.log(res.statusCode);
        } catch (err) {
            console.error(err);
            res.status(500).send("Ошибка при подключении к базам данных");
        }
    };

    static getTeam = async (req, res) => {
        try {
            const id = req.params.id;
            const sql = `select * from team_tb where id = ${id}`;
            const result = await query(sql);
            await res.status(200).json(result);
            console.log(res.status);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    };
}
