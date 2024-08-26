import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}
const hero: React.FC<HeroProps> = ({ imgData, imgAlt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={imgData} alt={imgAlt} fill objectFit="cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl ">{title}</h1>
      </div>
    </div>
  );
};

export default hero;
