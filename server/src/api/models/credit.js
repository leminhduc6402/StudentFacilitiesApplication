import { Schema, model } from 'mongoose';

const Credit = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Credit', Credit);
