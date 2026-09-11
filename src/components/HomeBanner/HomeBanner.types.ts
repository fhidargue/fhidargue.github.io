import type { ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3;

export interface HomeBannerProps {
  children: ReactNode;
  className?: string;
  label?: string;
  hasDot?: boolean;
  buttonText?: string;
  headingLevel?: HeadingLevel;
  headingClassName?: string;
  buttonOnClick?: () => void;
}
