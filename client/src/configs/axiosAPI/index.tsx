import axios from 'axios';

const endpoints = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  SOSY: '/sosy',
  COURSE_REGISTER: '/course-register',
  SCHOOL_YEAR: '/schoolyear',
  DEPARTMENT: '/department',
  CLASS: '/class',
  SUBJECT: '/subject',
  USER: '/user',
};

const axiosAPI = axios.create({
  baseURL: 'http://10.0.2.2:8080/api',
  // baseURL: 'http://192.168.1.104:8080/api',
});

export { endpoints, axiosAPI };
