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
};

export default MajorController;
