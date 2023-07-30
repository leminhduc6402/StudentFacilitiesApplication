import { Schema, model } from 'mongoose';

const Department = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Department', Department);
