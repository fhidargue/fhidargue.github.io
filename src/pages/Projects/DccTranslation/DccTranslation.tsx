import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Text from "@components/Text/Text";
import Ticker from "@components/Ticker/Ticker";
import WorkProject from "@components/WorkProject/WorkProject";
import Video from "@components/Video/Video";
import type {
  WorkProjectMedia,
  WorkProjectTag,
} from "@components/WorkProject/WorkProject.types";
import { useTranslation } from "react-i18next";
import type { ProjectContentSection } from "./DccTranslation.types";
import { ROUTES } from "@constants/routes";

import styles from "./DccTranslation.module.scss";

const DccTranslation = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: t("work.threeColumnCards.0.poster"),
      title: t("work.threeColumnCards.0.title"),
      category: t("work.threeColumnCards.0.category"),
      to: ROUTES.PROJECTS.SNOWBALL_SIM,
    },
    {
      image: t("work.bottomCards.0.poster"),
      title: t("work.bottomCards.0.title"),
      category: t("work.bottomCards.0.category"),
      to: ROUTES.PROJECTS.MOCAP_RETARGET,
    },
    {
      image: t("work.topCards.1.poster"),
      title: t("work.topCards.1.title"),
      category: t("work.topCards.1.category"),
      to: ROUTES.PROJECTS.WAVEFRONT_PATHTRACER,
    },
  ];

  const content = t("projects.dccTranslation.content", {
    returnObjects: true,
  }) as ProjectContentSection[];

  return (
    <main className={styles["dcc-translation"]}>
      <WorkProject
        title={t("projects.dccTranslation.title")}
        description={t("projects.dccTranslation.description")}
        tags={
          t("projects.dccTranslation.tags", {
            returnObjects: true,
          }) as WorkProjectTag[]
        }
        media={
          t("projects.dccTranslation.media", {
            returnObjects: true,
          }) as WorkProjectMedia[]
        }
      >
        <div className={styles["dcc-translation__content"]}>
          {content.map((section) => (
            <section
              key={section.title}
              className={styles["dcc-translation__section"]}
            >
              <Text variant="roboto-large">{section.title}</Text>
              {section.blocks.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <Text
                      key={index}
                      variant="roboto-small"
                      colorType="secondary"
                    >
                      {block.text}
                    </Text>
                  );
                }

                if (
                  block.type === "ordered-list" ||
                  block.type === "unordered-list"
                ) {
                  const List = block.type === "ordered-list" ? "ol" : "ul";

                  return (
                    <List
                      key={index}
                      className={styles["dcc-translation__list"]}
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Text
                            as="span"
                            variant="roboto-small"
                            colorType="secondary"
                          >
                            {item.title && <strong>{item.title}</strong>}
                            {item.title && ": "}
                            {item.text}
                          </Text>
                        </li>
                      ))}
                    </List>
                  );
                }

                return null;
              })}
            </section>
          ))}
        </div>
      </WorkProject>
      <Container className={styles["dcc-translation__video-container"]}>
        <Video
          src={t("projects.dccTranslation.video.src")}
          poster={t("projects.dccTranslation.video.poster")}
          category={t("projects.dccTranslation.video.category")}
          title={t("projects.dccTranslation.video.title")}
          hasBorder
        />
      </Container>
      <Container className={styles["dcc-translation__ticker"]}>
        <Ticker title1="MORE WORK" title2="YOU MIGHT BE INTERESTED" />
      </Container>
      <Container className={styles["dcc-translation__grid"]}>
        <CardGrid variant="three-column">
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

export default DccTranslation;
