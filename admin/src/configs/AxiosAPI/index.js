import axios from "axios";

const endpoints = {
    login: "/auth/login",
    class: "/class",
    major: "/major",
    department: "/department",
    room: "/room",
    schoolyear: "/schoolyear",
};

const AxiosAPI = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export { AxiosAPI, endpoints };
