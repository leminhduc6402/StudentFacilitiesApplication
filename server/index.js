import express from 'express';
import dotenv from 'dotenv';
import './src/configs/databases/mongoDB.js';
import 'express-async-errors';
import cors from 'cors';
import { errorHandler } from './src/api/middlewares/ErrorHandler.js';
import {
  authRoute,
  userRoute,
  classRoute,
  majorRoute,
  departmentRoute,
  schoolYearRoute,
  roomRoute,
  creditRoute,
  subjectRoute,
  sosyRoute,
  courseRegisterRoute,
} from './src/api/routes/index.js';
import { API_ENDPOINTS } from './src/api/endpoints/index.js';
import { createAdminUser } from './src/api/utils/initAdminUser/index.js';

dotenv.config();

const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use(API_ENDPOINTS.AUTH, authRoute);
app.use(API_ENDPOINTS.USER, userRoute);
app.use(API_ENDPOINTS.CLASS, classRoute);
app.use(API_ENDPOINTS.MAJOR, majorRoute);
app.use(API_ENDPOINTS.ROOM, roomRoute);
app.use(API_ENDPOINTS.DEPARTMENT, departmentRoute);
app.use(API_ENDPOINTS.SCHOOL_YEAR, schoolYearRoute);
app.use(API_ENDPOINTS.CREDIT, creditRoute);
app.use(API_ENDPOINTS.SUBJECT, subjectRoute);
app.use(API_ENDPOINTS.SOSY, sosyRoute);
app.use(API_ENDPOINTS.COURSE_REGISTER, courseRegisterRoute);

//handle error
app.use(errorHandler);

createAdminUser();

const PORT = process.env.PORT || 8080;

export { app, PORT };
