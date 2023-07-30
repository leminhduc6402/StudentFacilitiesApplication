import { Schema, model } from 'mongoose';

const Room = new Schema(
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

export default model('Room', Room);
