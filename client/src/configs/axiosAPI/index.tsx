import axios from 'axios';

const endpoints = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LIST_COURSES: '/sosy/usercourse/',
  COURSE_REGISTER_CREATE: '/course-register/create',
  COURSE_REGISTER_FIND: '/course-register/',
  COURSE_REGISTER_DELETE: '/course-register/',
};

const axiosAPI = axios.create({
  baseURL: 'http://10.0.2.2:8080/api',
});

export { endpoints, axiosAPI };
