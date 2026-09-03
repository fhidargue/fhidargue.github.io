import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import useTheme from "@hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
  iconSize?: number;
}

const ThemeToggle = ({ className, iconSize = 24 }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={className}
    >
      {theme === "dark" ? (
        <SunIcon size={iconSize} weight="regular" />
      ) : (
        <MoonIcon size={iconSize} weight="regular" />
      )}
    </button>
  );
};

export default ThemeToggle;
