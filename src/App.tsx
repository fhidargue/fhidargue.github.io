import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <img
          className="profile-image"
          src="/felipehidalgo.png"
          alt="Felipe Hidalgo"
        />

        <h1>Felipe Hidalgo</h1>

        <h2>Pipeline TD · Senior Software Developer</h2>

        <div className="description">
          <p>
            I'm Felipe Hidalgo, a problem solver with a background in software
            engineering, web development, and architecture.
          </p>

          <p>
            I'm passionate about using technology to solve problems and make
            other people's work a little easier. I enjoy building tools,
            automating workflows, and exploring the technology behind animation
            and VFX. I'm currently finishing my MSc in Computer Animation and
            Visual Effects at Bournemouth University, where I've been able to
            explore these interests further through pipeline development,
            OpenUSD, rendering, computer graphics, and simulation.
          </p>

          <p>
            I've had the chance to work across software engineering, tool
            development, and automation, while also exploring areas such as
            pipeline development, OpenUSD, rendering, computer graphics, and
            simulation. I'm always interested in learning more about the
            technology behind how things are made.
          </p>
        </div>

        <nav className="links" aria-label="Contact links">
          <a
            href="https://www.linkedin.com/in/fhidargue"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fhidargue"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.youtube.com/@phil_ha"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://www.youtube.com/watch?v=wVyrzA45nrs"
            target="_blank"
            rel="noreferrer"
          >
            Showreel
          </a>

          <a href="mailto:fi.ha@hotmail.com">Contact</a>
        </nav>
      </section>

      <footer>
        <p>🚧 This portfolio is currently under construction. 🚧</p>
        <span>More projects and updates coming soon.</span>
      </footer>
    </main>
  );
}

export default App;
