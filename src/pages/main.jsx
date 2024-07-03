import React from "react";
import ReactDOM from "react-dom/client";
import Team from "/src/pages/team/Team.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Cars from "./cars/Cars";
import Sponsors from "./sponsors/Sponsors";
import Alumni from "/src/pages/alumni/Alumni"
import Notfound from "./Notfound";
import Newssection from "./news/Newssection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/news" element={<Newssection />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
