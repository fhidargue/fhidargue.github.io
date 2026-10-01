import { createElement } from "react";
import cx from "classnames";

import styles from "./Text.module.scss";
import type { TextProps } from "./Text.types";

const Text = <T extends React.ElementType = "p">({
  children,
  variant = "paragraph-small",
  as: Tag = "p" as T,
  className = "",
  inheritColor = false,
  colorType,
  id,
  ...props
}: TextProps<T>) => {
  return createElement(
    Tag,
    {
      className: cx(
        styles.text,
        styles[variant],
        className,
        inheritColor && styles["text--inherit"],
        {
          [styles[`text--${colorType}`]]: colorType !== "",
        },
      ),
      id,
      ...props,
    },
    children,
  );
};

export default Text;
