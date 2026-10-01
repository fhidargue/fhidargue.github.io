import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const SnowGlobeSim = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.snowglobe"
      relatedProjects={[
        {
          image: t("work.threeColumnCards.1.poster"),
          title: t("work.threeColumnCards.1.title"),
          category: t("work.threeColumnCards.1.category"),
          to: ROUTES.PROJECTS.HAIR_SIM,
        },
        {
          image: t("work.bottomCards.1.poster"),
          title: t("work.bottomCards.1.title"),
          category: t("work.bottomCards.1.category"),
          to: ROUTES.PROJECTS.IMP_STAIRS,
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

export default SnowGlobeSim;
