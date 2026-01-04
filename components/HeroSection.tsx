import React from "react";
import Image from "next/image";
import HeroImage from "../public/Hero.jpg";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center md:items-start md:text-left md:px-10">
        <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          FUTURE-READY,
          <span className="block">SMART BANKINGS</span>
        </h1>

        <p className="mt-4 text-white/80 max-w-xl text-sm sm:text-base md:text-lg">
          This is a space to welcome visitors to the site. Grab their
          attention with copy that clearly states what the site is about.
        </p>

        <div className="mt-8 w-full flex items-center justify-center md:justify-start">
          <Button type="submit" title="Get Started" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
