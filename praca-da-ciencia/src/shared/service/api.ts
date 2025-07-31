// src/services/api.ts
import axios, { type AxiosInstance } from 'axios';

// Acessa a variável de ambiente
const apiBaseUrl = import.meta.env.VITE_API_URL;

// Cria e exporta uma instância do Axios
const api: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

