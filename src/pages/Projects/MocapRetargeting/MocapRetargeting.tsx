import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const MocapRetargeting = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.mocap"
      relatedProjects={[
        {
          image: t("work.bottomCards.1.poster"),
          title: t("work.bottomCards.1.title"),
          category: t("work.bottomCards.1.category"),
          to: ROUTES.PROJECTS.IMP_STAIRS,
        },
        {
          image: t("work.topCards.0.poster"),
          title: t("work.topCards.0.title"),
          category: t("work.topCards.0.category"),
          to: ROUTES.PROJECTS.DCC_TRANSLATION,
        },
        {
          image: t("work.threeColumnCards.1.poster"),
          title: t("work.threeColumnCards.1.title"),
          category: t("work.threeColumnCards.1.category"),
          to: ROUTES.PROJECTS.HAIR_SIM,
        },
      ]}
    />
  );
};

export default MocapRetargeting;
