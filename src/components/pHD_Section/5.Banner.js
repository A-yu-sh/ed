import React from "react";
import image from "../../assets/Graduated-Girl.jpg";

const Banner = () => {
  return (
    <div className="mt-44 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 container mx-auto">
        <div className="order-2 md:order-1 flex items-center justify-center">
          <div>
            <h1 className="text-black text-3xl md:text-4xl font-bold text-center md:text-center">
              We guarantee your PhD admission for 2024.
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-6 max-w-[50ch] text-center md:text-center">
              Aimlay provides a streamlined and efficient PhD admission process,
              tailored to support working professionals throughout their
              academic journey. Earning a PhD (Doctor of Philosophy) requires
              careful planning and organization, yet many professionals struggle
              to find the time for admission procedures, technical tasks, report
              preparation, or attending classes. Understanding the complexities
              involved, Aimlay offers comprehensive assistance at every step of
              the PhD admission process, ensuring a smooth experience from
              enrollment to the completion of your PhD program. With Aimlay's
              dedicated support, you can pursue your academic aspirations with
              ease and confidence, while maintaining your professional
              commitments.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={image}
            alt="Graduated Girl"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
