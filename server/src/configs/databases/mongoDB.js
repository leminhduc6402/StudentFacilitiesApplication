import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
    .connect(process.env.MONGODB_DEV)
    .then(() => console.log("Connected to MongoDB Compass!"));
