import mongoose from 'mongoose';
import SOSYModel from '../models/subjectOfSchoolYear.js';
import CreditModel from '../models/credit.js';
import SubjectModel from '../models/subject.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';
import { parse } from 'dotenv';

const SOSYController = {
  create: async (req, res) => {
    const {
      subjectId,
      schoolYearId,
      classId,
      lecturerId,
      roomId,
      creditId,
      ...data
    } = req.body;

    const sosy = await SOSYModel.findOne({
      subjectId,
      schoolYearId,
      classId,
      lecturerId,
      roomId,
      creditId,
    });

    if (sosy) {
      throw new ConflictError('Subject already exists !!!');
    }

    const credit = await CreditModel.findById(creditId);
    const subject = await SubjectModel.findById(subjectId);

    const totalPrice = parseInt(credit.price) * parseInt(subject.credit);

    const newSosy = await SOSYModel.create({
      ...data,
      subjectId: new mongoose.Types.ObjectId(subjectId),
      schoolYearId: new mongoose.Types.ObjectId(schoolYearId),
      classId: new mongoose.Types.ObjectId(classId),
      lecturerId: new mongoose.Types.ObjectId(lecturerId),
      roomId: new mongoose.Types.ObjectId(roomId),
      creditId: new mongoose.Types.ObjectId(creditId),
      totalPrice,
    });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: newSosy,
    });
  },
  getAll: async (req, res) => {
    const sosys = await SOSYModel.find()
      .populate({
        path: 'subjectId',
        select: '_id name code',
      })
      .populate({
        path: 'schoolYearId',
        select: '_id name',
      })
      .populate({
        path: 'classId',
        select: '_id name',
      })
      .populate({
        path: 'roomId',
        select: '_id name',
      })
      .populate({
        path: 'lecturerId',
        select: '_id fullName username',
      })
      .populate({
        path: 'creditId',
        select: '_id price',
      })
      .lean();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosys,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const {
      subjectId,
      schoolYearId,
      classId,
      roomId,
      lecturerId,
      creditId,
      ...data
    } = req.body;

    const credit = await CreditModel.findById(creditId);
    const subject = await SubjectModel.findById(subjectId);

    const totalPrice = parseInt(credit.price) * parseInt(subject.credit);

    const sosy = await SOSYModel.findByIdAndUpdate(id, {
      ...data,
      subjectId: new mongoose.Types.ObjectId(subjectId),
      schoolYearId: new mongoose.Types.ObjectId(schoolYearId),
      classId: new mongoose.Types.ObjectId(classId),
      roomId: new mongoose.Types.ObjectId(roomId),
      lecturerId: new mongoose.Types.ObjectId(lecturerId),
      creditId: new mongoose.Types.ObjectId(creditId),
      totalPrice,
    });

    await subject.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosy,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await SOSYModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default SOSYController;
