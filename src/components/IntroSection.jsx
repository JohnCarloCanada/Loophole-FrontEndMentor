import React from "react";
import Intro from "./Intro";
import Nav from "./Nav";

const IntroSection = () => {
  return (
    <header className="w-full min-h-screen bg-[url('./assets/mobile/image-hero.jpg')] bg-no-repeat bg-cover bg-center md:bg-[url('./assets/desktop/image-hero.jpg')]">
      <div className="w-[min(100%,1280px)] mx-auto">
        <Nav />
        <Intro />
      </div>
    </header>
  );
};

export default IntroSection;
