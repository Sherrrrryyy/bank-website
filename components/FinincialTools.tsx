import React from "react";
import Cards from '../components/Cards'

type ToolCard = {
  title: string;
  number: string;
  variant: 'primary' | 'secondary';
}

const FinancialSection = () => {
  const cardData: ToolCard[] = [
    { title: "Smart Savings", number: "01", variant: "primary", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Digital Wallet", number: "02", variant: "secondary", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Crypto Exchange", number: "03", variant: "primary", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Investment Manager", number: "04", variant: "secondary", paragraph: "Grow your wealth with our investment management tools tailored to your financial goals." },
  ];

  return (
    <section className="relative flex w-full">
      {/* LEFT SIDE: This stays pinned while scrolling */}
      <div className="sticky top-0 h-screen w-1/2 p-20 flex flex-col justify-center">
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
      <div className="w-1/2 p-20 space-y-[30vh]">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="sticky" 
            style={{ top: `${10 + index * 2}rem` }} // Creates the slight offset overlap
          >
            <Cards
              variant={card.variant}
              title={card.title}
              paragraph={card.paragraph}
              number={card.number}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialSection;