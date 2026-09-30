import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const ImpStairs = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.impossibleStairs"
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
          image: t("work.threeColumnCards.3.poster"),
          title: t("work.threeColumnCards.3.title"),
          category: t("work.threeColumnCards.3.category"),
          to: ROUTES.PROJECTS.HDA_GARDEN,
        },
      ]}
    />
  );
};

export default ImpStairs;
