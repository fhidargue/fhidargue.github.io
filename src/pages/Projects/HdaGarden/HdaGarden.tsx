import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const HdaGarden = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.hdaGarden"
      relatedProjects={[
        {
          image: t("work.threeColumnCards.1.poster"),
          title: t("work.threeColumnCards.1.title"),
          category: t("work.threeColumnCards.1.category"),
          to: ROUTES.PROJECTS.HAIR_SIM,
        },
        {
          image: t("work.topCards.0.poster"),
          title: t("work.topCards.0.title"),
          category: t("work.topCards.0.category"),
          to: ROUTES.PROJECTS.DCC_TRANSLATION,
        },
        {
          image: t("work.topCards.1.poster"),
          title: t("work.topCards.1.title"),
          category: t("work.topCards.1.category"),
          to: ROUTES.PROJECTS.WAVEFRONT_PATHTRACER,
        },
      ]}
    />
  );
};

export default HdaGarden;
