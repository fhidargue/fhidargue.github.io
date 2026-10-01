import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import useTheme from "@hooks/useTheme";
import cx from "classnames";

import styles from "./ThemeToggle.module.scss";

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
      className={cx(styles["theme-toggle"], className)}
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
