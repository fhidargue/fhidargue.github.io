import type { ReactNode } from "react";
import { motion } from "motion/react";
import Text from "@components/Text/Text";
import styles from "./OverlayMenuItem.module.scss";

type ContentType = "heading" | "text";

interface OverlayMenuItemProps {
  item: string;
  contentType?: ContentType;
  fullWidth?: boolean;
  children: ReactNode;
}

const OverlayMenuItem = ({
  item,
  contentType = "heading",
  fullWidth = false,
  children,
}: OverlayMenuItemProps) => {
  const repeatedItems = Array.from({ length: 20 });

  return (
    <motion.div
      className={`${styles["overlay-menu-item"]} ${
        styles[`overlay-menu-item--${contentType}`]
      } ${fullWidth ? styles["overlay-menu-item--full-width"] : ""}`}
      initial="initial"
      whileHover="hover"
    >
      <div className={styles["overlay-menu-item__title"]}>
        <motion.div
          className={styles["overlay-menu-item__content"]}
          variants={{
            initial: {
              filter: "blur(0px)",
            },
            hover: {
              filter: "blur(10px)",
            },
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </motion.div>

        <motion.div
          className={styles["overlay-menu-item__overlay"]}
          variants={{
            initial: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <motion.div
            className={styles["overlay-menu-item__marquee"]}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeatedItems.map((_, index) => (
              <span className={styles["overlay-menu-item__item"]} key={index}>
                <Text as="span" variant="roboto-large">
                  {item}
                </Text>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverlayMenuItem;
