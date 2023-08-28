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
<<<<<<< Updated upstream
  sosyRoute,
=======
  subjectSchoolYearRoute,
>>>>>>> Stashed changes
} from './src/api/routes/index.js';
import { API_ENDPOINTS } from './src/api/endpoints/index.js';

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
<<<<<<< Updated upstream
app.use(API_ENDPOINTS.SOSY, sosyRoute);
=======
app.use(API_ENDPOINTS.SUBJECT_SCHOOL_YEAR, subjectSchoolYearRoute);
>>>>>>> Stashed changes

//handle error
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

export { app, PORT };
