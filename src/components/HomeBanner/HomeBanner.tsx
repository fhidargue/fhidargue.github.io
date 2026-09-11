import cx from "classnames";

import Button from "@components/Button/Button";
import Heading from "@components/Heading/Heading";
import StatusIndicator from "@components/StatusIndicator/StatusIndicator";
import Text from "@components/Text/Text";

import type { HomeBannerProps } from "./HomeBanner.types";
import styles from "./HomeBanner.module.scss";
import useBreakpoints from "@hooks/useBreakpoints";

const HomeBanner = ({
  children,
  className,
  label = "AVAILABLE FOR FREELANCE",
  hasDot,
  buttonText,
  headingLevel = 1,
  headingClassName,
  buttonOnClick,
}: HomeBannerProps) => {
  const { isMobile, isTablet } = useBreakpoints();

  if (isMobile) {
    headingLevel = 3;
  } else if (isTablet) {
    headingLevel = 2;
  }

  return (
    <section className={cx(styles["home-banner"], className)}>
      <div className={styles["home-banner__content"]}>
        <StatusIndicator hasDot={hasDot}>
          <Text variant="roboto-large">{label}</Text>
        </StatusIndicator>
        <Heading
          level={headingLevel}
          className={cx(styles["home-banner__heading"], headingClassName)}
        >
          {children}
        </Heading>
        {buttonText && (
          <Button
            className={styles["home-banner__button"]}
            onClick={buttonOnClick}
          >
            <Text as="span" variant="paragraph-large">
              {buttonText}
            </Text>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HomeBanner;
