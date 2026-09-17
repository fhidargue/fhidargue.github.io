import type { ReactNode } from "react";

export type TextVariant =
  | "section-title-large"
  | "section-title-small"
  | "paragraph-large"
  | "paragraph-small"
  | "roboto-large"
  | "roboto-small";

export type TextElement = "p" | "span" | "div";

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  as?: TextElement;
  className?: string;
  inheritColor?: boolean;
  id?: string;
  colorType?: string;
}
