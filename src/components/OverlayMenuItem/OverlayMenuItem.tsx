import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import cx from "classnames";

import useBreakpoints from "@hooks/useBreakpoints";

import Heading from "@components/Heading/Heading";
import Text from "@components/Text/Text";

import styles from "./OverlayMenuItem.module.scss";

type ContentType = "heading" | "text";

interface OverlayMenuItemProps {
  label: string;
  to: string;
  contentType?: ContentType;
  fullWidth?: boolean;
  onClick?: () => void;
}

const renderContent = (label: string, isMobile: boolean, isTablet: boolean) => {
  if (isMobile) {
    return (
      <Text
        as="span"
        variant="section-title-large"
        className={styles["overlay-menu-item__text"]}
      >
        {label}
      </Text>
    );
  }

  return <Heading level={isTablet ? 2 : 1}>{label}</Heading>;
};

const OverlayMenuItem = ({
  label,
  to,
  contentType = "heading",
  fullWidth = false,
  onClick,
}: OverlayMenuItemProps) => {
  const { isMobile, isTablet } = useBreakpoints();

  const repeatedItems = Array.from({ length: 20 });
  const item = `[ VIEW ${label} ]`;

  return (
    <RouterLink
      to={to}
      onClick={onClick}
      className={cx(
        styles["overlay-menu-item"],
        styles[`overlay-menu-item--${contentType}`],
        {
          [styles["overlay-menu-item--full-width"]]: fullWidth,
        },
      )}
    >
      <motion.div initial="initial" whileHover="hover">
        <div className={styles["overlay-menu-item__title"]}>
          <motion.div
            className={styles["overlay-menu-item__content"]}
            variants={{
              initial: { filter: "blur(0px)" },
              hover: { filter: "blur(10px)" },
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {contentType === "heading" ? (
              renderContent(label, isMobile, isTablet)
            ) : (
              <Text as="span" variant="roboto-large">
                {label}
              </Text>
            )}
          </motion.div>
          <motion.div
            className={styles["overlay-menu-item__overlay"]}
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={styles["overlay-menu-item__marquee"]}
              animate={{ x: ["0%", "-50%"] }}
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
    </RouterLink>
  );
};

export default OverlayMenuItem;
