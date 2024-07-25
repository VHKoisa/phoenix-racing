import React from "react";
import ReactDOM from "react-dom/client";
import Team from "/src/pages/team/Team.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Cars from "./cars/Cars";
import Sponsors from "./sponsors/Sponsors";
import Alumni from "./alumni/alumni";
import Notfound from "./Notfound";
import Newssection from "./news/Newssection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
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
)





// export default class main extends Component {
//   render() {
//     return (
//       <React.StrictMode>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<About />} />
//       <Route path="/team" element={<Team />} />
//       <Route path="/cars" element={<Cars />} />
//       <Route path="/sponsors" element={<Sponsors />} />
//       <Route path="/alumni" element={<Alumni />} />
//       <Route path="/news" element={<Newssection />} />
//       <Route path="/*" element={<Notfound />} />
//     </Routes>
//     </BrowserRouter>
//     </React.StrictMode>
//     )
//   }
// }
