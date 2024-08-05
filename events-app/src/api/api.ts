import axios from "axios";

const api = axios.create({
  baseURL: "http://events-api:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
