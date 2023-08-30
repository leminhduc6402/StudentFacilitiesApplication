import { Schema, model } from 'mongoose';

const SubjectOfSchoolYear = new Schema(
  {
    subjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    schoolYearId: {
      type: Schema.Types.ObjectId,
      ref: 'SchoolYear',
      required: true,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
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
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    fromTime: {
      type: String,
      required: true,
    },
    toTime: {
      type: String,
      required: true,
    },
    timeStudyOfWeek: {
      type: [],
      required: true,
    },
    totalWeek: {
      type: Number,
      required: true,
    },
    timeFinalExam: {
      type: Date,
      required: true,
    },
    userCourse: {
      type: String,
      required: true,
    },
    userCourse: {
      type: String,
      required: true,
    },
    totalSlot: {
      type: Number,
      required: true,
    },
    slotRemain: {
      type: Number,
      required: true,
      default: function () {
        const _t = this;
        return _t.totalSlot;
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model('SubjectOfSchoolYear', SubjectOfSchoolYear);
