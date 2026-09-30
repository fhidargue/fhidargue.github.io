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
          image: t("work.topCards.1.poster"),
          title: t("work.topCards.1.title"),
          category: t("work.topCards.1.category"),
          to: ROUTES.PROJECTS.WAVEFRONT_PATHTRACER,
        },
        {
          image: t("work.bottomCards.1.poster"),
          title: t("work.bottomCards.1.title"),
          category: t("work.bottomCards.1.category"),
          to: ROUTES.PROJECTS.IMP_STAIRS,
        },
        {
          image: t("work.threeColumnCards.2.media"),
          title: t("work.threeColumnCards.2.title"),
          category: t("work.threeColumnCards.2.category"),
          to: ROUTES.PROJECTS.RENDERMAN_API,
        },
      ]}
    />
  );
};

export default MocapRetargeting;
