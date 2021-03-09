// import config from 'dotenv';

import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333/'
    baseURL: 'https://job-match-api.herokuapp.com/'
})

export default api;