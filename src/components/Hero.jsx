import React from "react";
import useWidth from "../hooks/useWidth";
import heroImageMobile from "../assets/mobile/image-interactive.jpg";
import heroImageDesktop from "../assets/desktop/image-interactive.jpg";
import CreationGallery from "./CreationGallery";
import { mobileImages, desktopImages } from "../data";

const Hero = () => {
  const [width] = useWidth();

  return (
    <>
      <section className="mx-8 py-10 md:mx-14 md:py-10 md:pb-0 text-center md:flex md:relative">
        <img aria-hidden="true" src={width <= 768 ? heroImageMobile : heroImageDesktop} alt="Hero Image" />
        <div className="bg-white md:w-[650px] md:p-7 md:absolute md:bottom-0 md:right-0">
          <h2 className="mt-8 md:mt-0 text-4xl md:text-5xl font-josefin">THE LEADER IN INTERACTIVE VR</h2>
          <p className="mt-5 text-base md:text-xl text-veryDarkGray px-3 font-alata">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our
            award-winning creations have transformed business through digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="px-8 py-10 md:px-32 md:py-10 md:pt-24 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl md:text-4xl font-josefin">OUR CREATIONS</h2>
          <button
            className="hidden md:flex font-alata tracking-[0.30em] py-2 px-6 border-black border-[1px] hover:text-white hover:bg-black duration-300 ease-linear"
            type="button"
          >
            SEE ALL
          </button>
        </div>
        <section className="grid gap-y-4 mt-10 md:grid-cols-4 md:gap-x-4">
          <h2 className="sr-only">IMAGE GALLERY</h2>
          {width <= 768
            ? mobileImages.map((image, index) => <CreationGallery key={index} image={image.image} text={image.text} />)
            : desktopImages.map((image, index) => <CreationGallery key={index} image={image.image} text={image.text} />)}
          <button
            className="md:hidden font-alata tracking-[0.30em] py-2 px-6 border-black border-[1px] inline-block w-[150px] justify-self-center hover:text-white hover:bg-black duration-300 ease-linear"
            type="button"
          >
            SEE ALL
          </button>
        </section>
      </section>
    </>
  );
};

export default Hero;
