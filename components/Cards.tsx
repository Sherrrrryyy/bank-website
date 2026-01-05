import React from "react";





type CradsProps = {
  variant: "primary" | "secondary";
  title: string;
  paragraph: string;
  number: string;
};

const Cards = ({ variant, title, paragraph, number }: CradsProps) => {
  return (
    <div className={`${variant === 'primary' ? 'bg-black text-white'  : 'bg-purple-300 text-black'} sticky top-10 h-[400px] w-full rounded-3xl p-8 shadow-2xl transition-transform duration-300`}>
      <span className=" text-2xl font-mono">{number}</span>
      <h2 className=" text-4xl font-bold mt-10">{title}</h2>
      <p className=" mt-4 max-w-md">{paragraph}</p>
    </div>
  );
};

export default Cards;
