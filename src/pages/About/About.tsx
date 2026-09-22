import {
  SiCplusplus,
  SiPython,
  SiAutodeskmaya,
  SiHoudini,
  SiUnrealengine,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiOpenjdk,
  SiDocker,
  SiGooglecloud,
} from "@icons-pack/react-simple-icons";

import Container from "@components/Container/Container";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import AboutMedia from "@components/AboutMedia/AboutMedia";
import Text from "@components/Text/Text";
import FilmStrip from "@components/FilmStrip/FilmStrip";
import Services from "@components/Services/Services";
import StickySection from "@components/StickySection/StickySection";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";

import styles from "./About.module.scss";

import useBreakpoints from "@hooks/useBreakpoints";
import useTheme from "@hooks/useTheme";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ServiceItem, AwardItem, ColophonItem } from "./About.types";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isMobile } = useBreakpoints();
  const { theme } = useTheme();

  const openUSDIcon =
    theme === "dark" ? "/icons/openusd-white.png" : "/icons/openusd-black.png";

  const images = t("about.images", { returnObjects: true }) as string[];
  const services = t("about.services", {
    returnObjects: true,
  }) as ServiceItem[];

  const clients = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "OpenUSD", icon: openUSDIcon },
    { name: "Maya", icon: <SiAutodeskmaya /> },
    { name: "Houdini", icon: <SiHoudini /> },
    { name: "Unreal Engine", icon: <SiUnrealengine /> },
    { name: "React", icon: <SiReact /> },
    { name: "Vue", icon: <SiVuedotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <SiOpenjdk /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
  ];

  const clientLinks = t("about.sections.0.clients", {
    returnObjects: true,
  }) as string[];

  const awards = t("about.sections.1.awards", {
    returnObjects: true,
  }) as AwardItem[];

  const colophon = t("about.sections.2.colophons", {
    returnObjects: true,
  }) as ColophonItem[];

  return (
    <main>
      <Container>
        <HomeBanner label={t("about.homeBanner.label")}>
          {t("about.homeBanner.title1")}
          <br />
          {t("about.homeBanner.title2")}
        </HomeBanner>
      </Container>
      <AboutMedia
        src={t("about.aboutMedia.image")}
        alt={t("about.aboutMedia.imageAlt")}
        leftText={t("about.aboutMedia.leftText")}
        rightText={t("about.aboutMedia.rightText")}
        hasNoise
      />
      <Container className={styles["about__description"]}>
        <Text variant="paragraph-large">{t("about.pitch")}</Text>
      </Container>
      <FilmStrip images={images} size={isMobile ? "sm" : "md"} />
      <Services services={services} />
      <StickySection
        sections={[
          {
            title: t("about.sections.0.title"),
            children: (
              <CardGrid className={styles["about__clients"]}>
                {clients.map((client, index) => (
                  <div
                    key={client.name}
                    className={styles["about__client-card"]}
                  >
                    <Card
                      variant="client"
                      name={client.name}
                      icon={client.icon}
                      href={clientLinks[index]}
                    />
                  </div>
                ))}
              </CardGrid>
            ),
          },
          {
            title: t("about.sections.1.title"),
            children: (
              <div className={styles["about__awards"]}>
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className={styles["about__award-card"]}
                  >
                    <Card variant="award" {...award} />
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: t("about.sections.2.title"),
            children: (
              <CardGrid>
                {colophon.map((item) => (
                  <div
                    key={item.title}
                    className={styles["about__colophon-card"]}
                  >
                    <Card
                      variant="colophon"
                      category={item.label}
                      {...item}
                      hasNoise
                    />
                  </div>
                ))}
              </CardGrid>
            ),
          },
        ]}
      />
      <Container>
        <HomeBanner
          className={styles["about__banner"]}
          headingClassName={styles["about__banner-heading"]}
          label="CONTACT"
          buttonText="Let's Talk"
          buttonOnClick={() => {
            navigate("/contact");
          }}
        >
          HAVE A COOL
          <br />
          PROJECT?
        </HomeBanner>
      </Container>
    </main>
  );
};

export default About;
