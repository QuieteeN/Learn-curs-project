import express from "express";
import testRouter from "./routes/test.js";
import router from "./routes/router.js";

const app = express();
const PORT = 8000;
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    next();
});

app.use(testRouter);
app.use(router);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.group("Server Info:");
    console.log(`Server has been started in  http://localhost:${PORT}`);
    console.groupEnd();
    console.log(
        "\n" +
            "=============================================== <GOOD PROGRAMMING HACKER> ===============================================\n\n"
    );
});
