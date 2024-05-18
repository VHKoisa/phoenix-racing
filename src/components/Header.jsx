import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./hamburger.css";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-blue-950">
        About
      </NavLink>
      <NavLink to="/team" className="text-blue-950">
        Team
      </NavLink>
      <NavLink to="/cars" className="text-blue-950">
        Cars
      </NavLink>
    </>
  );
};

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="bg-white sticky top-0 z-30 mx-auto px-2 w-full items-center justify-between flex border-b-blue-950 border-b-2"
        id="navbar"
      >
        <div className="flex items-center my-2 mx-1">
          <img src="/src/assets/logo.png" className="w-16 h-16" alt="Logo" />
          <div className="mx-5 text-blue-950 text-2xl lg:text-3xl font-serif">
            PHOENIX RACING
          </div>
        </div>

        <nav className="flex lg:w-1/4">
          <div className="hidden w-full justify-around lg:flex  border-2 border-blue-950 rounded-2xl py-2">
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
