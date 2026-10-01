import { type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export type TagVariant = "primary" | "secondary" | "alpha";

export type TagTextVariant =
  | "paragraph-large"
  | "paragraph-small"
  | "roboto-large"
  | "roboto-small";

export interface TagProps extends HTMLMotionProps<"div"> {
  variant?: TagVariant;
  textVariant?: TagTextVariant;
  isHovered?: boolean;
  children: ReactNode;
}
