import type { ReactNode } from "react";

import styles from "./Text.module.scss";

type TextVariant =
  | "section-title-large"
  | "section-title-small"
  | "paragraph-large"
  | "paragraph-small"
  | "roboto-large"
  | "roboto-small";

type TextElement = "p" | "span" | "div";

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  as?: TextElement;
}

const Text = ({
  children,
  variant = "paragraph-small",
  as: Tag = "p",
}: TextProps) => {
  return <Tag className={`${styles.text} ${styles[variant]}`}>{children}</Tag>;
};

export default Text;
