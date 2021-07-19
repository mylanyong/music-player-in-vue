import axios from 'axios';

// axios.defaults.baseURL = ' http://localhost:3000/';
axios.defaults.baseURL = ' https://netease-cloud-music-api-two-eta.vercel.app/';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err.response.data));

export default axios;
