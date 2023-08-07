import axios from 'axios';
import {authentication} from "./store/localStorage/actions";
import {isJwtExpired} from "./utils/Utils";

const instance = axios.create({
    baseURL: 'https://10.100.102.4:8082/api/v1/'
});

instance.interceptors.request.use(
    config => {
        const token = authentication.get();

        // when jwt is expired - reload page and force logout (see Layout.js)
        if (isJwtExpired(token)) window.location.reload();

        config.headers['Authorization'] = token
            ? `Bearer ${token}`
            : null;

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;