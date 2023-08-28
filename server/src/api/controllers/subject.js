import mongoose from 'mongoose';
import SubjectModel from '../models/subject.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const SubjectController = {
  create: async (req, res) => {
    const { code, departmentId, credit, name } = req.body;

    const subjectCurr = await SubjectModel.findOne({ code });

    if (subjectCurr) {
      throw new ConflictError('Subject already exists !!!');
    }

    const newSubject = await SubjectModel.create({
      code,
      departmentId: new mongoose.Types.ObjectId(departmentId),
      credit,
      name,
    });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newSubject._id,
        departmentId: newSubject.departmentId,
        name: newSubject.name,
        code: newSubject.code,
      },
    });
  },
  getAll: async (req, res) => {
    const subjects = await SubjectModel.find().populate('departmentId');

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: subjects,
    });
  },
};

export default SubjectController;
