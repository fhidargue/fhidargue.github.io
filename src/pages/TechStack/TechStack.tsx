import HomeBanner from "@components/HomeBanner/HomeBanner";
import Container from "@components/Container/Container";
import TechStackGrid from "@components/TechStackGrid/TechStackGrid";

import useTheme from "@hooks/useTheme";

import { useTranslation } from "react-i18next";

import styles from "./TechStack.module.scss";

import {
  FileCSharpIcon,
  WebhooksLogoIcon,
  LockIcon,
  KeyIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react";

import {
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiGo,
  SiDotnet,
  SiNodedotjs,
  SiSpringboot,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiVite,
  SiSass,
  SiHtml5,
  SiCss,
  SiStorybook,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGraphql,
  SiElasticsearch,
  SiPostman,
  SiAutodeskmaya,
  SiHoudini,
  SiUnrealengine,
  SiQt,
  SiOpengl,
  SiWebgl,
  SiThreedotjs,
  SiGooglecloud,
  SiTerraform,
  SiDocker,
  SiPodman,
  SiLinux,
  SiMacos,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPerforce,
  SiInfinityfree,
  SiGoogleanalytics,
  SiStripe,
  SiFedex,
  SiSelenium,
  SiJunit5,
  SiJest,
  SiPytest,
  SiFigma,
  SiFramer,
} from "@icons-pack/react-simple-icons";

export interface TechStackTranslationCard {
  title: string;
  category: string;
  href: string;
}

export interface TechStackSection {
  title: string;
  featuredCards: TechStackTranslationCard[];
  techStackCards: TechStackTranslationCard[];
}

const TechStack = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const sectionIcons = [
    {
      featured: [<SiReact />, <SiVuedotjs />],
      cards: [
        <SiTypescript />,
        <SiJavascript />,
        <SiNextdotjs />,
        <SiVite />,
        <SiSass />,
        <SiHtml5 />,
        <SiCss />,
        <SiStorybook />,
      ],
    },
    {
      featured: [<SiCplusplus />, <SiPython />],
      cards: [
        <SiOpenjdk />,
        <FileCSharpIcon />,
        <SiGo />,
        <SiDotnet />,
        <SiNodedotjs />,
        <SiSpringboot />,
        <SiMysql />,
        <SiPostgresql />,
        <SiMongodb />,
        <SiSqlite />,
        <SiGraphql />,
        <SiElasticsearch />,
        <WebhooksLogoIcon />,
        <LockIcon />,
        <KeyIcon />,
        <SiPostman />,
      ],
    },
    {
      featured: [<SiAutodeskmaya />, <SiHoudini />],
      cards: [
        <SiUnrealengine />,
        theme === "dark"
          ? "/icons/openusd-white.png"
          : "/icons/openusd-black.png",
        <SiAutodeskmaya />,
        theme === "dark"
          ? "/icons/pyside-white.png"
          : "/icons/pyside-black.png",
        <SiQt />,
      ],
    },
    {
      featured: [<SiOpengl />, <SiWebgl />],
      cards: [
        <SiThreedotjs />,
        theme === "dark"
          ? "/icons/renderman-white.png"
          : "/icons/renderman-black.png",
        theme === "dark"
          ? "/icons/arnold-white.png"
          : "/icons/arnold-black.png",
        theme === "dark" ? "/icons/karma-white.png" : "/icons/karma-black.png",
      ],
    },
    {
      featured: [
        theme === "dark" ? "/icons/azure-white.png" : "/icons/azure-black.png",
        <SiGooglecloud />,
      ],
      cards: [
        theme === "dark" ? "/icons/aws-white.png" : "/icons/aws-black.png",
        <SiTerraform />,
        <SiDocker />,
        <SiPodman />,
        <SiLinux />,
        <WindowsLogoIcon />,
        <SiMacos />,
        <SiGit />,
        <SiPerforce />,
        <SiGithub />,
        <SiGitlab />,
        <SiInfinityfree />,
      ],
    },
    {
      featured: [
        theme === "dark" ? "/icons/aem-white.png" : "/icons/aem-black.png",
        theme === "dark"
          ? "/icons/magento-white.png"
          : "/icons/magento-black.png",
      ],
      cards: [
        theme === "dark" ? "/icons/acs-white.png" : "/icons/acs-black.png",
        theme === "dark" ? "/icons/aa-white.png" : "/icons/aa-black.png",
        <SiGoogleanalytics />,
        <SiStripe />,
        <SiFedex />,
        <SiSelenium />,
        <SiJunit5 />,
        <SiJest />,
        <SiPytest />,
        <SiFigma />,
        <SiFramer />,
      ],
    },
  ];

  const sections = t("techStack.sections", {
    returnObjects: true,
  }) as TechStackSection[];

  return (
    <main>
      <Container>
        <HomeBanner label={t("techStack.homeBanner.label")}>
          {t("techStack.homeBanner.title1")}
          <br />
          {t("techStack.homeBanner.title2")}
        </HomeBanner>
      </Container>
      <Container className={styles["tech-stack__container"]}>
        {sections.map((section, index) => (
          <TechStackGrid
            key={section.title}
            title={section.title}
            featuredCards={section.featuredCards.map((card, cardIndex) => ({
              ...card,
              icon: sectionIcons[index].featured[cardIndex],
            }))}
            techStackCards={section.techStackCards.map((card, cardIndex) => ({
              ...card,
              icon: sectionIcons[index].cards[cardIndex],
            }))}
          />
        ))}
      </Container>
    </main>
  );
};

export default TechStack;
