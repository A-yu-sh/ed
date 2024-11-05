import React from "react";
import image from "../../assets/Graduated-Girl.jpg";

const Banner = () => {
  return (
    <div className="mt-44">
      <div className="grid grid-cols-2 bg-gray-200">
        <div className="">
          <img src={image} className="object-cover h-[80vh] w-[100vh]" />
        </div>
        <div>
          <div className="mt-32 flex justify-start">
            <h1 className="text-black text-2xl font-bold text-center sm:text-center md:text-center lg:text-center md:m-auto sm:m-auto lg:m-auto">
              We guarantee your PhD admission for 2024.
            </h1>
          </div>
          <div className="flex justify-start p-10 mt-10 text-lg leading-7">
            <p className="max-w-[110ch] text-center sm:text-center md:text-center lg:text-center">
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
      </div>
    </div>
  );
};

export default Banner;
