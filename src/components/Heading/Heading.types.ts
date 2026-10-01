import type { ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3;

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
  id?: string;
}
