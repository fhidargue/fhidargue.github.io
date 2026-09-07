import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import TopBar from "@components/TopBar/TopBar";

import Home from "@pages/Home/Home";
import Work from "@pages/Work/Work";
import About from "@pages/About/About";

import "./styles/main.scss";

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <TopBar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
