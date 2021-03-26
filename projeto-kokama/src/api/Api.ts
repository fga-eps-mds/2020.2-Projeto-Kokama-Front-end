import axios from 'axios';
import {TRANSLATE_URL} from "../config/urls";

const api = axios.create({
    baseURL: TRANSLATE_URL,
    timeout: 10*1000,
});

export default api;