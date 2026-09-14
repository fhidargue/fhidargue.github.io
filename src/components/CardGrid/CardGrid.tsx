import type { ReactNode } from "react";
import cx from "classnames";

import styles from "./CardGrid.module.scss";

type CardGridVariant = "default" | "playground" | "three-column";

type CardGridProps = {
  children: ReactNode;
  variant?: CardGridVariant;
  featuredPosition?: "left" | "right";
  className?: string;
};

const CardGrid = ({
  children,
  variant = "default",
  featuredPosition = "right",
  className,
}: CardGridProps) => (
  <div
    className={cx(
      styles["card-grid"],
      styles[`card-grid--${variant}`],
      variant === "playground" &&
        styles[`card-grid--featured-${featuredPosition}`],
      className,
    )}
  >
    {children}
  </div>
);

export default CardGrid;
