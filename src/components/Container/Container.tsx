import type { ReactNode } from "react";
import cx from "classnames";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isMain?: boolean;
}

const Container = ({ children, className, isMain = false }: ContainerProps) => {
  const Tag = isMain ? "main" : "div";

  return (
    <Tag
      className={cx(styles.container, className, {
        [styles["container__main"]]: isMain,
      })}
    >
      {children}
    </Tag>
  );
};

export default Container;
