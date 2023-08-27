import axios from "axios";

const endpoints = {
    login: "/auth/login",
};

const AxiosAPI = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export { AxiosAPI, endpoints };
