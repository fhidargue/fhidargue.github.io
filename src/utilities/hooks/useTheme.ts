import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      setTheme(currentTheme === "light" ? "light" : "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);

    localStorage.setItem("theme", nextTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
