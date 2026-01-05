import React from "react";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="w-full h-full p-10 ">
      <div className="w-full">
        <h3 className="font-bold pb-10">ABOUT US</h3>
        <p className="text-4xl pb-10">
          This is a space to share more about the business: who's behind it,
          what it does and what this site has to offer. It’s an opportunity to
          tell the story behind the business or describe a special service or
          product it offers.
        </p>
        <Button type="button" title="Read More" variant="secondary" />
      </div>
    </section>
  );
};

export default AboutUs;
