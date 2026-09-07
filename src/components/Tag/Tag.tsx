import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import cx from "classnames";

import Text from "@components/Text/Text";

import styles from "./Tag.module.scss";

type TagVariant = "primary" | "secondary" | "alpha";

type TagTextVariant =
  | "paragraph-large"
  | "paragraph-small"
  | "roboto-large"
  | "roboto-small";

interface TagProps extends HTMLMotionProps<"div"> {
  variant?: TagVariant;
  textVariant?: TagTextVariant;
  isHovered?: boolean;
  children: ReactNode;
}

const Tag = ({
  variant = "primary",
  textVariant = "roboto-small",
  children,
  isHovered = false,
  className,
  ...props
}: TagProps) => {
  const isAlpha = variant === "alpha";

  return (
    <motion.div
      className={cx(styles.tag, styles[`tag--${variant}`], className)}
      initial="initial"
      whileHover={isAlpha ? undefined : "hover"}
      animate={isHovered ? "hover" : "initial"}
      {...props}
    >
      {!isAlpha && (
        <motion.span
          className={styles.tag__accent}
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}
      <span className={styles.tag__content}>
        <Text as="span" variant={textVariant}>
          {children}
        </Text>
      </span>
    </motion.div>
  );
};

export default Tag;
