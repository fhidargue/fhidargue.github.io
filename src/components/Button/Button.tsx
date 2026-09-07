import type { ReactNode } from "react";
import cx from "classnames";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion, type HTMLMotionProps } from "motion/react";

import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "alpha";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children?: ReactNode;
  iconOnly?: boolean;
  iconSize?: number;
}

const Button = ({
  variant = "primary",
  children,
  iconOnly = false,
  iconSize = 52,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  const isAlpha = variant === "alpha";

  return (
    <motion.button
      type={type}
      className={cx(
        styles.button,
        styles[`button--${variant}`],
        {
          [styles["button--icon-only"]]: iconOnly,
        },
        className,
      )}
      initial="initial"
      whileHover={isAlpha ? undefined : "hover"}
      whileTap={isAlpha ? undefined : { scale: 0.97 }}
      variants={{
        initial: {
          color: "var(--color-button-text)",
        },
        hover: {
          color: "var(--color-button-text-hover)",
        },
      }}
      {...props}
    >
      {!isAlpha && (
        <motion.span
          className={styles.button__accent}
          variants={{
            initial: {
              y: "100%",
            },
            hover: {
              y: "0%",
            },
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}

      <span className={styles.button__content}>
        {iconOnly ? (
          <ArrowUpRightIcon
            size={iconSize}
            weight="regular"
            aria-hidden="true"
          />
        ) : (
          children
        )}
      </span>
    </motion.button>
  );
};

export default Button;
