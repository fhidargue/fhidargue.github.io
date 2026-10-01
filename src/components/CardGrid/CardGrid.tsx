import type { ReactElement, ReactNode } from "react";
import cx from "classnames";

import styles from "./CardGrid.module.scss";

type CardGridVariant = "default" | "playground" | "three-column";

type CardGridProps = {
  children: ReactNode;
  variant?: CardGridVariant;
  featuredPosition?: "left" | "right";
  animateSecondary?: boolean;
  className?: string;
};

const CardGrid = ({
  children,
  variant = "default",
  featuredPosition = "right",
  animateSecondary = false,
  className,
}: CardGridProps) => {
  const cards = Array.isArray(children) ? children : [children];

  return (
    <div
      className={cx(
        styles["card-grid"],
        styles[`card-grid--${variant}`],
        variant === "playground" &&
          styles[`card-grid--featured-${featuredPosition}`],
        className,
      )}
    >
      {cards.map((card, index) => {
        const isSecondary =
          variant === "playground" &&
          ((featuredPosition === "right" && index === 0) ||
            (featuredPosition === "left" && index === 1));

        if (!animateSecondary || !isSecondary) {
          return card;
        }

        return {
          ...card,
          props: {
            ...card.props,
            animateOnView: true,
          },
        } as ReactElement;
      })}
    </div>
  );
};

export default CardGrid;
