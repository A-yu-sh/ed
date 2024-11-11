import React from "react";
import BackGround_Image from "../../assets/Bg.jpg";
import Admission_Content from "./2.Admission_Content";
import Form from "./Form";
import Choose_Company from "./3.Choose_Company";
import Features_and_Services from "./4.Features_and_Services";
import Banner from "./5.Banner";
import Post_Banner from "./6.Post_Banner";
import Image_Banner from "./7.Image_Banner";
import { FaAccusoft } from "react-icons/fa";
import Accordion from "./8.Accordion";
import "../../App.css";
import Footer from "../Footer";
import Header from "../Header";
import UnderSlider from "../UnderHeroSlider";
import PHDUnderSlider from "./SlideShow";

const Intro = () => {
  return (
    <div className="mt-[5.5rem]">
      <div>
        <div className="absolute inset-0 h-[131%] bg-gradient-to-r from-[#00471b] to-[#00b96b] opacity-70"></div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-auto">
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-white font-bold mx-8 md:mx-44 mt-10 md:mt-40 text-xl md:text-3xl lg:text-4xl text-center md:text-left max-w-[26ch]">
                    PhD Admission 2024 for Working Professionals is Effortless
                    with Aimlay
                  </h1>
                  <p className="text-white text-sm md:text-base lg:text-lg mx-8 md:mx-44 mt-5 md:mt-8 leading-6 md:leading-7 lg:leading-8 text-center md:text-left max-w-[50ch]">
                    Leveraging over 14 years of experience, Aimlay provides
                    essential support, effortlessly guiding you from securing
                    your PhD admission in 2024 to completing your doctorate, all
                    while balancing your work commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full md:w-auto">
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/* SVG Background Curve */}
        <div className="hidden md:block absolute -bottom-40 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative mt-96 block w-[calc(100%+1.3px)] h-[150px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M0,0C150,100,350,100,500,50C650,0,850,0,1000,50C1150,100,1350,100,1500,50L1500,120L0,120Z"
              className="fill-current mt-96 text-white"></path>
          </svg>
        </div>
      </div>
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

export default Intro;
