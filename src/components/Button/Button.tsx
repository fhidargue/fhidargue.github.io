import cx from "classnames";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

import styles from "./Button.module.scss";
import type { ButtonProps, ButtonVariant } from "./Button.types";

const Button = ({
  variant = "primary",
  children,
  iconOnly = false,
  iconSize = 52,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  const getTextColor = (variant: ButtonVariant) => {
    switch (variant) {
      case "secondary":
        return {
          initial: "var(--color-button-text-secondary)",
          hover: "var(--color-button-text-hover)",
        };

      case "alpha":
        return {
          initial: "var(--color-button-text-secondary)",
          hover: "var(--color-button-text-secondary)",
        };

      case "primary":
      default:
        return {
          initial: "var(--color-button-text)",
          hover: "var(--color-button-text-hover)",
        };
    }
  };

  const isAlpha = variant === "alpha";
  const textColor = getTextColor(variant);

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
          color: textColor.initial,
        },
        hover: {
          color: textColor.hover,
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
