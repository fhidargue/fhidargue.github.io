import { useEffect, useRef } from "react";
import cx from "classnames";

import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";

import styles from "./Media.module.scss";

type MediaType = "image" | "video";

interface MediaProps {
  src: string;
  type?: MediaType;
  alt?: string;
  poster?: string;

  width: number;
  height: number;
  scale?: number;

  hasNoise?: boolean;
  noiseOpacity?: number;
  noiseDensity?: number;
  noiseSpeed?: number;
  noisePixelSize?: number;

  borderRadius?: number;
  isHovered?: boolean;
  className?: string;
}

const Media = ({
  src,
  type = "image",
  alt = "",
  poster,
  width,
  height,
  scale = 1.25,
  hasNoise = false,
  noiseOpacity = 0.15,
  noiseDensity = 0.7,
  noiseSpeed = 120,
  noisePixelSize = 1,
  borderRadius = 0,
  isHovered,
  className,
}: MediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type !== "video") {
      return;
    }

    const video = videoRef.current;

    if (!video || isHovered === undefined) {
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
  }, [isHovered, type]);

  return (
    <div
      className={cx(
        styles.media,
        isHovered && styles["media--hovered"],
        className,
      )}
      style={
        {
          width,
          height,
          borderRadius,
          "--media-scale": scale,
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
            preload="metadata"
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
