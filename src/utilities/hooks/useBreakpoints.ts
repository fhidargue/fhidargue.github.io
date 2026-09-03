import { useEffect, useState } from "react";

import { BREAKPOINTS, type Breakpoint } from "@constants/breakpoints";

interface BreakpointState {
  breakpoint: Breakpoint;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isXxl: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= BREAKPOINTS.xxl) {
    return "xxl";
  }

  if (width >= BREAKPOINTS.xl) {
    return "xl";
  }

  if (width >= BREAKPOINTS.lg) {
    return "lg";
  }

  if (width >= BREAKPOINTS.md) {
    return "md";
  }

  if (width >= BREAKPOINTS.sm) {
    return "sm";
  }

  return "xs";
};

const useBreakpoints = (): BreakpointState => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    breakpoint,

    isXs: breakpoint === "xs",
    isSm: breakpoint === "sm",
    isMd: breakpoint === "md",
    isLg: breakpoint === "lg",
    isXl: breakpoint === "xl",
    isXxl: breakpoint === "xxl",

    isMobile: breakpoint === "xs" || breakpoint === "sm",
    isTablet: breakpoint === "md" || breakpoint === "lg",
    isDesktop: breakpoint === "xl" || breakpoint === "xxl",
  };
};

export default useBreakpoints;
