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
          image: t("work.bottomCards.0.poster"),
          title: t("work.bottomCards.0.title"),
          category: t("work.bottomCards.0.category"),
          to: ROUTES.PROJECTS.MOCAP_RETARGET,
        },
        {
          image: t("work.threeColumnCards.0.poster"),
          title: t("work.threeColumnCards.0.title"),
          category: t("work.threeColumnCards.0.category"),
          to: ROUTES.PROJECTS.SNOWGLOBE_SIM,
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

export default ImpStairs;
