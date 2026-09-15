import HomeBanner from "@components/HomeBanner/HomeBanner";
import Container from "@components/Container/Container";
import TechStackGrid from "@components/TechStackGrid/TechStackGrid";

const TechStack = () => {
  return (
    <main>
      <Container>
        <HomeBanner label="TOOLS I USE EVERYDAY">
          TECH
          <br />
          STACK
        </HomeBanner>
      </Container>
      <Container>
        <TechStackGrid />
      </Container>
    </main>
  );
};

export default TechStack;
