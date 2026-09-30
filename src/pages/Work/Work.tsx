import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import PlaygroundBanner from "@components/PlaygroundBanner/PlaygroundBanner";
import Video from "@components/Video/Video";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import styles from "./Work.module.scss";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { WorkCard } from "./Work.types";

const Work = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const topCards = t("work.topCards", {
    returnObjects: true,
  }) as WorkCard[];

  const threeColumnCards = t("work.threeColumnCards", {
    returnObjects: true,
  }) as WorkCard[];

  const bottomCards = t("work.bottomCards", {
    returnObjects: true,
  }) as WorkCard[];

  return (
    <main>
      <PlaygroundBanner
        topHeading={t("work.banner.title1")}
        bottomHeading={t("work.banner.title2")}
        label={t("work.banner.label")}
        media={t("work.banner.media")}
        mediaAlt={t("work.banner.mediaAlt")}
        mediaType="video"
        className={styles["playground__container"]}
      />
      <Container className={styles["playground__grid-container"]}>
        <Video
          src={t("work.video.src")}
          poster={t("work.video.poster")}
          category={t("work.video.category")}
          title={t("work.video.title")}
        />
      </Container>
      <Container className={styles["playground__video-container"]}>
        <CardGrid variant="playground" featuredPosition="right">
          {topCards.map((card) => (
            <Card key={card.to} variant="playground" {...card} />
          ))}
        </CardGrid>
      </Container>
      <Container
        className={styles["playground__grid-container--three-columns"]}
      >
        <CardGrid variant="three-column">
          {threeColumnCards.map((card) => (
            <Card key={card.to} variant="playground" {...card} />
          ))}
        </CardGrid>
      </Container>
      <Container
        className={cx(
          styles["playground__grid-container"],
          styles["playground__grid-container--left"],
        )}
      >
        <CardGrid variant="playground" featuredPosition="left">
          {bottomCards.map((card) => (
            <Card key={card.to} variant="playground" {...card} />
          ))}
        </CardGrid>
      </Container>
      <Container>
        <HomeBanner
          className={styles["playground__banner"]}
          headingClassName={styles["playground__banner-heading"]}
          label={t("contact.banner.label")}
          buttonText={t("contact.banner.buttonText")}
          buttonOnClick={() => {
            navigate("/contact");
          }}
        >
          {t("contact.banner.title1")}
          <br />
          {t("contact.banner.title2")}
        </HomeBanner>
      </Container>
    </main>
  );
};

export default Work;
