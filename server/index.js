import express from 'express';
import dotenv from 'dotenv';
import './src/configs/databases/mongoDB.js';
import 'express-async-errors';
import { errorHandler } from './src/api/middlewares/ErrorHandler.js';
import {
  userRoute,
  classRoute,
  majorRoute,
  departmentRoute,
  schoolYearRoute,
  roomRoute,
  creditRoute,
  subjectRoute,
} from './src/api/routes/index.js';
import { API_ENDPOINTS } from './src/api/endpoints/index.js';

dotenv.config();

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(API_ENDPOINTS.AUTH, userRoute);
app.use(API_ENDPOINTS.CLASS, classRoute);
app.use(API_ENDPOINTS.MAJOR, majorRoute);
app.use(API_ENDPOINTS.ROOM, roomRoute);
app.use(API_ENDPOINTS.DEPARTMENT, departmentRoute);
app.use(API_ENDPOINTS.SCHOOL_YEAR, schoolYearRoute);
app.use(API_ENDPOINTS.CREDIT, creditRoute);
app.use(API_ENDPOINTS.SUBJECT, subjectRoute);

//handle error
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

export { app, PORT };
