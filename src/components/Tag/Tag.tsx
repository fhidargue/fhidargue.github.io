import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

import styles from "./Tag.module.scss";

type TagVariant = "primary" | "secondary" | "alpha";

interface TagProps extends HTMLMotionProps<"div"> {
  variant?: TagVariant;
  children: ReactNode;
}

const Tag = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: TagProps) => {
  const isAlpha = variant === "alpha";

  return (
    <motion.div
      className={`${styles.tag} ${styles[`tag--${variant}`]} ${className}`}
      initial="initial"
      whileHover={isAlpha ? undefined : "hover"}
      {...props}
    >
      {!isAlpha && (
        <motion.span
          className={styles.tag__accent}
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

      <span className={styles.tag__content}>{children}</span>
    </motion.div>
  );
};

export default Tag;
