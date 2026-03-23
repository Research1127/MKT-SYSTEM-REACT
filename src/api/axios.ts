import axios from "axios";
const apiBaseURL = import.meta.env.VITE_API_URL;
// Create Axios instance
const api = axios.create({
  baseURL: `${apiBaseURL}`, // Backend base URL
});


export default api;