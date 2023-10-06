import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server has been started in PORT = ${PORT}`);
});
