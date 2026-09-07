import cx from "classnames";

import Heading from "@components/Heading/Heading";
import StatusIndicator from "@components/StatusIndicator/StatusIndicator";
import Text from "@components/Text/Text";

import type { HomeBannerProps } from "./HomeBanner.types";
import styles from "./HomeBanner.module.scss";
import useBreakpoints from "@hooks/useBreakpoints";

const HomeBanner = ({ children, className }: HomeBannerProps) => {
  const { isMobile, isTablet } = useBreakpoints();

  const headingLevel = isMobile ? 3 : isTablet ? 2 : 1;

  return (
    <section className={cx(styles["home-banner"], className)}>
      <div className={styles["home-banner__content"]}>
        <StatusIndicator>
          <Text variant="roboto-small">AVAILABLE FOR FREELANCE</Text>
        </StatusIndicator>
        <Heading
          level={headingLevel}
          className={styles["home-banner__heading"]}
        >
          {children}
        </Heading>
      </div>
    </section>
  );
};
export default HomeBanner;
