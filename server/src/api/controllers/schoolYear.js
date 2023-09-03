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
  getAll: async (req, res) => {
    const schoolyears = await SchoolYearModel.find().sort();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: schoolyears,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, start, end } = req.body;

    const schoolyear = await SchoolYearModel.findById(id);
    schoolyear.name = name;
    schoolyear.start = start;
    schoolyear.end = end;
    await schoolyear.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: schoolyear,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await SchoolYearModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({
      status: 'success',
      data: null,
    });
  },
};

export default SchoolYearController;
