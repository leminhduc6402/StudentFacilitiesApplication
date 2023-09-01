import CourseRegisterModel from '../models/courseRegister.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';
import mongoose from 'mongoose';
import {
  calcScore10,
  calcScore4,
  calcScoreC,
} from '../utils/calcScore/index.js';

const CourseRegisterController = {
  create: async (req, res) => {
    const { userId, subjectOfSchoolYearId } = req.body;

    const courseRegister = await CourseRegisterModel.findOne({
      userId,
      subjectOfSchoolYearId,
    });

    if (courseRegister) {
      throw new ConflictError('Course Registry already exists !!!');
    }

    const newCourseRegister = await CourseRegisterModel.create({
      userId: new mongoose.Types.ObjectId(userId),
      subjectOfSchoolYearId: new mongoose.Types.ObjectId(subjectOfSchoolYearId),
      midExamScore: 0,
      finalExamScore: 0,
      score10: 0,
      score4: 0,
      scoreC: '',
      finalResult: '',
    });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: newCourseRegister,
    });
  },
  getAll: async (req, res) => {
    const courseRegisters = await CourseRegisterModel.find()
      .populate({
        path: 'subjectOfSchoolYearId',
      })
      .lean();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: courseRegisters,
    });
  },
  getAllByUserId: async (req, res) => {
    const { userId } = req.params;

    const courseRegisters = await CourseRegisterModel.find(userId)
      .populate({
        path: 'subjectOfSchoolYearId',
        populate: {
          path: 'subjectId',
        },
      })
      .populate({
        path: 'subjectOfSchoolYearId',
        populate: {
          path: 'classId',
        },
      });

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: courseRegisters,
    });
  },
  findByLecturer: async (req, res) => {
    const { lecturer, schoolyear, classCurr, subject } = req.query;

    let courseRegisters = await CourseRegisterModel.find()
      .populate({
        path: 'subjectOfSchoolYearId',
        match: {
          $and: [
            {
              schoolYearId: schoolyear,
              lecturerId: lecturer,
              classId: classCurr,
              subjectId: subject,
            },
          ],
        },
      })
      .populate({
        path: 'userId',
        select: 'username fullName',
      })
      .select('userId midExamScore finalExamScore');

    courseRegisters = courseRegisters.filter(
      (item) => item.subjectOfSchoolYearId
    );

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: courseRegisters,
    });
  },
  getScoreResult: async (req, res) => {
    const { user, schoolyear } = req.query;

    let courseRegisters = await CourseRegisterModel.find({
      userId: user,
    })
      .populate({
        path: 'subjectOfSchoolYearId',
        match: {
          schoolYearId: schoolyear,
        },
        select: '_id subjectId classId',
        populate: [
          {
            path: 'subjectId',
            model: 'Subject',
            select: 'name code credit',
          },
          {
            path: 'classId',
            model: 'Class',
            select: 'name',
          },
        ],
      })

      .select('-createdAt -__v -updatedAt');

    courseRegisters = courseRegisters.filter(
      (item) => item.subjectOfSchoolYearId
    );

    const totalCredit = courseRegisters.reduce(
      (acc, curr) => acc + curr.subjectOfSchoolYearId.subjectId.credit,
      0
    );

    const avgScore =
      courseRegisters.reduce(
        (acc, curr) =>
          acc +
          parseFloat(curr.subjectOfSchoolYearId.subjectId.credit) *
            parseFloat(curr.score4),
        0
      ) / totalCredit;

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: {
        totalCredit,
        avgScore: parseFloat(avgScore).toFixed(2),
        data: courseRegisters,
      },
    });
  },
  updateScore: async (req, res) => {
    const { id } = req.params;
    const { midExamScore, finalExamScore } = req.body;

    const score10 = calcScore10(midExamScore, finalExamScore);

    const courseRegisters = await CourseRegisterModel.findByIdAndUpdate(
      id,
      {
        midExamScore,
        finalExamScore,
        score10,
        score4: calcScore4(score10),
        scoreC: calcScoreC(score10),
        pass: score10 >= 5.0,
      },
      {
        new: true,
      }
    );

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: courseRegisters,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await CourseRegisterModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default CourseRegisterController;
