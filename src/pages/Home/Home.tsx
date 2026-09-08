import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import styles from "./Home.module.scss";

const projects = [
  {
    image: "/images/cards/man.png",
    title: "HUD",
    category: "AR/VR",
    to: "/work/project-1",
  },
  {
    image: "/images/film-strip/peace.png",
    title: "London",
    category: "ARCHITECTURE",
    to: "/work/project-2",
  },
  {
    image: "/images/film-strip/deck.png",
    title: "Smart Home",
    category: "IOS APP",
    to: "/work/project-3",
  },
  {
    image: "/images/film-strip/subway.png",
    title: "Edge Runner",
    category: "AUTOMOTIVE",
    to: "/work/project-4",
  },
];

const Home = () => {
  return (
    <main>
      <Container>
        <HomeBanner>
          FELIPE
          <br />
          HIDALGO
        </HomeBanner>
      </Container>
      <Container className={styles["home__grid"]}>
        <CardGrid>
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

export default Home;
