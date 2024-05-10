import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./hamburger.css";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-white">
        About
      </NavLink>
      <NavLink to="/team" className="text-white">
        Team
      </NavLink>
      <NavLink to="/cars" className="text-white">
        Cars
      </NavLink>
    </>
  );
};

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-950 sticky top-0 z-30 mx-auto px-2 w-full items-center justify-between flex">
        <div className="flex items-center my-2 mx-1">
          <Logo />
          <div className="mx-5 text-white text-2xl lg:text-3xl font-serif">
            PHOENIX RACING
          </div>
        </div>

        <nav className="flex lg:w-1/4">
          <div className="hidden w-full justify-around lg:flex  border-2 border-white rounded-2xl py-2">
            <NavLinks />
          </div>
          <div className="lg:hidden ">
            <label htmlFor="burger" className="burger">
              <input type="checkbox" id="burger" onChange={()=> {burger.checked?setOpen(true):setOpen(false)} } />
              <span></span>
              <span></span>
              <span></span>
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
        <div className="bg-blue-950 flex basis-full py-4 justify-around border-2 border-white">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Header;
