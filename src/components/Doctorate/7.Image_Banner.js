import React from "react";
import image from "../../assets/Banner.png";

const ImageBanner = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-black text-3xl font-bold text-center">
          Your PhD Admission 2024 Journey
        </h1>
      </div>
      <div className="mt-10">
        <img
          src={image}
          alt="Banner"
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
