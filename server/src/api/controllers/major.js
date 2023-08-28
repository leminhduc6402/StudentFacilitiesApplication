import MajorModel from '../models/major.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const MajorController = {
  create: async (req, res) => {
    const { name } = req.body;

    const major = await MajorModel.findOne({ name });

    if (major) {
      throw new ConflictError('Major already exists !!!');
    }

    const newMajor = await MajorModel.create({ name });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newMajor._id,
        name: newMajor.name,
      },
    });
  },
  getAll: async (req, res) => {
    const majors = await MajorModel.find();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: majors,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const major = await MajorModel.findById(id);
    major.name = name;
    await major.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: major,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await MajorModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default MajorController;
