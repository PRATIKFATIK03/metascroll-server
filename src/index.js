import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, respons) => {
    respons.send("<h1>helo world</h1>");
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`sever stared at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`mongodb connect error ${error}`);
    });
