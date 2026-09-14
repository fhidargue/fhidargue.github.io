import { useState } from "react";
import { PlayIcon } from "@phosphor-icons/react";
import cx from "classnames";

import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";
import Text from "@components/Text/Text";

import styles from "./Video.module.scss";
import type { VideoProps } from "./Video.types";

const getEmbedUrl = (src: string) => {
  try {
    const url = new URL(src);

    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");

      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
        : src;
    }

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.slice(1);

      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    if (url.hostname.includes("vimeo.com")) {
      const videoId = url.pathname.split("/").filter(Boolean).pop();

      return videoId
        ? `https://player.vimeo.com/video/${videoId}?autoplay=1`
        : src;
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
}: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getEmbedUrl(src);

  return (
    <article className={cx(styles.video, className)}>
      <div className={styles["video__media"]}>
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
            <span className={styles["video__play"]} aria-hidden="true">
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
