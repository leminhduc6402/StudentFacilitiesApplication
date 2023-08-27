import CreditModel from '../models/credit.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const CreditController = {
  create: async (req, res) => {
    const { price } = req.body;

    const newCredit = await CreditModel.create({ price });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newCredit._id,
        name: newCredit.name,
      },
    });
  },
  getAll: async (req, res) => {
    const credits = await CreditModel.find();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: credits,
    });
  },
};

export default CreditController;
