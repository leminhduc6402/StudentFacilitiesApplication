import axios from "axios";

const endpoints = {
    login: "/auth/login",
    signup: "/auth/signup",
    class: "/class",
    major: "/major",
    department: "/department",
    room: "/room",
    schoolyear: "/schoolyear",
    credit: "/credit",
    subject: "/subject",
    user: "/user",
    sosy: "/sosy",
};

const AxiosAPI = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export { AxiosAPI, endpoints };
