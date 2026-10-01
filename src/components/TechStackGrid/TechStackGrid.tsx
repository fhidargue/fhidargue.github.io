import type { TechStackGridProps } from "./TechStackGrid.types";

import useBreakpoints from "@hooks/useBreakpoints";

import Card from "@components/Card/Card";
import Text from "@components/Text/Text";

import styles from "./TechStackGrid.module.scss";

const TechStackGrid = ({
  title,
  featuredCards,
  techStackCards,
}: TechStackGridProps) => {
  const { isMobile } = useBreakpoints();

  return (
    <div className={styles["tech-stack-grid"]}>
      {title && (
        <div className={styles["tech-stack-grid__title"]}>
          <Text
            as="p"
            variant={`section-title-${isMobile ? "small" : "large"}`}
          >
            {title}
          </Text>
        </div>
      )}
      <div className={styles["tech-stack-grid__featured"]}>
        {featuredCards.map((card) => (
          <Card key={card.href} variant="tech-stack" {...card} />
        ))}
      </div>
      <div className={styles["tech-stack-grid__items"]}>
        {techStackCards.map((card) => (
          <Card key={card.href} variant="tech-stack" {...card} />
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;
