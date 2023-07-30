import { Schema, model } from 'mongoose';

const Subject = new Schema(
  {
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      length: 6,
    },
    credit: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Subject', Subject);
