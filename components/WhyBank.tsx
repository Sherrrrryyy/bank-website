import Image from "next/image";
import React from "react";
import Why from '../public/Why.jpg'

type AboutPoints = {
  number: string;
  title: string;
  para: string;
};

const WhyBank = () => {
  const points: AboutPoints[] = [
    {
      title: "Customer-Centric Focus",
      para: "To provide innovative financial solutions that empower individuals and businesses.",
      number: "01",
    },
    {
      title: "Commitment to Security",
      para: "To be the leading financial institution in the region, known for trust and excellence.",
      number: "02",
    },
    {
      title: "Transparent and Fair Practices",
      para: "Integrity, customer focus, innovation, and sustainability.",
      number: "03",
    },
  ];

  return (
    <>
      <div className="flex w-full pt-30">
        <div className="w-1/2 h-auto bg-gray-300 px-15 pt-30">
          <h1 className="font-bold text-xl pb-5">WHY LUMINU?</h1>
          <h1 className="font-bold text-4xl pb-50">
            Your Privacy is our priority
          </h1>
          <p className="text-xl py-20">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </p>
        <div>
          {points.map((point, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-5">{point.number}</span>
                  <h2 className="font-bold text-xl">{point.title}</h2>
                </div>
                <p className="text-lg py-5">{point.para}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div>
          <Image className="h-full" src={Why} alt="WHY" />
        </div>
      </div>
    </>
  );
};

export default WhyBank;
