import type { ReactNode } from "react";

export interface AboutMediaProps {
  src: string;
  alt?: string;
  leftText?: ReactNode;
  rightText?: ReactNode;
  hasNoise?: boolean;
  className?: string;
}
