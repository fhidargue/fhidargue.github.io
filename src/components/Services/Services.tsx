import cx from "classnames";

import Container from "@components/Container/Container";
import Heading from "@components/Heading/Heading";
import Media from "@components/Media/Media";
import Text from "@components/Text/Text";

import type { ServicesProps } from "./Services.types";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import styles from "./Services.module.scss";

import useBreakpoints from "@hooks/useBreakpoints";
import { servicesTextVariants } from "@constants/animations";

const Services = ({ services, className }: ServicesProps) => {
  const { isMobile, isTablet } = useBreakpoints();
  const { t } = useTranslation();

  return (
    <Container>
      <section
        className={cx(styles.services, className)}
        aria-labelledby="services-heading"
      >
        <div id="services-heading" className={styles["services__heading"]}>
          <Text as="p" variant="roboto-large">
            {t("about.servicesTitle")}
          </Text>
        </div>
        <ul className={styles["services__list"]}>
          {services.map((service) => (
            <li
              key={service.title?.toString()}
              className={cx(
                styles["services__item"],
                styles[`services__item--${service.imagePosition}`],
              )}
            >
              {!isMobile && !isTablet && (
                <div className={styles["services__image"]}>
                  <Media
                    src={service.image}
                    type="image"
                    alt=""
                    hasNoise
                    borderRadius={100}
                  />
                </div>
              )}
              <motion.div
                className={styles["services__title-wrapper"]}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0,
                }}
              >
                <motion.div variants={servicesTextVariants}>
                  <Heading
                    level={isMobile ? 2 : 1}
                    className={styles["services__title"]}
                  >
                    {service.title}
                  </Heading>
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default Services;
