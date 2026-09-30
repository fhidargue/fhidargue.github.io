import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import TopBar from "@components/TopBar/TopBar";

import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Work from "@pages/Work/Work";
import TechStack from "@pages/TechStack/TechStack";
import Contact from "@pages/Contact/Contact";
import NotFound from "@pages/NotFound/NotFound";

import Project from "@pages/Project/Project";
import DccTranslation from "@pages/Projects/DccTranslation/DccTranslation";
import WavefrontPathtracer from "@pages/Projects/WavefrontPathtracer/WavefrontPathtracer";
import MocapRetargeting from "@pages/Projects/MocapRetargeting/MocapRetargeting";

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

  const PROJECT_ROUTES = [
    {
      path: ROUTES.PROJECTS.DCC_TRANSLATION,
      element: <DccTranslation />,
    },
    {
      path: ROUTES.PROJECTS.WAVEFRONT_PATHTRACER,
      element: <WavefrontPathtracer />,
    },
    {
      path: ROUTES.PROJECTS.MOCAP_RETARGET,
      element: <MocapRetargeting />,
    },
    {
      path: ROUTES.PROJECTS.SNOWBALL_SIM,
      element: <Project />,
    },
    {
      path: ROUTES.PROJECTS.HAIR_SIM,
      element: <Project />,
    },
    {
      path: ROUTES.PROJECTS.RENDERMAN_API,
      element: <Project />,
    },
    {
      path: ROUTES.PROJECTS.HDA_GARDEN,
      element: <Project />,
    },
    {
      path: ROUTES.PROJECTS.IMP_STAIRS,
      element: <Project />,
    },
  ];

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
            <Route path={ROUTES.STACK} element={<TechStack />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            {PROJECT_ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
