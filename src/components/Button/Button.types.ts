import type { ReactNode } from "react";
import type { HTMLMotionProps } from "motion/react";

export type ButtonVariant = "primary" | "secondary" | "alpha";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children?: ReactNode;
  iconOnly?: boolean;
  iconSize?: number;
}
