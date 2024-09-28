import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {

    try {
        const db_response = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(
            `Database connected: ${db_response.connection.host} and response: ${db_response[0]} ${db_response[1]}`
        );

    } catch (error) {
        console.error("Database error",error.message);
        process.exit(1);
    }
};

export default connectDB;
