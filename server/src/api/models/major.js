import { Schema, model } from 'mongoose';

const Major = new Schema(
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

export default model('Major', Major);
