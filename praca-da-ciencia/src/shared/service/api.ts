import axios, { type AxiosInstance } from 'axios';


const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


/**
 * @constant
 * constante que permite fazer requisições para o backend com qualquer método.
 */
export default api;

