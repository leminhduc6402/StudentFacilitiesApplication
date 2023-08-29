import axios from 'axios';

const endpoints = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LISTCOURSES: '/subjectschoolyear/usercourse',
  SCHOOL_YEAR: '/schoolyear',
};

const axiosAPI = axios.create({
  baseURL: 'http://10.0.2.2:8080/api',
});

export { endpoints, axiosAPI };
