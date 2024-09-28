import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();
const port = process.env.PORT || 8000;

// dotenv file configuration
dotenv.config({
    path: "./.env",
});


// calling connectDB function to connect to database
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to backend World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
