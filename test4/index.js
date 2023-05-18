// const API = require('./api');
import API from './api.js';

// API 호출
const getAPI = async () => {
    try {
        const response = await API.get('/ping');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getAPI();