import { useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeToggleProps {
  children: ReactNode;
}

const ThemeToggle = ({ children }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = sessionStorage.getItem("theme") as Theme | null;

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {children}
    </button>
  );
};

export default ThemeToggle;
