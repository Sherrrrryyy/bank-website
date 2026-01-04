import React from "react";
import Cards from '../components/Cards'

type ToolCard = {
  title: string;
  number: string;
  variant: 'primary' | 'secondary';
}

const FinancialSection = () => {
  const cardData: ToolCard[] = [
    { title: "Smart Savings", number: "01", variant: "primary" },
    { title: "Digital Wallet", number: "02", variant: "secondary" },
    { title: "Crypto Exchange", number: "03", variant: "primary" },
    { title: "Investment Manager", number: "04", variant: "secondary" },
  ];

  return (
    <section className="relative flex w-full border border-red-500">
      {/* LEFT SIDE: This stays pinned while scrolling */}
      <div className="sticky top-0 h-screen w-1/2 p-20 flex flex-col justify-center border border-blue-500">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-gray-500">FINANCIAL TOOLS</h4>
          <h1 className="text-5xl font-extrabold uppercase leading-tight">
            Streamline Your <br /> Banking
          </h1>
        </div>
        <div className="pt-10">
          <p className="text-xl text-gray-600">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: This contains the scrollable, stackable cards */}
      <div className="w-1/2 px-10 pb-[20vh] space-y-[30vh]">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="sticky" 
            style={{ top: `${10 + index * 2}rem` }} // Creates the slight offset overlap
          >
            <Cards
              variant={card.variant}
              title={card.title}
              paragraph="Briefly describe the types of services offered and highlight any special benefits or features."
              number={card.number}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialSection;