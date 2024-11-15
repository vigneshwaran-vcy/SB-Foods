import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust this path to match your backend endpoint
});

export default api;
