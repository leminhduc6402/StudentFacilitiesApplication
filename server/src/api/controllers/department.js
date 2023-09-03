import DepartmentModel from '../models/department.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const DepartmentController = {
  create: async (req, res) => {
    const { name } = req.body;

    const department = await DepartmentModel.findOne({ name });

    if (department) {
      throw new ConflictError('Department already exists !!!');
    }

    const newDepartment = await DepartmentModel.create({ name });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newDepartment._id,
        name: newDepartment.name,
      },
    });
  },
  getAll: async (req, res) => {
    const departments = await DepartmentModel.find().sort({ name: 1 });

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: departments,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const department = await DepartmentModel.findById(id);
    department.name = name;
    await department.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: department,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await DepartmentModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default DepartmentController;
