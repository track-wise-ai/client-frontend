import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_KEY } from "@/constants";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REST_API}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };
