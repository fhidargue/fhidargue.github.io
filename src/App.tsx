import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import TopBar from "@components/TopBar/TopBar";

import Home from "@pages/Home/Home";
import Work from "@pages/Work/Work";
import About from "@pages/About/About";
import Playground from "@pages/Playground/Playground";
import TechStack from "@pages/TechStack/TechStack";
import Contact from "@pages/Contact/Contact";
import NotFound from "@pages/NotFound/NotFound";

import "./styles/main.scss";

const ScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.style.scrollBehavior = "";
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="app">
        <TopBar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/stack" element={<TechStack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
