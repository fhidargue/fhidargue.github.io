import type { ReactNode } from "react";
import cx from "classnames";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

export default Container;
