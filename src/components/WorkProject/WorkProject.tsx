import cx from "classnames";

import Container from "@components/Container/Container";
import Media from "@components/Media/Media";
import Text from "@components/Text/Text";
import Tag from "@components/Tag/Tag";

import styles from "./WorkProject.module.scss";
import type { WorkProjectProps } from "./WorkProject.types";
import { motion } from "motion/react";
import { fadeVariants, gridVariants } from "@constants/animations";

const WorkProject = ({
  title,
  description,
  tags,
  media,
  children,
  className,
  hasEvenSides = false,
}: WorkProjectProps) => {
  return (
    <section className={cx(styles["work-project"], className)}>
      <Container
        className={cx(styles["work-project__container"], {
          [styles["work-project__container--even"]]: hasEvenSides,
        })}
      >
        <div className={styles["work-project__content"]}>
          <motion.div
            className={styles["work-project__heading"]}
            variants={fadeVariants}
            initial="hidden"
            animate="show"
          >
            <Text as="p" variant="section-title-large">
              {title}
            </Text>
            <Text
              as="p"
              variant="paragraph-large"
              className={styles["work-project__description"]}
            >
              {description}
            </Text>
            <div className={styles["work-project__tags"]}>
              {tags.map((tag) => (
                <Tag key={tag.label} variant={tag.variant}>
                  {tag.label}
                </Tag>
              ))}
            </div>
          </motion.div>
          {children && (
            <div className={styles["work-project__about"]}>{children}</div>
          )}
        </div>
        <motion.div
          className={styles["work-project__media"]}
          variants={gridVariants}
          initial="hidden"
          animate="show"
        >
          {media.map((item) => (
            <Media
              key={item.src}
              src={item.src}
              alt={item.alt}
              type={item.type}
              hasNoise={item.hasNoise}
              isHovered={item.isHovered}
              isFilled={item.isFilled}
              hasBorder={item.hasBorder}
              borderRadius={32}
              className={cx({
                [styles["work-project__media--filled"]]: item.isFilled,
              })}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WorkProject;
