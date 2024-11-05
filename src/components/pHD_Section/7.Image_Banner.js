import React from "react";
import image from "../../assets/Banner.png";

const Image_Banner = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <h1 className="text-black text-3xl font-bold text-center sm:text-center md:text-center lg:text-center md:m-auto sm:m-auto lg:m-auto">
          Your PhD Admission 2024 Journey
        </h1>
      </div>
      <div>
        <img
          src={image}
          alt="Banner"
          className="mt-10 w-full h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default Image_Banner;
