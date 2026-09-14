import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import cx from "classnames";

import Container from "@components/Container/Container";
import Heading from "@components/Heading/Heading";
import Media from "@components/Media/Media";
import Text from "@components/Text/Text";

import type { PlaygroundBannerProps } from "./PlaygroundBanner.types";
import styles from "./PlaygroundBanner.module.scss";

const PlaygroundBanner = ({
  topHeading,
  bottomHeading,
  label,
  media,
  mediaType = "image",
  mediaAlt = "",
  className,
  headingClassName,
  containerClassName,
}: PlaygroundBannerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!scrollRef.current) return;

      const rect = scrollRef.current.getBoundingClientRect();

      const scrollDistance =
        scrollRef.current.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) {
        setProgress(1);
        return;
      }

      const currentScroll = Math.min(Math.max(-rect.top, 0), scrollDistance);

      setProgress(currentScroll / scrollDistance);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div ref={scrollRef} className={styles["playground-banner-scroll"]}>
      <section className={cx(styles["playground-banner"], className)}>
        <div className={styles["playground-banner__sticky"]}>
          <Container className={containerClassName}>
            <div className={styles["playground-banner__content"]}>
              <Heading
                level={2}
                className={cx(
                  styles["playground-banner__heading"],
                  headingClassName,
                )}
              >
                {topHeading}
              </Heading>
              <Text
                as="p"
                variant="roboto-large"
                className={styles["playground-banner__label"]}
              >
                {label}
              </Text>
              <Heading
                level={2}
                className={cx(
                  styles["playground-banner__heading"],
                  headingClassName,
                )}
              >
                {bottomHeading}
              </Heading>
            </div>
          </Container>
          <div className={styles["playground-banner__media-wrapper"]}>
            <div
              className={styles["playground-banner__media"]}
              style={
                {
                  "--media-progress": progress,
                } as CSSProperties
              }
            >
              <Media
                src={media}
                type={mediaType}
                alt={mediaAlt}
                borderRadius={24}
                hasNoise
                autoPlay={mediaType === "video"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaygroundBanner;
