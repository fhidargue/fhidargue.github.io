import cx from "classnames";

import Container from "@components/Container/Container";
import Media from "@components/Media/Media";
import Text from "@components/Text/Text";
import Tag from "@components/Tag/Tag";

import styles from "./WorkProject.module.scss";
import type { WorkProjectProps } from "./WorkProject.types";

const WorkProject = ({
  title,
  description,
  tags,
  media,
  children,
  className,
}: WorkProjectProps) => {
  return (
    <section className={cx(styles["work-project"], className)}>
      <Container className={styles["work-project__container"]}>
        <div className={styles["work-project__content"]}>
          <div className={styles["work-project__heading"]}>
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
          </div>
          {children && (
            <div className={styles["work-project__about"]}>{children}</div>
          )}
        </div>
        <div className={styles["work-project__media"]}>
          {media.map((item) => (
            <Media
              key={item.src}
              src={item.src}
              alt={item.alt}
              type={item.type}
              hasNoise={item.hasNoise}
              isHovered={item.isHovered}
              borderRadius={32}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkProject;
