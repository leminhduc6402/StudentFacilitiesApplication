import UserModel from '../models/user.js';
import DetailUserModel from '../models/detailUser.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserController = {
  getAllUser: async (req, res) => {
    const users = await DetailUserModel.find()
      .populate({
        path: 'userId',
        select: '_id username fullName userCourse role',
      })
      .populate({
        path: 'classId',
        select: '_id name',
      })
      .populate({
        path: 'departmentId',
        select: '_id name',
      })
      .populate({
        path: 'majorId',
        select: '_id name',
      })
      .lean();
    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: users,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { username, role, fullName, userCourse, ...dataUserDetail } =
      req.body;

    const user = await UserModel.findById(id);

    if (!user) {
      throw new ConflictError('User not found !!!');
    }

    user.username = username;
    user.role = role;
    user.fullName = fullName;
    user.userCourse = userCourse;
    await user.save();

    const detailUser = await DetailUserModel.findOne({ userId: id });

    detailUser.classId = new mongoose.Types.ObjectId(dataUserDetail.classId);
    detailUser.departmentId = new mongoose.Types.ObjectId(
      dataUserDetail.departmentId
    );
    detailUser.majorId = new mongoose.Types.ObjectId(dataUserDetail.majorId);
    detailUser.dateOfBirth = dataUserDetail.dateOfBirth;
    detailUser.placeOfBirth = dataUserDetail.placeOfBirth;
    detailUser.sex = dataUserDetail.sex;
    detailUser.phone = dataUserDetail.phone;
    detailUser.email = dataUserDetail.email;
    detailUser.personalId = dataUserDetail.personalId;
    detailUser.address = dataUserDetail.address;

    await detailUser.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: detailUser,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await UserModel.findByIdAndDelete(id);

    await DetailUserModel.findOneAndDelete({ userId: id });

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default UserController;
