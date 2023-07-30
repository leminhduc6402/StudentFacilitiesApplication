import { Schema, model } from 'mongoose';

const ROLE_ENUM = ['STUDENT', 'ADMIN', 'LECTURER'];

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    role: {
      type: String,
      enum: ROLE_ENUM,
      default: 'STUDENT',
    },
    studentCode: {
      type: String,
      length: 10,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', User);
