import FilmStrip from "@components/FilmStrip/FilmStrip";
import Container from "@components/Container/Container";

const Home = () => {
  return (
    <main>
      <Container>
        <h1>Home</h1>
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
