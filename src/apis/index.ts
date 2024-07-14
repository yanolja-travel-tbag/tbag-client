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

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const rfToken = authStore.getState().refreshToken;
    if (error.response.status === 401 && rfToken) {
      const res = await axios.get("/auth/tokenRefresh", {
        baseURL: import.meta.env.VITE_TBAG_API_BASE_URL,
        headers: {
          Authorization: `Bearer ${rfToken}`
        }
      });
      authStore.setState({
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken
      });
    }
    return Promise.reject(error);
  }
);
