import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuLogo from "./MenuLogo";
import X from "./XLogo";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/about" className="text-white">About</NavLink>
      <NavLink to="/team" className="text-white">Team</NavLink>
      <NavLink to="/cars" className="text-white">Cars</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex w-1/4">
        
      <div className="hidden w-full justify-between md:flex  border-2 border-white rounded-2xl px-8 py-2">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={toggle}>{isOpen ? <X /> : <MenuLogo />}</button>
      </div>
    </nav>
    {isOpen && (
        <div className="flex basis-full flex-col items-center">
            <NavLinks />
        </div>
    )}
    </>
  );
};
export default Nav;
