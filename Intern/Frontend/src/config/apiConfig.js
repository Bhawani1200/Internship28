import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseUrl: API_BASE_URL,
  headers: {
    Authorization: `Bearer${jwt}`,
    "content-type": "application/json",
  },
});
