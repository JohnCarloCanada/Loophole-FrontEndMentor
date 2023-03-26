import React from "react";
import Intro from "./Intro";
import Nav from "./Nav";

const IntroSection = () => {
  return (
    <header className="w-full min-h-screen bg-[url('./assets/mobile/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-[url('./assets/desktop/image-hero.jpg')]">
      <Nav />
      <Intro />
    </header>
  );
};

export default IntroSection;
