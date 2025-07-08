import axios from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "@/constants";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REST_API}/api/v2`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get(ACCESS_TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };
