import Container from "@components/Container/Container";
import FilmStrip from "@components/FilmStrip/FilmStrip";
import HomeBanner from "@components/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <main>
      <Container>
        <HomeBanner>
          FELIPE
          <br />
          HIDALGO
        </HomeBanner>
        <FilmStrip
          images={[
            "/images/film-strip/subway.png",
            "/images/film-strip/desk.png",
            "/images/film-strip/stairs.png",
            "/images/film-strip/deck.png",
            "/images/film-strip/pc.png",
          ]}
          size="lg"
          isFullWidth
        />
      </Container>
    </main>
  );
};

export default Home;
