import { useTranslation } from "react-i18next";

import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";

const DccTranslation = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.dccTranslation"
      relatedProjects={[
        {
          image: t("work.threeColumnCards.0.poster"),
          title: t("work.threeColumnCards.0.title"),
          category: t("work.threeColumnCards.0.category"),
          to: ROUTES.PROJECTS.SNOWGLOBE_SIM,
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
      ]}
    />
  );
};

export default DccTranslation;
