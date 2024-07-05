import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./hamburger.css";
import ScrollToTop from "./ScrollToTop";

const NavLinks = () => {
  return (
    <>
      <div className="h-10 border-b-2 border-black lg:border-0 w-full flex justify-center items-center">
        <NavLink to="/" className=" uppercase font-bold">
          About
        </NavLink>
      </div>
      <div className="h-10 border-b-2 border-black lg:border-0 w-full flex justify-center items-center">
        <NavLink to="/team" className=" uppercase font-bold">
          Team
        </NavLink>
      </div>
      <div className="h-10 border-b-2 border-black lg:border-0 w-full flex justify-center items-center">
        <NavLink to="/cars" className=" uppercase font-bold">
          Cars
        </NavLink>
      </div>
      <div className="h-10 border-b-2 border-black lg:border-0 w-full flex justify-center items-center">
        <NavLink to="/sponsors" className=" uppercase font-bold">
          Sponsors
        </NavLink>
      </div>
      <div className="h-10 border-b-2 border-black lg:border-0 w-full flex justify-center items-center">
        <NavLink to="/alumni" className=" uppercase font-bold">
          Alumni
        </NavLink>
      </div>
      <div className="h-10  w-full flex justify-center items-center">
        <NavLink to="/news" className=" uppercase font-bold">
          News
        </NavLink>
      </div>
    </>
  );
};

function Header({textColor= "text-blue-800", borderColor= "border-black"}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <div
        className={`${textColor} fixed top-0 z-30 mx-auto px-2 w-full items-center justify-between flex shadow-md`}
        id="navbar"
      >
        <div className="flex items-center my-2 mx-1">
        <NavLink to="/">
          <img
            src="/logo.png"
            className="w-16 h-16"
            alt="Logo"
          />
          </NavLink>

          <div className="mx-5  text-2xl lg:text-3xl  ">
          <NavLink to="/">
            SAE PHOENIX RACING
        </NavLink>
          </div>
        </div>
        <nav className="flex lg:w-1/2  ">
          <div className={`${borderColor} hidden w-full justify-around lg:flex  border-2 rounded-2xl py-2"`}>
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
        <div
          className="bg-white top-20 sticky z-30 basis-full justify- border-2 border-blue-950"
          id="navbar"
        >
          {/*Static top margin*/}
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Header;
