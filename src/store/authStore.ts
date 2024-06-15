import { persist } from "zustand/middleware";
import { create } from "zustand";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  setToken: (accessToken: string, refreshToken: string) => void;
  setUserId: (userId: string) => void;
  removeToken: () => void;
  removeUserId: () => void;
};

const authStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      userId: null,
      setToken: (accessToken: string, refreshToken: string) =>
        set({ accessToken, refreshToken }),
      setUserId: (userId: string) => set({ userId }),
      removeToken: () => set({ accessToken: null, refreshToken: null }),
      removeUserId: () => set({ userId: null })
    }),
    {
      name: "token-storage"
    }
  )
);

export default authStore;
