import { motion } from "motion/react";
import cx from "classnames";
import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";

import styles from "./FilmStrip.module.scss";

type FilmStripSize = "sm" | "md" | "lg";

interface FilmStripProps {
  images: string[];
  size?: FilmStripSize;
  duration?: number;
  className?: string;
}

const IMAGE_SET_REPEAT_COUNT = 10;

const FilmStrip = ({
  images,
  size = "md",
  duration = 200,
  className,
}: FilmStripProps) => {
  const imageSet = Array.from(
    { length: IMAGE_SET_REPEAT_COUNT },
    () => images,
  ).flat();

  const carouselImages = [...imageSet, ...imageSet];

  return (
    <div className={cx(styles["film-strip"], className)}>
      <motion.div
        className={styles["film-strip__track"]}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {carouselImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={cx(
              styles["film-strip__item"],
              styles[`film-strip__item--${size}`],
            )}
          >
            <img
              src={src}
              alt=""
              className={cx(
                styles["film-strip__image"],
                styles[`film-strip__image--${size}`],
              )}
            />
          </div>
        ))}
      </motion.div>

      <NoiseCanvas opacity={0.25} density={0.7} speed={50} pixelSize={1} />
    </div>
  );
};

export default FilmStrip;
