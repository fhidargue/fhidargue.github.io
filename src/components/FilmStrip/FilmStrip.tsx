import { useEffect, useRef, useState } from "react";
import cx from "classnames";

import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";

import {
  BORDER_RADII,
  FILM_STRIP_GAP,
  SLIDE_WIDTHS,
  type FilmStripProps,
} from "./FilmStrip.types";
import styles from "./FilmStrip.module.scss";

const FilmStrip = ({
  images,
  size = "md",
  speed = 100,
  isFullWidth = false,
  className,
}: FilmStripProps) => {
  const filmStripRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const slideWidth = SLIDE_WIDTHS[size];
  const itemWidth = slideWidth + FILM_STRIP_GAP;

  const [visibleImages, setVisibleImages] = useState<string[]>(images);

  useEffect(() => {
    const container = filmStripRef.current;

    if (!container || images.length === 0) {
      return;
    }

    const updateImages = () => {
      const containerWidth = container.clientWidth;
      const imagesPerViewport = Math.ceil(containerWidth / itemWidth) + 2;
      const requiredSets = Math.ceil(imagesPerViewport / images.length);

      setVisibleImages(
        Array.from({ length: requiredSets }, () => images).flat(),
      );
    };

    updateImages();

    const resizeObserver = new ResizeObserver(updateImages);

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [images, itemWidth]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || visibleImages.length === 0) {
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      positionRef.current -= (speed * deltaTime) / 1000;

      while (positionRef.current <= -itemWidth) {
        positionRef.current += itemWidth;

        const firstItem = track.firstElementChild;

        if (firstItem) {
          track.appendChild(firstItem);
        }
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lastTimeRef.current = null;
      positionRef.current = 0;
      track.style.transform = "";
    };
  }, [visibleImages.length, itemWidth, speed]);

  return (
    <div
      ref={filmStripRef}
      className={cx(
        styles["film-strip"],
        {
          [styles["film-strip--full-width"]]: isFullWidth,
        },
        className,
      )}
    >
      <div ref={trackRef} className={styles["film-strip__track"]}>
        {visibleImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={styles["film-strip__item"]}
            style={{ width: `${slideWidth}px` }}
          >
            <img
              src={src}
              alt=""
              className={cx(
                styles["film-strip__image"],
                styles[`film-strip__image--${size}`],
              )}
            />
            <NoiseCanvas
              opacity={0.15}
              density={0.7}
              speed={120}
              pixelSize={1}
              borderRadius={BORDER_RADII[size]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmStrip;
