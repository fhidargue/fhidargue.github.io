import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import Button from "@components/Button/Button";
import Media from "@components/Media/Media";
import Tag from "@components/Tag/Tag";
import Text from "@components/Text/Text";

import type { CardProps } from "./Card.types";
import styles from "./Card.module.scss";

type CardMediaProps = {
  src: string;
  type?: "image" | "video";
  alt: string;
  poster?: string;
  hasNoise?: boolean;
  isHovered: boolean;
  autoPlay?: boolean;
};

const CARD_TYPES = {
  PROJECT: "project",
  TECH_STACK: "tech-stack",
  CLIENT: "client",
  COLOPHON: "colophon",
  AWARD: "award",
  PLAYGROUND: "playground",
} as const;

const CardMedia = ({
  src,
  type = "image",
  alt,
  poster,
  hasNoise = false,
  isHovered,
  autoPlay = false,
}: CardMediaProps) => (
  <div className={styles["card__media"]}>
    <Media
      src={src}
      type={type}
      alt={alt}
      poster={poster}
      hasNoise={hasNoise}
      borderRadius={32}
      isHovered={isHovered}
      autoPlay={autoPlay}
    />
  </div>
);

type CardCategoryProps = {
  children: ReactNode;
  variant?: "alpha" | "secondary";
  textVariant?: "roboto-large" | "roboto-small";
  isHovered?: boolean;
};

const CardCategory = ({
  children,
  variant,
  textVariant = "roboto-large",
  isHovered = false,
}: CardCategoryProps) => (
  <div className={styles["card__category"]}>
    {variant ? (
      <Tag variant={variant} textVariant={textVariant} isHovered={isHovered}>
        {children}
      </Tag>
    ) : (
      <Text as="span" variant={textVariant}>
        {children}
      </Text>
    )}
  </div>
);

type CardTitleProps = {
  children: ReactNode;
  variant:
    | "section-title-small"
    | "paragraph-large"
    | "paragraph-small"
    | "roboto-large";
};

const CardTitle = ({ children, variant }: CardTitleProps) => (
  <div className={styles["card__title"]}>
    <Text as="span" variant={variant}>
      {children}
    </Text>
  </div>
);

const CardLink = ({ label }: { label: string }) => (
  <div className={styles["card__link"]}>
    <Button
      className={styles["card__link-button"]}
      variant="primary"
      iconOnly
      iconSize={24}
      type="button"
      aria-label={label}
    />
  </div>
);

const Card = (props: CardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if ("href" in props && props.href) {
      window.open(props.href, "_blank", "noopener,noreferrer");
      return;
    }

    if ("to" in props && props.to) {
      navigate(props.to);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  const renderContent = () => {
    switch (props.variant) {
      case CARD_TYPES.PROJECT:
        return (
          <>
            <CardMedia
              src={props.image}
              type={props.type}
              alt={props.title}
              poster={props.poster}
              hasNoise={props.hasNoise}
              isHovered={isHovered}
            />
            <CardCategory variant="alpha" isHovered={isHovered}>
              {props.category}
            </CardCategory>
            <CardTitle variant="section-title-small">{props.title}</CardTitle>
            <CardLink label={`View ${props.title} project`} />
          </>
        );

      case CARD_TYPES.TECH_STACK:
        return (
          <>
            <CardCategory
              variant="secondary"
              textVariant="roboto-small"
              isHovered={isHovered}
            >
              {props.category}
            </CardCategory>
            {typeof props.icon === "string" ? (
              <div
                className={cx(
                  styles["card__icon--tech"],
                  styles["card__icon--png"],
                  {
                    [styles["card__icon--lg"]]: props.icon.includes("openusd"),
                    [styles["card__icon--sm"]]:
                      props.icon.includes("azure") ||
                      props.icon.includes("aem") ||
                      props.icon.includes("magento"),
                  },
                )}
              >
                <img src={props.icon} alt="" title={props.title} />
              </div>
            ) : (
              <div className={styles["card__icon"]}>{props.icon}</div>
            )}
            <CardTitle variant="paragraph-large">{props.title}</CardTitle>
            <CardLink label={`View ${props.title}`} />
          </>
        );

      case CARD_TYPES.CLIENT:
        return (
          <>
            <div className={styles["card__icon"]}>
              {typeof props.icon === "string" ? (
                <div className={styles["card__icon--png"]}>
                  <img src={props.icon} alt="" title={props.name} />
                </div>
              ) : (
                props.icon
              )}
            </div>
            <CardLink label="View client" />
          </>
        );

      case CARD_TYPES.COLOPHON:
        return (
          <>
            <CardMedia
              src={props.video}
              type="video"
              alt={props.title}
              poster={props.thumbnail}
              hasNoise={props.hasNoise}
              isHovered={isHovered}
            />
            <CardCategory variant="secondary" isHovered={isHovered}>
              {props.category}
            </CardCategory>
            <CardTitle variant="paragraph-small">{props.title}</CardTitle>
            {!props.disableLink && <CardLink label={`View ${props.title}`} />}
          </>
        );

      case CARD_TYPES.AWARD:
        return (
          <>
            <CardCategory>{props.category}</CardCategory>
            <CardTitle variant="roboto-large">{props.title}</CardTitle>
            <div className={styles["card__year-group"]}>
              <div className={styles["card__year"]}>
                <Text as="span" variant="roboto-large">
                  {props.year}
                </Text>
              </div>
              <CardLink label={`View ${props.title}`} />
            </div>
          </>
        );

      case CARD_TYPES.PLAYGROUND:
        return (
          <>
            <CardMedia
              src={props.media}
              type={props.type}
              alt={props.title}
              poster={props.poster}
              hasNoise={props.hasNoise}
              isHovered={isHovered}
              autoPlay={props.autoPlay}
            />
            <CardCategory textVariant="roboto-small">
              {props.category}
            </CardCategory>
            <CardTitle variant="paragraph-large">{props.title}</CardTitle>
          </>
        );
    }
  };

  const variantClass = styles[`card--${props.variant}`];

  return (
    <article
      className={cx(styles.card, variantClass, props.className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      {renderContent()}
    </article>
  );
};

export default Card;
