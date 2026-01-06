import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="w-full bg-indigo-300 h-full sticky top-0">
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 pt-10">
        <div className="w-full md:w-1/2 p-15">
          <h1 className="text-4xl font-semibold">Ready to get started?</h1>
        </div>
        <div className="p-15 w-full md:w-1/2">
          <p className="font-semibold pb-10">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered.
          </p>
          <Button type="button" title="Contact Us" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
