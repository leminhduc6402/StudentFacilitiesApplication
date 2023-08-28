import { createContext } from 'react';

export interface Course {
    subjectId: {
      departmentId: string;
      name: string;
      code: string;
      credit: number;
    };
    schoolYearId: {
      name: string;
      start: string;
      end: string;
    };
    classId: {
      name: string;
    };
    roomId: {
      name: string;
    };
    lecturerId: {
      username: string;
      password: string;
      fullName: string;
      role: string;
      userCourse: string;
      studentCode: string;
    };
    creditId: {
      price: number;
      createdAt: string;
      updatedAt: string;
    };
    totalPrice: number;
    start: string;
    end: string;
    timeStudyOfWeek: string[];
    totalWeek: number;
    timeFinalExam: string;
    userCourse: string;
    slot: number;
  }

const Context = createContext<Course>({
    subjectId: {
      departmentId: '',
      name: '',
      code: '',
      credit: 0,
    },
    schoolYearId: {
      name: '',
      start: '',
      end: '',
    },
    classId: {
      name: '',
    },
    roomId: {
      name: '',
    },
    lecturerId: {
      username: '',
      password: '',
      fullName: '',
      role: '',
      userCourse: '',
      studentCode: '',
    },
    creditId: {
      price: 0,
      createdAt: '',
      updatedAt: '',
    },
    totalPrice: 0,
    start: '',
    end: '',
    timeStudyOfWeek: [],
    totalWeek: 0,
    timeFinalExam: '',
    userCourse: '',
    slot: 0,
  });
  
  export { Context };