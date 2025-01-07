import axios from 'axios';

const newRequest = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}/api/`,
  withCredentials: true,
});

export default newRequest;
