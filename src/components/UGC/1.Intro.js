import React from "react";
import Admission_Content from "./2.Admission_Content";
import Form from "./Form";
import Choose_Company from "./3.Choose_Company";
import Features_and_Services from "./4.Features_and_Services";
import Banner from "./5.Banner";
import Post_Banner from "./6.Post_Banner";
import Image_Banner from "./7.Image_Banner";
import Accordion from "./8.Accordion";
import "../../App.css";
import Footer from "../Footer";
import Header from "../Header";
import UnderSlider from "../UnderHeroSlider";
import PHDUnderSlider from "./SlideShow";

const UGCIntro = () => {
  return (
    <div className="mt-[5.5rem]">
      {/* Background with Gradient */}
      <div className="relative bg-gradient-to-b from-[#00b96b] to-[#00471b]">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
          {/* Left Content */}
          <div className="flex flex-col justify-start md:justify-start items-center md:items-start px-6 md:px-16 lg:px-24 text-center md:text-left space-y-6 pt-10 md:pt-16 lg:pt-20">
            <h1 className="text-white font-bold text-xl md:text-3xl lg:text-4xl max-w-[26ch]">
              PhD Admission 2024 for Working Professionals is Effortless with
              Aimlay
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 max-w-[50ch]">
              Leveraging over 14 years of experience, Aimlay provides essential
              support, effortlessly guiding you from securing your PhD admission
              in 2024 to completing your doctorate, all while balancing your
              work commitments.
            </p>
          </div>

          {/* Right Content (Form) */}
          <div className="flex justify-center md:justify-start px-6 md:px-16 lg:px-24 mt-6 md:mt-0">
            <div className="w-full md:w-auto">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <PHDUnderSlider />
      <Admission_Content />
      <Choose_Company />
      <Features_and_Services />
      <Banner />
      <Post_Banner />
      <Image_Banner />
      <Accordion />
    </div>
  );
};

export default UGCIntro;
