import React from "react";
import HeroSection from "./HeroSection";

const FinincialTools = () => {
  return (
    <section className="bg-white rounded-t-xl border border-red-500 w-full h-screen container flex flex-col">
      {/* LEFT SIDE */}
      <div className="w-1/2 p-20 border border-red-500 h-full">
        <div className="flex flex-1 flex-col gap-2 justify-center pb-30">
          <h4 className="text-xl font-bold">FININCIAL TOOLS</h4>
          <h1 className="text-4xl">STREAMLINE YOUR BANKING</h1>
        </div>
        <div className="pt-50">
          <p className="text-xl">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </p>
        </div>
      </div>

{/* RIGHT SIDE */}

    </section>
  );
};

export default FinincialTools;
