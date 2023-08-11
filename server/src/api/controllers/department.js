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
};

export default DepartmentController;
