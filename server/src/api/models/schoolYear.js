import { Schema, model } from 'mongoose';

const SchoolYear = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('SchoolYear', SchoolYear);
