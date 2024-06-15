import { persist } from "zustand/middleware";
import { create } from "zustand";

type TokenStore = {
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (accessToken: string, refreshToken: string) => void;
  removeToken: () => void;
};

const tokenStore = create(
  persist<TokenStore>(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setToken: (accessToken: string, refreshToken: string) =>
        set({ accessToken, refreshToken }),
      removeToken: () => set({ accessToken: null, refreshToken: null })
    }),
    {
      name: "token-storage"
    }
  )
);

export default tokenStore;
