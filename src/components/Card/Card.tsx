import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import Button from "@components/Button/Button";
import Media from "@components/Media/Media";
import Tag from "@components/Tag/Tag";
import Text from "@components/Text/Text";

import useA11yClick from "@hooks/useA11yClick";

import styles from "./Card.module.scss";

type ProjectCardProps = {
  variant?: "project";
  image: string;
  title: string;
  category: string;
  to: string;
  width: number;
  height: number;
  type?: "image" | "video";
  poster?: string;
  hasNoise?: boolean;
  className?: string;
};

type TechStackCardProps = {
  variant: "tech-stack";
  icon: ReactNode;
  title: string;
  category: string;
  to: string;
  width: number;
  height: number;
  className?: string;
};

type ClientCardProps = {
  variant: "client";
  icon: ReactNode;
  to: string;
  width: number;
  height: number;
  className?: string;
};

export type CardProps = ProjectCardProps | TechStackCardProps | ClientCardProps;

const Card = (props: CardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(props.to);
  };

  const a11yProps = useA11yClick(handleClick, "link");

  if ("image" in props) {
    const {
      image,
      title,
      category,
      width,
      height,
      type = "image",
      poster,
      hasNoise = false,
      className,
    } = props;

    return (
      <article
        className={cx(styles.card, styles["card--project"], className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...a11yProps}
      >
        <div className={styles["card__media"]}>
          <Media
            src={image}
            type={type}
            alt={title}
            poster={poster}
            width={width}
            height={height}
            hasNoise={hasNoise}
            borderRadius={32}
            isHovered={isHovered}
          />
        </div>

        <div className={styles["card__category"]}>
          <Tag variant="alpha" textVariant="roboto-large" isHovered={isHovered}>
            {category}
          </Tag>
        </div>

        <div className={styles["card__title"]}>
          <Text as="span" variant="section-title-small">
            {title}
          </Text>
        </div>

        <div className={styles["card__link"]}>
          <Button
            className={styles["card__link-button"]}
            variant="primary"
            iconOnly
            iconSize={24}
            type="button"
            aria-label={`View ${title} project`}
          />
        </div>
      </article>
    );
  }

  if (props.variant === "tech-stack") {
    const { icon, title, category, width, height, className } = props;

    return (
      <article
        className={cx(styles.card, styles["card--tech-stack"], className)}
        style={{ width, height }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...a11yProps}
      >
        <div className={styles["card__category"]}>
          <Tag
            variant="secondary"
            textVariant="roboto-small"
            isHovered={isHovered}
          >
            {category}
          </Tag>
        </div>

        <div className={styles["card__icon"]}>{icon}</div>

        <div className={styles["card__title"]}>
          <Text as="span" variant="paragraph-large">
            {title}
          </Text>
        </div>

        <div className={styles["card__link"]}>
          <Button
            className={styles["card__link-button"]}
            variant="primary"
            iconOnly
            iconSize={24}
            type="button"
            aria-label={`View ${title}`}
          />
        </div>
      </article>
    );
  }

  if (props.variant === "client") {
    const { icon, width, height, className } = props;

    return (
      <article
        className={cx(styles.card, styles["card--client"], className)}
        style={{ width, height }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...a11yProps}
      >
        <div className={styles["card__icon"]}>{icon}</div>

        <div className={styles["card__link"]}>
          <Button
            className={styles["card__link-button"]}
            variant="primary"
            iconOnly
            iconSize={24}
            type="button"
            aria-label="View client"
          />
        </div>
      </article>
    );
  }

  return null;
};

export default Card;
