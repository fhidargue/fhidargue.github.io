export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
