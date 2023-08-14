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
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ROLE_ENUM,
      default: 'STUDENT',
    },
    studentCode: {
      type: String,
      length: 10,
      default: function () {
        const _t = this;
        return _t.username;
      },
    },
    userCourse: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', User);
