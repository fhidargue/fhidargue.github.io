import type { KeyboardEvent } from "react";

type A11yRole = "link" | "button";

const useA11yClick = (onClick: () => void, role: A11yRole = "link") => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    onClick();
  };

  return {
    role,
    tabIndex: 0,
    onKeyDown: handleKeyDown,
  };
};

export default useA11yClick;
