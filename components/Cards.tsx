import React from "react";

type CradsProps = {
  variant: "primary" | "secondary";
  title: string;
  paragraph: string;
  number: string;
};

const Cards = ({ variant, title, paragraph, number }: CradsProps) => {
  return (
    <div className="sticky top-10 h-[400px] w-full rounded-3xl bg-slate-800 p-8 shadow-2xl transition-transform duration-300">
      <span className="text-gray-400 text-2xl font-mono">{number}</span>
      <h2 className="text-white text-4xl font-bold mt-10">{title}</h2>
      <p className="text-gray-300 mt-4 max-w-md">{paragraph}</p>
    </div>
  );
};

export default Cards;
