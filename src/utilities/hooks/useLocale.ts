import { useEffect } from "react";

const LOCALE_KEY = "locale";
const DEFAULT_LOCALE = "en";

const useLocale = () => {
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_KEY);

    if (!savedLocale) {
      localStorage.setItem(LOCALE_KEY, DEFAULT_LOCALE);
    }
  }, []);
};

export default useLocale;
