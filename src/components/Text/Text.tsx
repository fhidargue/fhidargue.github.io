import type { ReactNode } from "react";
import cx from "classnames";

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
  className?: string;
}

const Text = ({
  children,
  variant = "paragraph-small",
  as: Tag = "p",
  className = "",
}: TextProps) => {
  return (
    <Tag className={cx(styles.text, styles[variant], className)}>
      {children}
    </Tag>
  );
};

export default Text;
