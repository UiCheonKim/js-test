// API.js
// axios 의 인스턴스를 생성
// const axios = require('axios');
import axios from 'axios';

// Get 메서드 호출을 위한 axios.create 인스턴스 생성
const API = axios.create({
    baseURL: 'https://b3be-218-236-45-186.ngrok-free.app/nipa/',
});

export default API;