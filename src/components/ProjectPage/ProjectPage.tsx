import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Link from "@components/Link/Link";
import ProjectContent from "@components/ProjectContent/ProjectContent";
import Text from "@components/Text/Text";
import Ticker from "@components/Ticker/Ticker";
import Video from "@components/Video/Video";
import WorkProject from "@components/WorkProject/WorkProject";

import type {
  WorkProjectMedia,
  WorkProjectTag,
} from "@components/WorkProject/WorkProject.types";

import type { ProjectContentSection, ProjectLink } from "@constants/types";
import { useTranslation } from "react-i18next";
import type { ProjectPageProps } from "./ProjectPage.types";

import styles from "./ProjectPage.module.scss";

const ProjectPage = ({ namespace, relatedProjects }: ProjectPageProps) => {
  const { t } = useTranslation();

  const content = t(`${namespace}.content`, {
    returnObjects: true,
  }) as ProjectContentSection[];

  const links = t(`${namespace}.links`, {
    returnObjects: true,
  }) as ProjectLink[];

  const tags = t(`${namespace}.tags`, {
    returnObjects: true,
  }) as WorkProjectTag[];

  const media = t(`${namespace}.media`, {
    returnObjects: true,
  }) as WorkProjectMedia[];

  return (
    <main className={styles["project-page"]}>
      <WorkProject
        title={t(`${namespace}.title`)}
        description={t(`${namespace}.description`)}
        tags={tags}
        media={media}
      >
        <ProjectContent content={content} />
        <div className={styles["project-page__links"]}>
          <Text variant="roboto-large">{t(`${namespace}.linksTitle`)}</Text>
          <div className={styles["project-page__link-list"]}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                changed={link.changed}
                isExternal={link.isExternal}
              >
                <Text as="span" variant="roboto-large">
                  {link.label}
                </Text>
              </Link>
            ))}
          </div>
        </div>
      </WorkProject>
      <Container className={styles["project-page__video-container"]}>
        <Video
          src={t(`${namespace}.video.src`)}
          poster={t(`${namespace}.video.poster`)}
          category={t(`${namespace}.video.category`)}
          title={t(`${namespace}.video.title`)}
          hasBorder
        />
      </Container>
      <Container className={styles["project-page__ticker"]}>
        <Ticker
          title1={t(`${namespace}.ticker.title1`)}
          title2={t(`${namespace}.ticker.title2`)}
        />
      </Container>
      <Container className={styles["project-page__grid"]}>
        <CardGrid variant="three-column">
          {relatedProjects.map((project) => (
            <Card
              key={project.to}
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

export default ProjectPage;
