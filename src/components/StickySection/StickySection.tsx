import cx from "classnames";

import Container from "@components/Container/Container";
import Text from "@components/Text/Text";

import type { StickySectionProps } from "./StickySection.types";
import styles from "./StickySection.module.scss";

const StickySection = ({ sections, className }: StickySectionProps) => {
  return (
    <Container>
      <div className={cx(styles["sticky-section"], className)}>
        {sections.map((section, index) => (
          <section key={index} className={styles["sticky-section__item"]}>
            <div className={styles["sticky-section__title"]}>
              <Text as="p" variant="section-title-large">
                {section.title}
              </Text>
            </div>
            <div className={styles["sticky-section__content"]}>
              {section.children}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default StickySection;
