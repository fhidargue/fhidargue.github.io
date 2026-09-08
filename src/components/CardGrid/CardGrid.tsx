import type { ReactNode } from "react";
import cx from "classnames";

import styles from "./CardGrid.module.scss";

type CardGridProps = {
  children: ReactNode;
  className?: string;
};

const CardGrid = ({ children, className }: CardGridProps) => (
  <div className={cx(styles["card-grid"], className)}>{children}</div>
);

export default CardGrid;
