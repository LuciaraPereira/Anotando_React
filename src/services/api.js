import axios from 'axios';

const api = axios.create({
  // import.meta.env lê a variávelde ambiente vite, definida no arquivo .env
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json'
  }
});
export default api;