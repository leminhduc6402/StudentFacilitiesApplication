import { createContext } from 'react';

export const initialUser = {
  fullName: '',
  id: '',
  role: 'STUDENT',
  studentCode: '',
  userCourse: '',
  username: '',
};

export interface User {
  fullName: string;
  id: string;
  role: 'STUDENT' | 'LECTURER' | 'ADMIN';
  studentCode: string;
  userCourse: string;
  username: string;
}

const Context = createContext<User>(initialUser as User);

export { Context };
