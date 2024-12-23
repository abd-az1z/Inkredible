import axios from "axios";

const DEPLOYED = "https://pear-poised-hen.cyclic.app/";
const LOCALHOST = "http://localhost:5454";

export const API_BASE_URL = LOCALHOST; // Use DEPLOYED in production

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach the JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("Attaching Token:", token); 
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;