import ClassModel from '../models/class.js';
import ConflictError from '../response/errors/ConflictError.js';
import NotFoundError from '../response/errors/NotFoundError.js';
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
  getByName: async (req, res) => {
    const { name } = req.body;

    const classCurr = await ClassModel.findOne({ name }).lean();

    if (!classCurr) {
      throw new NotFoundError('Class not found !!!');
    }

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: classCurr,
    });
  },
  getById: async (req, res) => {
    const { id } = req.params;

    const classCurr = await ClassModel.findById(id).lean();

    if (!classCurr) {
      throw new NotFoundError('Class not found !!!');
    }

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: classCurr,
    });
  },
};

export default ClassController;
