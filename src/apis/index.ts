import axios from "axios";
import tokenStore from "@/store/tokenStore.ts";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_TBAG_API_BASE_URL
});

baseInstance.interceptors.request.use((config) => {
  const acToken = tokenStore.getState().accessToken;
  if (acToken) {
    config.headers.Authorization = `Bearer ${acToken}`;
  }
  return config;
});
