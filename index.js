import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 8000

const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {

    try {   
        await mongoose.connect(mongoUrl);
        console.log('MongoDB connected');
    } catch (error) {   
        console.error(error.message);
        process.exit(1);
    }
}

connectDB();
app.get('/', (req, res) => {
    res.send('Welcome to backend World')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})