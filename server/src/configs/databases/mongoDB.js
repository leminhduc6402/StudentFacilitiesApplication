import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/demo")
    .then(() => console.log("Connected to MongoDB Compass!"));
