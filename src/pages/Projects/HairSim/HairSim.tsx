import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const HairSim = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.hair"
      relatedProjects={[
        {
          image: t("work.threeColumnCards.2.media"),
          title: t("work.threeColumnCards.2.title"),
          category: t("work.threeColumnCards.2.category"),
          to: ROUTES.PROJECTS.RENDERMAN_API,
        },
        {
          image: t("work.threeColumnCards.0.poster"),
          title: t("work.threeColumnCards.0.title"),
          category: t("work.threeColumnCards.0.category"),
          to: ROUTES.PROJECTS.SNOWGLOBE_SIM,
        },
        {
          image: t("work.topCards.1.poster"),
          title: t("work.topCards.1.title"),
          category: t("work.topCards.1.category"),
          to: ROUTES.PROJECTS.HDA_GARDEN,
        },
      ]}
    />
  );
};

export default HairSim;
