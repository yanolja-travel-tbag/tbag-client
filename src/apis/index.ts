import axios from "axios";
import authStore from "@/store/authStore.ts";
import localeStore from "@/store/localeStore.ts";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_TBAG_API_BASE_URL
});

baseInstance.interceptors.request.use((config) => {
  const acToken = authStore.getState().accessToken;
  const locale = localeStore.getState().locale;
  if (acToken) {
    config.headers.Authorization = `Bearer ${acToken}`;
  }
  config.headers.set("Accept-Language", locale);
  return config;
});
