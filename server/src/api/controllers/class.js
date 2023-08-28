import ClassModel from '../models/class.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const ClassController = {
  create: async (req, res) => {
    const { name } = req.body;

    const classCurr = await ClassModel.findOne({ name });

    if (classCurr) {
      throw new ConflictError('Class already exists !!!');
    }

    const newClass = await ClassModel.create({ name });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newClass._id,
        name: newClass.name,
      },
    });
  },
  getAll: async (req, res) => {
    const classes = await ClassModel.find().sort({ name: 1 });

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: classes,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const classCurr = await ClassModel.findById(id);
    classCurr.name = name;
    await classCurr.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: classCurr,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await ClassModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({
      status: 'success',
      data: null,
    });
  },
};

export default ClassController;
