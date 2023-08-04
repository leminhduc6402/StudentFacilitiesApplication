import express from 'express';
import dotenv from 'dotenv';
import './src/configs/databases/mongoDB.js';
import 'express-async-errors';
import { errorHandler } from './src/api/middlewares/ErrorHandler.js';
import userRoute from './src/api/routes/user.js';

dotenv.config();

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/api/auth', userRoute);

//handle error
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

export { app, PORT };
