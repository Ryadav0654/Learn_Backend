import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// dotenv file configuration
dotenv.config({
    path: "./.env",
});


const port = process.env.PORT || 8000;

// calling connectDB function to connect to database
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
