import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-[min(100%,1280px)] mx-auto px-8 pt-14 pb-10 md:px-32 md:py-10 md:grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:items-start">
          <img className="w-32" src={logo} alt="logo" />
          <nav aria-label="Navigation For Footer" className="mt-7">
            <ul className="text-white md:flex">
              <li className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer">
                <a className="underLine underLineHover" aria-label="Go To About Page" href="#">
                  About
                </a>
              </li>
              <li className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer">
                <a className="underLine underLineHover" aria-label="Go To Careers Page" href="#">
                  Careers
                </a>
              </li>
              <li className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer">
                <a className="underLine underLineHover" aria-label="Go To Events Page" href="#">
                  Events
                </a>
              </li>
              <li className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer">
                <a className="underLine underLineHover" aria-label="Go To Products Page" href="#">
                  Products
                </a>
              </li>
              <li className="font-josefin mb-3 md:mb-0 md:mr-3 text-center font-bold cursor-pointer">
                <a className="underLine underLineHover" aria-label="Go To Support Page" href="#">
                  Support
                </a>
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
      </div>
    </footer>
  );
};

export default Footer;
