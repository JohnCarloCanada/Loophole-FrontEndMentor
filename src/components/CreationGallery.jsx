import React from "react";

const CreationGallery = ({ image, text }) => {
  return (
    <div className="relative group cursor-pointer">
      <img aria-hidden="true" className="brightness-[.7] group-hover:contrast-[.3] duration-300 ease-out" src={image} alt="Gallery" />
      <p className="absolute w-32 bottom-6 left-5 text-2xl md:text-xl text-white group-hover:text-black font-josefin text-left">{text}</p>
    </div>
  );
};

export default CreationGallery;
