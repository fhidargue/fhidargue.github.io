import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import TopBar from "@components/TopBar/TopBar";

import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Work from "@pages/Work/Work";
import TechStack from "@pages/TechStack/TechStack";
import Contact from "@pages/Contact/Contact";
import NotFound from "@pages/NotFound/NotFound";

import DccTranslation from "@pages/Projects/DccTranslation/DccTranslation";
import WavefrontPathtracer from "@pages/Projects/WavefrontPathtracer/WavefrontPathtracer";
import MocapRetargeting from "@pages/Projects/MocapRetargeting/MocapRetargeting";
import SnowGlobeSim from "@pages/Projects/SnowGlobeSim.tsx/SnowGlobeSim";
import HairSim from "@pages/Projects/HairSim/HairSim";
import Renderman from "@pages/Projects/Renderman/Renderman";
import ImpStairs from "@pages/Projects/ImpStairs/ImpStairs";
import HdaGarden from "@pages/Projects/HdaGarden/HdaGarden";

import useLocale from "@hooks/useLocale";

import { ROUTES } from "@constants/routes";

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
      path: ROUTES.PROJECTS.SNOWGLOBE_SIM,
      element: <SnowGlobeSim />,
    },
    {
      path: ROUTES.PROJECTS.HAIR_SIM,
      element: <HairSim />,
    },
    {
      path: ROUTES.PROJECTS.RENDERMAN_API,
      element: <Renderman />,
    },
    {
      path: ROUTES.PROJECTS.HDA_GARDEN,
      element: <HdaGarden />,
    },
    {
      path: ROUTES.PROJECTS.IMP_STAIRS,
      element: <ImpStairs />,
    },
  ];

  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
