import express from "express";
import testRouter from "./routes/test.js";
import router from "./routes/router.js";

const app = express();
const PORT = 8000;

app.use(testRouter);
app.use(router);

app.use(express.json());
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
