import cx from "classnames";

import Container from "@components/Container/Container";
import Media from "@components/Media/Media";
import Text from "@components/Text/Text";

import type { AboutMediaProps } from "./AboutMedia.types";
import styles from "./AboutMedia.module.scss";

const AboutMedia = ({
  src,
  alt = "",
  leftText,
  rightText,
  hasNoise = false,
  className,
}: AboutMediaProps) => {
  return (
    <Container className={styles["about-media__container"]}>
      <section className={cx(styles["about-media"], className)}>
        <div className={styles["about-media__text"]}>
          {leftText && (
            <Text as="p" variant="roboto-small">
              {leftText}
            </Text>
          )}
        </div>

        <div className={styles["about-media__media"]}>
          <Media src={src} alt={alt} hasNoise={hasNoise} borderRadius={32} />
        </div>

        <div className={styles["about-media__text"]}>
          {rightText && (
            <Text as="p" variant="roboto-small">
              {rightText}
            </Text>
          )}
        </div>
      </section>
    </Container>
  );
};

export default AboutMedia;
