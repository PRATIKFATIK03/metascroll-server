import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`error while listening ::${error} `);
        });
        app.listen(PORT, () => {
            console.log(`sever stared at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`mongodb connect error ${error}`);
    });
