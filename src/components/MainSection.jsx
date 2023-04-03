import React from "react";
import Hero from "./Hero";

const MainSection = () => {
  return (
    <main className="w-full bg-white">
      <div className="w-[min(100%,1280px)] mx-auto">
        <Hero />
      </div>
    </main>
  );
};

export default MainSection;
