import axios from "axios";

// define the base url
// const baseUrl = 'https://node-fsd61wde.onrender.com';
const baseUrl = 'http://localhost:3001';

// define the axios instance
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,

});

// export the instance
export default instance;