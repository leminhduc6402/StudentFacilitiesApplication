import { createContext } from 'react';

export interface User {
  fullName: string;
  id: string;
  role: 'STUDENT' | 'LECTURER' | 'ADMIN';
  studentCode: string;
  userCourse: string;
  username: string;
}

const Context = createContext<User>({
  fullName: '',
  id: '',
  role: 'STUDENT',
  studentCode: '',
  userCourse: '',
  username: '',
});

export { Context };
