import UserModel from '../../models/user.js';
import bcrypt from 'bcrypt';

export const createAdminUser = async () => {
  const username = '0000000000';

  const user = await UserModel.findOne({ username });

  if (user) return;

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(username, salt);

  await UserModel.create({
    username,
    fullName: 'ADMIN',
    userCourse: '2020',
    password: hashed,
    role: 'ADMIN',
  });
};
