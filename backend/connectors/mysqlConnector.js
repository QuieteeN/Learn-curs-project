import mysql from "mysql";
import properties from "./properties.json" assert { type: "json" };

// connect to the database on mysql
const db = mysql.createConnection({
    host: properties.host,
    user: properties.user,
    password: properties.password,
    database: properties.database,
});

// query processing
const query = (sql, data) => {
    return new Promise((resolve, reject) => {
        if (data) {
            db.query(sql, data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        } else {
            db.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    });
};

// export data
export { db, query };
