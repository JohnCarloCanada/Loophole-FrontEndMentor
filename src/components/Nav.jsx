import React, { useState } from "react";
import logo from "../assets/logo.svg";
import openMenu from "../assets/icon-hamburger.svg";
import closeMenu from "../assets/icon-close.svg";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleMenu = () => setNav(nav === false ? true : false);
  return (
    <>
      <nav aria-label="Main Navigation" className="flex px-8 py-10 md:px-14 md:py-10 justify-between items-center font-alata">
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex">
          <li className="ml-10 text-white">
            <a aria-label="Go To About Page" className="underLine underLineHover" href="#">
              About
            </a>
          </li>
          <li className="ml-10 text-white">
            <a aria-label="Go To Careers Page" className="underLine underLineHover" href="#">
              Careers
            </a>
          </li>
          <li className="ml-10 text-white">
            <a aria-label="Go To Events Page" className="underLine underLineHover" href="#">
              Events
            </a>
          </li>
          <li className="ml-10 text-white">
            <a aria-label="Go To Products Page" className="underLine underLineHover" href="#">
              Products
            </a>
          </li>
          <li className="ml-10 text-white">
            <a aria-label="Go To Support Page" className="underLine underLineHover" href="#">
              Support
            </a>
          </li>
        </ul>
        <img onClick={handleMenu} className="cursor-pointer md:hidden" src={openMenu} alt="mobile icon" />
      </nav>
      {/* Mobile Menu */}
      <nav className={nav ? "openMenu" : "closeMenu"}>
        <div className="flex justify-between items-center">
          <img className="w-[150px]" src={logo} alt="logo" />
          <img onClick={handleMenu} className="w-6 h-6 cursor-pointer" src={closeMenu} alt="Close Menu" />
        </div>
        <ul className="text-white mt-32">
          <li className="text-2xl font-josefin uppercase mb-7">
            <a aria-label="Go To About Page" className="inline-block underLine underLineHover before:bottom-[-35px]" href="#">
              About
            </a>
          </li>
          <li className="text-2xl font-josefin uppercase mb-7">
            <a aria-label="Go To Careers Page" className="inline-block underLine underLineHover before:bottom-[-35px]" href="#">
              Careers
            </a>
          </li>
          <li className="text-2xl font-josefin uppercase mb-7">
            <a aria-label="Go To Events Page" className="inline-block underLine underLineHover before:bottom-[-35px]" href="#">
              Events
            </a>
          </li>
          <li className="text-2xl font-josefin uppercase mb-7">
            <a aria-label="Go To Products Page" className="inline-block underLine underLineHover before:bottom-[-35px]" href="#">
              Products
            </a>
          </li>
          <li className="text-2xl font-josefin uppercase mb-7">
            <a aria-label="Go To Support Page" className="inline-block underLine underLineHover before:bottom-[-35px]" href="#">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
