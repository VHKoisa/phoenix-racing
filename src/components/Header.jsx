import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./hamburger.css";
import ScrollToTop from "./ScrollToTop";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-blue-800 uppercase font-bold">
        About
      </NavLink>
      <NavLink to="/team" className="text-blue-800 uppercase font-bold">
        Team
      </NavLink>
      <NavLink to="/cars" className="text-blue-800 uppercase font-bold">
        Cars
      </NavLink>
      <NavLink to="/sponsors" className="text-blue-800 uppercase font-bold">
        Sponsors
      </NavLink>
      <NavLink to="/alumni" className="text-blue-800 uppercase font-bold">
        Alumni
      </NavLink>
    </>
  );
};

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <div
        className="bg-white fixed top-0 z-30 mx-auto px-2 w-full items-center justify-between flex shadow-md"
        id="navbar"
      >
        <div className="flex items-center my-2 mx-1">
          <img src={import.meta.env.BASE_URL +"/logo.png"} className="w-16 h-16" alt="Logo" />
          <div className="mx-5 text-blue-800 text-2xl lg:text-3xl  ">
            SAE PHOENIX RACING
          </div>
        </div>

        <nav className="flex lg:w-1/2  ">
          <div className="hidden w-full justify-around lg:flex  border-2 border-slate-600 rounded-2xl py-2">
            <NavLinks />
          </div>
          <div className="lg:hidden ">
            <label htmlFor="burger" className="burger">
              <input
                type="checkbox"
                id="burger"
                onChange={() => {
                  burger.checked ? setOpen(true) : setOpen(false);
                }}
              />
              <span className="bg-blue-950"></span>
              <span className="bg-blue-950"></span>
              <span className="bg-blue-950"></span>
            </label>
          </div>
        </nav>

        {addEventListener("resize", () => {
          if (window.innerWidth > 1024) {
            setOpen(false);
            burger.checked = false;
          }
        })}
      </div>
      {isOpen && (
        <div className="bg-white top-20 sticky z-30 flex basis-full py-4 justify-around border-2 border-blue-950">
          {/*Static top margin*/}
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Header;
