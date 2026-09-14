import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import PlaygroundBanner from "@components/PlaygroundBanner/PlaygroundBanner";
import Video from "@components/Video/Video";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import styles from "./Playground.module.scss";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    media: "/images/film-strip/peace.png",
    type: "image" as const,
    title: "Retro Futuristic",
    category: "GAMING",
    to: "/playground/retro-futuristic",
  },
  {
    media: "/videos/bunny.mp4",
    type: "video" as const,
    title: "Rain Drops",
    category: "CINEMA 4D",
    to: "/playground/rain-drops",
    autoPlay: true,
  },
  {
    media: "/videos/bunny.mp4",
    type: "video" as const,
    title: "Glass Distortion",
    category: "CINEMA 4D",
    to: "/playground/glass",
    autoPlay: true,
  },
  {
    media: "/images/film-strip/desk.png",
    type: "image" as const,
    title: "Iso Cubes",
    category: "ARCHITECTURE",
    to: "/playground/iso",
  },
];

const threeColumnCards = [
  {
    media: "/images/film-strip/deck.png",
    type: "image" as const,
    title: "Digital World",
    category: "MOTION",
    to: "/playground/digital-world",
  },
  {
    media: "/images/film-strip/subway.png",
    type: "image" as const,
    title: "Urban Study",
    category: "DESIGN",
    to: "/playground/urban-study",
  },
  {
    media: "/images/cards/man.png",
    type: "image" as const,
    title: "Character Study",
    category: "ART",
    to: "/playground/character-study",
  },
];

const Playground = () => {
  const navigate = useNavigate();

  return (
    <main>
      <PlaygroundBanner
        topHeading="EXPLORE THE"
        bottomHeading="GROUND"
        label="UNLEASH YOUR CREATIVITY. SHOWCASE YOUR BEST CONCEPT WORK AND HIGHLIGHT YOUR UNIQUE SKILLS TO ATTRACT NEW CLIENTS."
        media="/videos/bunny.mp4"
        mediaType="video"
        mediaAlt="Playground video"
        className={styles["playground__container"]}
      />
      <Container className={styles["playground__grid-container"]}>
        <CardGrid variant="playground" featuredPosition="right">
          {cards.slice(0, 2).map((card) => (
            <Card key={card.to} variant="playground" {...card} hasNoise />
          ))}
        </CardGrid>
      </Container>
      <Container
        className={styles["playground__grid-container--three-columns"]}
      >
        <CardGrid variant="three-column">
          {threeColumnCards.map((card) => (
            <Card key={card.to} variant="playground" {...card} hasNoise />
          ))}
        </CardGrid>
      </Container>
      <Container className={styles["playground__video-container"]}>
        <Video
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          poster="/images/film-strip/stairs.png"
          category="VIDEO"
          title="Search Light"
        />
      </Container>
      <Container
        className={cx(
          styles["playground__grid-container"],
          styles["playground__grid-container--left"],
        )}
      >
        <CardGrid variant="playground" featuredPosition="left">
          {cards.slice(2, 4).map((card) => (
            <Card key={card.to} variant="playground" {...card} hasNoise />
          ))}
        </CardGrid>
      </Container>
      <Container>
        <HomeBanner
          className={styles["playground__banner"]}
          headingClassName={styles["playground__banner-heading"]}
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

export default Playground;
