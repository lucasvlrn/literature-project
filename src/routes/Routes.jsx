import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home.jsx";
import AntiguidadeMov from "./antiguidade";
import ArcadismoMov from "./arcadismo";
import BarrocoMov from "./barroco";
import ClassicismoMov from "./classicismo";
import HumanismoMov from "./humanismo";
import RomantismoMov from "./romantismo";
import TrovadorismoMov from "./trovadorismo";

function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/antiguidade-classica"
          element={<AntiguidadeMov />}
        ></Route>
        <Route path="/trovadorismo" element={<TrovadorismoMov />}></Route>
        <Route path="/humanismo" element={<HumanismoMov />}></Route>
        <Route path="/classicismo" element={<ClassicismoMov />}></Route>
        <Route path="/barroco" element={<BarrocoMov />}></Route>
        <Route path="/arcadismo" element={<ArcadismoMov />}></Route>
        <Route path="/romantismo" element={<RomantismoMov />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
