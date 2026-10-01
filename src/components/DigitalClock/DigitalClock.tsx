import { useEffect, useState } from "react";
import cx from "classnames";

import Container from "@components/Container/Container";
import Text from "@components/Text/Text";

import styles from "./DigitalClock.module.scss";

interface DigitalClockProps {
  timeZone: string;
  location: string;
  className?: string;
}

const DigitalClock = ({ timeZone, location, className }: DigitalClockProps) => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(currentTime);

  return (
    <div className={cx(styles["digital-clock"], className)}>
      <Container className={styles["digital-clock__container"]}>
        <div className={styles["digital-clock__label"]}>
          <Text
            as="span"
            variant="roboto-large"
            className={styles["digital-clock__label-text"]}
          >
            LOCAL TIME
          </Text>
          <Text
            as="span"
            variant="roboto-large"
            className={styles["digital-clock__label-text"]}
          >
            [ {location} ]
          </Text>
        </div>
        <time
          className={styles["digital-clock__time"]}
          dateTime={currentTime.toISOString()}
        >
          {formattedTime}
        </time>
      </Container>
    </div>
  );
};

export default DigitalClock;
