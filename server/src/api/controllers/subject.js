import mongoose from 'mongoose';
import SubjectModel from '../models/subject.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const SubjectController = {
  create: async (req, res) => {
    const { code, departmentId, creditCount, name } = req.body;

    const subjectCurr = await SubjectModel.findOne({ code });

    if (subjectCurr) {
      throw new ConflictError('Subject already exists !!!');
    }

    const newSubject = await SubjectModel.create({
      code,
      departmentId: new mongoose.Types.ObjectId(departmentId),
      credit: creditCount,
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
    const subjects = await SubjectModel.find()
      .populate('departmentId')
      .sort({ name: 1 });

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: subjects,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { code, departmentId, creditCount, name } = req.body;

    const subject = await SubjectModel.findById(id);
    subject.name = name;
    subject.code = code;
    subject.departmentId = departmentId;
    subject.credit = creditCount;
    await subject.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: subject,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await SubjectModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default SubjectController;
