import { Schema, model } from 'mongoose';

const CourseRegister = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    subjectOfSchoolYearId: {
      type: Schema.Types.ObjectId,
      ref: 'SubjectOfSchoolYear',
    },
    midExamScore: {
      type: Number,
    },
    finalExamScore: {
      type: Number,
    },
    score10: {
      type: Number,
    },
    score4: {
      type: Number,
    },
    scoreC: {
      type: String,
    },
    pass: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('CourseRegister', CourseRegister);
