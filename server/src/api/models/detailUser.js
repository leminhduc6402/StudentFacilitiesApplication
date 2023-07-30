import { Schema, model } from 'mongoose';

const DetailUser = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
    },
    majorId: {
      type: Schema.Types.ObjectId,
      ref: 'Major',
    },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    placeOfBirth: {
      type: Date,
    },
    sex: {
      type: Boolean,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    personalId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('DetailUser', DetailUser);
