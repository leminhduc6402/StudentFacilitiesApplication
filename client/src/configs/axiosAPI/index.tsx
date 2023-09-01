import axios from 'axios';

const endpoints = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  SOSY: '/sosy',
  LIST_COURSES: '/sosy/usercourse/',
  LIST_COURSES_BY_DEPARTMENT: '/sosy/departmentId/',
  LIST_COURSES_BY_CLASS: '/sosy/classId/',
  LIST_COURSES_BY_SUBJECT: '/sosy/subjectId/',
  COURSE_REGISTER_CREATE: '/course-register/create',
  COURSE_REGISTER_FIND: '/course-register/',
  COURSE_REGISTER_DELETE: '/course-register/',
  COURSE_REGISTER: '/course-register/',
  SCHOOL_YEAR: '/schoolyear',
  DEPARTMENT: '/department',
  SUBJECT: '/subject',
  CLASS: '/class',
  USER: '/user',
};

const axiosAPI = axios.create({
  baseURL: 'http://10.0.2.2:8080/api',
});

export { endpoints, axiosAPI };
