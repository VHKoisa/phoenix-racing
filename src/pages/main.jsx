import React from "react";
import ReactDOM from "react-dom/client";
import Team from "/src/pages/team/Team.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Sponsors from "/src/pages/Sponsors/Sponsors.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
