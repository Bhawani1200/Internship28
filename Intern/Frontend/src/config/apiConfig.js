// import axios from "axios";

// export const API_BASE_URL = "http://localhost:5454";
// const jwt = localStorage.getItem("jwt");

// export const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     Authorization: `Bearer${jwt}`,
//     "content-type": "application/json",
//   },
// });
import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

// Create axios instance without static headers
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

// Add request interceptor to dynamically add token
api.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem("jwt");
    
    if (jwt) {
      // Add space after "Bearer" - CRITICAL FIX
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);