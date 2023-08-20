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
};

export default CreditController;
