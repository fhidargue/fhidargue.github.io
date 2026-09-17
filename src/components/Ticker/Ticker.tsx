import { motion } from "motion/react";
import cx from "classnames";

import Heading from "@components/Heading/Heading";
import styles from "./Ticker.module.scss";

import useBreakpoints from "@hooks/useBreakpoints";

interface TickerProps {
  title1: string;
  title2: string;
  duration?: number;
  className?: string;
}

const REPEAT_COUNT = 20;

const Ticker = ({ title1, title2, duration = 150, className }: TickerProps) => {
  const { isMobile } = useBreakpoints();

  const items = Array.from({ length: REPEAT_COUNT });

  return (
    <section className={cx(styles.ticker, className)}>
      <motion.div
        className={styles.ticker__marquee}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((_, index) => (
          <div className={styles.ticker__item} key={index}>
            <span className={styles["ticker__title--primary"]}>
              <Heading level={isMobile ? 3 : 2}>{title1}</Heading>
            </span>
            <span className={styles["ticker__title--secondary"]}>
              <Heading level={isMobile ? 3 : 2}>{title2}</Heading>
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Ticker;
