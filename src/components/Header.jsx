import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <div className="bg-blue-950 fixed flex-wrap top-0 z-[1] mx-auto w-full items-center justify-between flex">
        <div className="flex items-center my-2 mx-1">
          <Logo />
          <div className="mx-5 text-white text-3xl font-serif">PHOENIX RACING</div>
        </div>
        <Nav />
      </div>
    </>
  );
}

export default Header;
