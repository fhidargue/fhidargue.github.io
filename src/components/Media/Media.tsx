import { useEffect, useRef } from "react";
import cx from "classnames";

import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";

import styles from "./Media.module.scss";
import type { MediaProps } from "./Media.types";

const Media = ({
  src,
  type = "image",
  alt = "",
  poster,
  scale = 1.25,
  hasParallax = false,
  hasNoise = false,
  noiseOpacity = 0.15,
  noiseDensity = 0.7,
  noiseSpeed = 120,
  noisePixelSize = 1,
  borderRadius = 0,
  isHovered,
  autoPlay = false,
  className,
}: MediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type !== "video") {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (autoPlay) {
      video.play().catch(() => {
        // Playback was prevented by the browser.
      });

      return;
    }

    if (isHovered === undefined) {
      return;
    }

    if (isHovered) {
      video.play().catch(() => {
        // Playback was prevented by the browser.
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [autoPlay, isHovered, type]);

  return (
    <div
      className={cx(
        styles.media,
        isHovered && styles["media--hovered"],
        hasParallax && styles["media--parallax"],
        autoPlay && styles["media--autoplay"],
        className,
      )}
      style={
        {
          borderRadius,
          "--media-scale": scale,
          "--media-background-image": `url(${src})`,
        } as React.CSSProperties
      }
    >
      {type === "video" ? (
        <>
          <video
            ref={videoRef}
            className={cx(styles["media__content"], styles["media__video"])}
            src={src}
            muted
            loop
            playsInline
            autoPlay={autoPlay}
            preload="auto"
          />

          {poster && (
            <img
              className={cx(styles["media__content"], styles["media__poster"])}
              src={poster}
              alt={alt}
            />
          )}
        </>
      ) : (
        <img
          className={cx(styles["media__content"], styles["media__image"])}
          src={src}
          alt={alt}
        />
      )}

      {hasNoise && (
        <NoiseCanvas
          opacity={noiseOpacity}
          density={noiseDensity}
          speed={noiseSpeed}
          pixelSize={noisePixelSize}
          borderRadius={borderRadius}
        />
      )}
    </div>
  );
};

export default Media;
