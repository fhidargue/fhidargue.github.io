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

import useLocale from "@hooks/useLocale";

import { ROUTES } from "@constants/routes";

import "./styles/main.scss";
import "./i18n/i18n";

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
  useLocale();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  useEffect(() => {
    const updateFavicon = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const favicon =
        document.querySelector<HTMLLinkElement>('link[rel="icon"]');

      if (!favicon) {
        return;
      }

      favicon.href =
        theme === "light" ? "/logos/star-black.svg" : "/logos/star-white.svg";
    };

    updateFavicon();

    const observer = new MutationObserver(updateFavicon);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="app">
        <TopBar />
        <div className="app__content">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.WORK} element={<Work />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PLAYGROUND} element={<Playground />} />
            <Route path={ROUTES.STACK} element={<TechStack />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
