import type { ElementType, ReactNode } from "react";

export type TextVariant =
  | "section-title-large"
  | "section-title-small"
  | "paragraph-large"
  | "paragraph-small"
  | "roboto-large"
  | "roboto-small";

export type TextProps<T extends ElementType = "p"> = {
  children: ReactNode;
  variant?: TextVariant;
  as?: T;
  className?: string;
  inheritColor?: boolean;
  colorType?: string;
  id?: string;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "children" | "className" | "color" | "id"
>;
