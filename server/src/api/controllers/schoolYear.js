import SchoolYearModel from '../models/schoolYear.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const SchoolYearController = {
  create: async (req, res) => {
    const { name, start, end } = req.body;

    const schoolYearCurr = await SchoolYearModel.findOne({ name });

    if (schoolYearCurr) {
      throw new ConflictError('SchoolYear already exists !!!');
    }

    const newSchoolYear = await SchoolYearModel.create({ name, start, end });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newSchoolYear._id,
        name: newSchoolYear.name,
        start: newSchoolYear.start,
        end: newSchoolYear.end,
      },
    });
  },
};

export default SchoolYearController;
