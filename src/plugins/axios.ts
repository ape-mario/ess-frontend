import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7171/api", // Ganti dengan base URL backend-mu
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;