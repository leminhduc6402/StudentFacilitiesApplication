import UserModel from '../models/user.js';
import ValidateError from '../errors/ValidateError.js';

const UserController = {
  signUp: async (req, res) => {
    try {
      const { username, password, fullName } = req.body;
      console.log(req.body);
      const user = await UserModel.create({ username, password, fullName });

      return res.status(201).json({ user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Server error' });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new ValidateError('User not found !!!');
    }

    return res.status(200).json({ user });
  },
};

export default UserController;
