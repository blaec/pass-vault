import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.100.102.4:8082/api/v1/'
});

export default instance;