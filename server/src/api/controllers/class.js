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
};

export default ClassController;
