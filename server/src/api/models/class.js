import { Schema, model } from 'mongoose';

const Class = new Schema(
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

export default model('Class', Class);
