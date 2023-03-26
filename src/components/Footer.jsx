import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black px-8 pt-14 pb-10 md:px-14 md:py-10 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center justify-center md:items-start">
        <img className="w-32" src={logo} alt="logo" />
        <nav className="mt-7">
          <ul className="text-white md:flex">
            <li
              aria-label="Go To About Page"
              className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer underLine underLineHover"
            >
              About
            </li>
            <li
              aria-label="Go To Careers Page"
              className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer underLine underLineHover"
            >
              Careers
            </li>
            <li
              aria-label="Go To Events Page"
              className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer underLine underLineHover"
            >
              Events
            </li>
            <li
              aria-label="Go To Products Page"
              className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer underLine underLineHover"
            >
              Products
            </li>
            <li
              aria-label="Go To Support Page"
              className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer underLine underLineHover"
            >
              Support
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 md:items-end">
        <div className="flex justify-between gap-x-5">
          <img aria-label="Go To Facebook" className="hover:rotate-12 cursor-pointer duration-300 ease-out" src={facebook} alt="Facebook Icon" />
          <img aria-label="Go To Twitter" className="hover:rotate-12 cursor-pointer duration-300 ease-out" src={twitter} alt="Twitter Icon" />
          <img aria-label="Go To Pinterest" className="hover:rotate-12 cursor-pointer duration-300 ease-out" src={pinterest} alt="Pinterest Icon" />
          <img aria-label="Go To Instagram" className="hover:rotate-12 cursor-pointer duration-300 ease-out" src={instagram} alt="Instagram Icon" />
        </div>
        <p className="text-veryDarkGray mt-5 font-alata text-base">&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
