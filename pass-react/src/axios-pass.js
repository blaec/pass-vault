import axios from 'axios';
import {authentication} from "./store/localStorage/actions";

const instance = axios.create({
    baseURL: 'https://10.100.102.4:8082/api/v1/'
});

instance.interceptors.request.use(
    config => {
        var token = authentication.get();
        config.headers['Authorization'] = token
            ? `Bearer ${token}`
            : null;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;