import React from "react";
import ReactDOM from "react-dom/client";
import Team from "./Team.jsx";
import About from './About.jsx'
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <About/>
    </BrowserRouter>
  </React.StrictMode>
);
