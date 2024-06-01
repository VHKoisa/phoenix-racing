import React from "react";
import ReactDOM from "react-dom/client";
import Team from "/src/pages/team/Team.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
// <<<<<<< HEAD
import Sponsors from "/src/pages/Sponsors/Sponsors.jsx";
// =======
import Cars from "./cars/Cars";
import Sponsors from "./sponsors/Sponsors";
// >>>>>>> cfcbdbe746be32a037f4236957d2c5e25feecaa5

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
{/* <<<<<<< HEAD */}
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/" element={<About />} />
{/* ======= */}
        <Route path="/cars" element={<Cars />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* <Route path="/" element={<About />} /> */}
{/* >>>>>>> cfcbdbe746be32a037f4236957d2c5e25feecaa5 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
