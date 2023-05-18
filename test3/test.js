// GET 메서드인 url에서 받은 결과값 중 response.data를 corgi 라는 이름의 변수에 저장
// const axios = require('axios');
import axios from 'axios';
const url = 'https://b3be-218-236-45-186.ngrok-free.app/nipa/ping';

try {
    axios.get(url)
      .then((response) => {
        let corgi = response.data;
        console.log(corgi);
      });
} catch (error) {
    console.error(error);
}
