import cx from "classnames";

import styles from "./Text.module.scss";
import type { TextProps } from "./Text.types";

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
