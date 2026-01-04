import React from "react";
import Image from "next/image";
import HeroImage from "../public/Hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="absolute top-0 h-screen w-screen">
        <Image src={HeroImage} alt="HeroImage" />
        <div className="absolute top-60 left-30 border border-red-200 bold-">
          <h1 className="text-white text-6xl">FUTURE-READY, SMART BANKING</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
