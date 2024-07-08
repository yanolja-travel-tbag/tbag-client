import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocaleStore = {
  locale: "ko" | "en";
  setLocale: (locale: "ko" | "en") => void;
};

const localeStore = create(
  persist<LocaleStore>(
    (set) => ({
      locale: "ko",
      setLocale: (locale) => {
        localStorage.setItem("i18nextLng", locale);
        set({ locale });
      }
    }),
    {
      name: "i18n-locale"
    }
  )
);

export default localeStore;
