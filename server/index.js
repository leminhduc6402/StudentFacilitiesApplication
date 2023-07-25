import express from "express";
import "./src/configs/databases/mongoDB.js";
import userRoute from "./src/api/routes/user.js";

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/auth", userRoute);

const PORT = process.env.PORT || 8080;

export { app, PORT };
