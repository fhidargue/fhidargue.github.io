import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Text from "@components/Text/Text";
import Ticker from "@components/Ticker/Ticker";
import WorkProject from "@components/WorkProject/WorkProject";

import styles from "./Work.module.scss";

const projects = [
  {
    image: "/images/film-strip/stairs.png",
    title: "London",
    category: "ARCHITECTURE",
    to: "/work/project-2",
  },
  {
    image: "/images/film-strip/subway.png",
    title: "Smart Home",
    category: "IOS APP",
    to: "/work/project-3",
  },
  {
    image: "/images/film-strip/pc.png",
    title: "Edge Runner",
    category: "AUTOMOTIVE",
    to: "/work/project-4",
  },
];

const Work = () => {
  return (
    <main className={styles.work}>
      <WorkProject
        title="HUD"
        description="Expand Your Universe"
        tags={[
          {
            label: "AR/VR",
            variant: "primary",
          },
          {
            label: "2077",
            variant: "secondary",
          },
        ]}
        media={[
          {
            src: "/images/film-strip/pc.png",
            type: "image",
            alt: "HUD project",
            hasNoise: true,
            isHovered: false,
          },
          {
            src: "/images/film-strip/peace.png",
            type: "image",
            alt: "HUD project",
            hasNoise: false,
            isHovered: false,
          },
          {
            src: "/images/film-strip/deck.png",
            type: "image",
            alt: "HUD project",
            hasNoise: true,
            isHovered: false,
          },
        ]}
      >
        <Text variant="roboto-large">ABOUT</Text>
        <Text variant="roboto-small" colorType="secondary">
          AUGMENTED REALITY (AR) AND VIRTUAL REALITY (VR) BRIDGE THE DIGITAL AND
          PHYSICAL WORLDS. THEY ALLOW YOU TO TAKE IN INFORMATION AND CONTENT
          VISUALLY, AND TO TAKE YOU INTO THE WORLD.
        </Text>
      </WorkProject>
      <Container className={styles["work__ticker"]}>
        <Ticker title1="MORE WORK" title2="YOU MIGHT BE INTERESTED" />
      </Container>
      <Container className={styles["work__grid"]}>
        <CardGrid variant="three-column">
          {projects.map((project) => (
            <Card
              key={project.image}
              variant="project"
              image={project.image}
              title={project.title}
              category={project.category}
              to={project.to}
              type="image"
              hasNoise
            />
          ))}
        </CardGrid>
      </Container>
    </main>
  );
};

export default Work;
