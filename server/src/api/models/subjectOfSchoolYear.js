import { Schema, model } from 'mongoose';

const SubjectOfSchoolYear = new Schema(
  {
    subjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Subject',
    },
    schoolYearId: {
      type: Schema.Types.ObjectId,
      ref: 'SchoolYear',
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
    },
    lecturerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    creditId: {
      type: Schema.Types.ObjectId,
      ref: 'Credit',
    },
    totalPrice: {
      type: Number,
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
    timeStudyOfWeek: {
      type: [],
    },
    totalWeek: {
      type: Number,
    },
    timeFinalExam: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default model('SubjectOfSchoolYear', SubjectOfSchoolYear);
