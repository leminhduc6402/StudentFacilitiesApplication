import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URI =
  process.env.MONGODB_TYPE == 'local'
    ? process.env.MONGODB_DEV
    : process.env.MONGODB_DEV_ATLAS;

mongoose
  .connect(URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => {
    console.log(err);
  });
