import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Globe from "@components/Globe/Globe";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import type { HomeProject } from "./Home.types";

const Home = () => {
  const { t } = useTranslation();

  const projects = t("home.projects", {
    returnObjects: true,
  }) as HomeProject[];

  return (
    <main className={styles.home}>
      <section className={styles["home__hero"]}>
        <div className={styles["home__globe"]}>
          <Globe />
        </div>
        <div className={styles["home__content"]}>
          <Container>
            <HomeBanner hasDot label={t("home.homeBanner.label")}>
              {t("home.homeBanner.title1")}
              <br />
              {t("home.homeBanner.title2")}
            </HomeBanner>
          </Container>
        </div>
      </section>
      <Container className={styles["home__grid"]}>
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
    </main>
  );
};

export default Home;
