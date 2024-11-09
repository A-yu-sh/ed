import React, { useState } from "react";
import data from "./Accordion_Content"; // Ensure this contains the necessary data

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-4 hover:bg-gray-200"
        onClick={toggleAccordion}>
        <h3 className="text-base sm:text-sm font-semibold text-black">
          {title}
        </h3>
        <span className="text-black">{isOpen ? "-" : "+"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="py-2 px-4 text-gray-700">
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-black text-3xl sm:text-2xl font-bold text-center">
          FAQ's on PhD (Doctor of Philosophy)
        </h1>
      </div>
      <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-0">
        {data.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
