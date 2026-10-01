import ProjectPage from "@components/ProjectPage/ProjectPage";
import { ROUTES } from "@constants/routes";
import { useTranslation } from "react-i18next";

const WavefrontPathtracer = () => {
  const { t } = useTranslation();

  return (
    <ProjectPage
      namespace="projects.wavefront"
      relatedProjects={[
        {
          image: t("work.threeColumnCards.2.media"),
          title: t("work.threeColumnCards.2.title"),
          category: t("work.threeColumnCards.2.category"),
          to: ROUTES.PROJECTS.RENDERMAN_API,
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

export default WavefrontPathtracer;
