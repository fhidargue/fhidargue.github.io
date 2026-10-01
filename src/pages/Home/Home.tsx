import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Globe from "@components/Globe/Globe";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import type { HomeProject } from "./Home.types";
import { motion } from "motion/react";
import { fadeVariants, gridVariants } from "@constants/animations";

const Home = () => {
  const { t } = useTranslation();

  const projects = t("home.projects", {
    returnObjects: true,
  }) as HomeProject[];

  return (
    <main className={styles.home}>
      <motion.section className={styles["home__hero"]}>
        <motion.div
          className={styles["home__globe"]}
          variants={fadeVariants}
          initial="hidden"
          animate="show"
        >
          <Globe />
        </motion.div>
        <motion.div
          className={styles["home__content"]}
          variants={fadeVariants}
          initial="hidden"
          animate="show"
        >
          <Container>
            <HomeBanner hasDot label={t("home.homeBanner.label")}>
              {t("home.homeBanner.title1")}
              <br />
              {t("home.homeBanner.title2")}
            </HomeBanner>
          </Container>
        </motion.div>
      </motion.section>
      <motion.div
        className={styles["home__grid"]}
        variants={gridVariants}
        initial="hidden"
        animate="show"
      >
        <Container>
          <CardGrid>
            {projects.map((project) => (
              <Card
                key={project.image}
                variant="project"
                image={project.image}
                title={project.title}
                category={project.category}
                to={project.to}
                type="image"
                hasNoise
              />
            ))}
          </CardGrid>
        </Container>
      </motion.div>
    </main>
  );
};

export default Home;
