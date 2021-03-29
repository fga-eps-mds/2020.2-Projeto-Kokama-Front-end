import axios from 'axios';

const api = axios.create({
    timeout: 10*1000,
});

export default api;