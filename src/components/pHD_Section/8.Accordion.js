import React, { useState } from "react";
import data from "./Accordion_Content"; // Ensure this contains the necessary data

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 ">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-4  hover:bg-gray-200"
        onClick={toggleAccordion}>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <span className="text-black">{isOpen ? "-" : "+"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="py-2 px-4 text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <h1 className="text-black text-3xl font-bold text-center sm:text-center md:text-center lg:text-center md:m-auto sm:m-auto lg:m-auto">
          FAQ’s on PhD (Doctor of Philosophy)
        </h1>
      </div>
      <div className="max-w-2xl mx-auto mt-10">
        {data.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
