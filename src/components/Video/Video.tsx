import { useState } from "react";
import { PlayIcon } from "@phosphor-icons/react";
import cx from "classnames";

import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";
import Text from "@components/Text/Text";

import styles from "./Video.module.scss";
import type { VideoProps } from "./Video.types";

const getEmbedUrl = (src: string, loop: boolean) => {
  try {
    const url = new URL(src);

    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");

      if (!videoId) {
        return src;
      }

      const params = new URLSearchParams({
        autoplay: "1",
      });

      if (loop) {
        params.set("loop", "1");
        params.set("playlist", videoId);
      }

      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.slice(1);

      const params = new URLSearchParams({
        autoplay: "1",
      });

      if (loop) {
        params.set("loop", "1");
        params.set("playlist", videoId);
      }

      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }

    if (url.hostname.includes("vimeo.com")) {
      const videoId = url.pathname.split("/").filter(Boolean).pop();

      if (!videoId) {
        return src;
      }

      const params = new URLSearchParams({
        autoplay: "1",
      });

      if (loop) {
        params.set("loop", "1");
      }

      return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
    }

    return src;
  } catch {
    return src;
  }
};

const Video = ({
  src,
  poster,
  title,
  category,
  alt = title,
  className,
  hasBorder = false,
  loop = false,
}: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getEmbedUrl(src, loop);

  return (
    <article className={cx(styles.video, className)}>
      <div
        className={cx(styles["video__media"], {
          [styles["video__media--border"]]: hasBorder,
        })}
      >
        {isPlaying ? (
          <iframe
            className={styles["video__embed"]}
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className={styles["video__poster"]}
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
          >
            <img className={styles["video__image"]} src={poster} alt={alt} />
            <NoiseCanvas
              className={styles["video__noise"]}
              opacity={0.15}
              density={0.7}
              speed={120}
              pixelSize={1}
            />
            <span
              className={cx(styles["video__play"], {
                [styles["video__play--border"]]: hasBorder,
              })}
              aria-hidden="true"
            >
              <PlayIcon size={32} weight="fill" />
            </span>
          </button>
        )}
      </div>
      <div className={styles["video__category"]}>
        <Text as="span" variant="roboto-small">
          {category}
        </Text>
      </div>
      <div className={styles["video__title"]}>
        <Text as="span" variant="paragraph-large">
          {title}
        </Text>
      </div>
    </article>
  );
};

export default Video;
