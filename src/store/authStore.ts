import { persist } from "zustand/middleware";
import { create } from "zustand";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  isRegistered: boolean | null;
  setToken: (accessToken: string, refreshToken: string) => void;
  setUserId: (userId: string) => void;
  setRegistered: (isRegistered: boolean) => void;
  removeToken: () => void;
  removeAllAuthInfo: () => void;
};

const authStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      userId: null,
      isRegistered: null,
      setToken: (accessToken: string, refreshToken: string) =>
        set({ accessToken, refreshToken }),
      setUserId: (userId: string) => set({ userId }),
      setRegistered: (isRegistered: boolean) => set({ isRegistered }),
      removeToken: () => set({ accessToken: null, refreshToken: null }),
      removeAllAuthInfo: () =>
        set({
          accessToken: null,
          refreshToken: null,
          userId: null,
          isRegistered: null
        })
    }),
    {
      name: "token-storage"
    }
  )
);

export default authStore;
