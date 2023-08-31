import { createContext } from 'react';

export const initialUser = {
  fullName: '',
  id: '',
  role: 'STUDENT',
  studentCode: '',
  userCourse: '',
  username: '',
  departmentId: '',
  classId: '',
};

export interface User {
  fullName: string;
  id: string;
  role: 'STUDENT' | 'LECTURER' | 'ADMIN';
  studentCode: string;
  userCourse: string;
  username: string;
  departmentId: string;
  classId: string;
}

const Context = createContext<User>(initialUser as User);

export { Context };
