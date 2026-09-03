import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopBar from "@components/TopBar/TopBar";

import Home from "@pages/Home/Home";
import Work from "@pages/Work/Work";
import About from "@pages/About/About";

import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
