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
  update: async (req, res) => {
    const { id } = req.params;
    const { price } = req.body;

    const credit = await CreditModel.findById(id);
    credit.price = price;
    await credit.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: credit,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await CreditModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({
      status: 'success',
      data: null,
    });
  },
};

export default CreditController;
