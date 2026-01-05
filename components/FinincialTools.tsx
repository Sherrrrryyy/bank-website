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
    { title: "Investment Manager", number: "04", variant: "secondary", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
  ];

  return (
  <section className="relative flex flex-col md:flex-row w-full">
  {/* LEFT SIDE: Becomes a header on mobile, pinned on desktop */}
  <div className="sticky top-0 z-10 w-full bg-white md:h-screen md:w-1/2 p-6 sm:p-10 md:p-20 flex flex-col justify-center">
    <div className="flex flex-col gap-2">
      <h4 className="text-sm md:text-xl font-bold text-gray-500">FINANCIAL TOOLS</h4>
      <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
        Streamline Your <br className="hidden md:block" /> Banking
      </h1>
    </div>
    <div className="pt-4 md:pt-10">
      <p className="text-lg md:text-xl text-gray-600">
        This is the space to introduce the Services section.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE: Full width on mobile, scrolling cards */}
  <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-20 space-y-[10vh] md:space-y-[30vh]">
    {cardData.map((card, index) => (
      <div 
        key={index} 
        className="sticky" 
        // Logic: On mobile, we reduce the top offset so cards don't start too low
        style={{ top: `calc(20% + ${index * 1.5}rem)` }} 
      >
        <Cards
          variant={card.variant}
          title={card.title}
          paragraph={card.paragraph}
          number={card.number}
        />
      </div>
    ))}
    {/* Extra bottom padding to ensure the last card can be seen fully */}
    <div className="h-[20vh] md:hidden" />
  </div>
</section>
  );
};

export default FinancialSection;