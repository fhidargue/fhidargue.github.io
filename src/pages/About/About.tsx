import {
  AppleLogoIcon,
  FramerLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  MetaLogoIcon,
  GoogleLogoIcon,
} from "@phosphor-icons/react";

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
import { useNavigate } from "react-router-dom";

const clients = [
  { icon: <AppleLogoIcon />, href: "https://www.apple.com/" },
  { icon: <FramerLogoIcon />, href: "https://www.framer.com/" },
  { icon: <GithubLogoIcon />, href: "https://github.com/" },
  { icon: <InstagramLogoIcon />, href: "https://www.instagram.com/" },
  { icon: <MetaLogoIcon />, href: "https://about.meta.com/" },
  { icon: <GoogleLogoIcon />, href: "https://www.google.com/" },
];

const awards = [
  {
    category: "SEBASTIAN CAMARGO",
    title: "CSSDA BEST INNOVATION",
    year: "2022",
    href: "https://www.cssdesignawards.com/",
  },
  {
    category: "SEBASTIAN CAMARGO",
    title: "CSSDA BEST UI",
    year: "2022",
    to: "/awards/cssda-best-ui",
  },
  {
    category: "SEBASTIAN CAMARGO",
    title: "CSSDA BEST UX",
    year: "2022",
    href: "https://www.cssdesignawards.com/",
  },
];

const colophon = [
  {
    thumbnail: "/images/film-strip/pc.png",
    to: "/colophon/1",
  },
  {
    thumbnail: "/images/film-strip/desk.png",
    to: "/colophon/2",
  },
  {
    thumbnail: "/images/film-strip/subway.png",
    href: "https://example.com/colophon/3",
  },
  {
    thumbnail: "/images/film-strip/stairs.png",
    href: "https://example.com/colophon/4",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Container>
        <HomeBanner>
          FELIPE
          <br />
          HIDALGO
        </HomeBanner>
      </Container>

      <AboutMedia
        src="/images/cards/man.png"
        alt="About Felipe"
        leftText="THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT."
        rightText="STAND HIGH LONG ENOUGH AND YOUR LIGHTNING WILL COME."
        hasNoise
      />

      <Container className={styles["about__description"]}>
        <Text variant="paragraph-large">
          Meet Alice, a talented Digital Designer from the vibrant city of San
          Francisco. With a keen eye for detail and an exceptional skill set,
          Alice is a master of Photography, UI/UX, and No-Code Web Design. She
          has a true passion for creating visually stunning designs that not
          only look great but also provide an exceptional user experience.
        </Text>
      </Container>

      <FilmStrip
        images={[
          "/images/film-strip/subway.png",
          "/images/film-strip/desk.png",
          "/images/film-strip/stairs.png",
          "/images/film-strip/deck.png",
          "/images/film-strip/pc.png",
        ]}
        size="sm"
      />

      <Services
        services={[
          {
            title: "3D DESIGN",
            image: "/images/services/robot.png",
            imagePosition: "left",
          },
          {
            title: "PHOTOGRAPHY",
            image: "/images/services/girl.png",
            imagePosition: "right",
          },
          {
            title: "UI+UX",
            image: "/images/services/keyboard.png",
            imagePosition: "left",
          },
          {
            title: "WEB DESIGN",
            image: "/images/services/laptop.png",
            imagePosition: "right",
          },
        ]}
      />

      <StickySection
        sections={[
          {
            title: "Select Clients",
            children: (
              <CardGrid className={styles["about__clients"]}>
                {clients.map(({ icon, href }) => (
                  <div key={href} className={styles["about__client-card"]}>
                    <Card variant="client" icon={icon} href={href} />
                  </div>
                ))}
              </CardGrid>
            ),
          },
          {
            title: "Awards and Recognition",
            children: (
              <div className={styles["about__awards"]}>
                {awards.map((award) => (
                  <div key={award.to} className={styles["about__award-card"]}>
                    <Card variant="award" {...award} />
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Colophon",
            children: (
              <CardGrid>
                {colophon.map((item) => (
                  <div
                    key={item.thumbnail}
                    className={styles["about__colophon-card"]}
                  >
                    <Card
                      variant="colophon"
                      video="/videos/bunny.mp4"
                      title="COLPHON"
                      category="MOTION"
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
