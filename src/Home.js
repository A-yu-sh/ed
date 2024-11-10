import React, { useState } from "react";
import "./Global.css";
import Form from "./components/Form";
import SubjectBoxes from "./components/Degree";
import UniversityGrid from "./components/Universitygrid";
import logo from "./assets/TopLogo.png";

import CouncelExpert from "./components/CouncelExpert";
import TalkToExperts from "./components/TalkToExperts";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LogoBar from "./components/LogoBar";
import Footer from "./components/Footer";
import Course from "./components/Course";
import University from "./components/University";
import Compare from "./components/Compare";
import Tlogo from "./assets/Tlogo.png";
import Tlogo2 from "./assets/Tlogo2.png";
import Tlogo3 from "./assets/Tlogo3.png";
import Tlogo4 from "./assets/Tlogo4.png";
import Phd from "./components/Phd";
import B1logo from "../src/assets/Banner5.png";
import B2logo from "../src/assets/Banner6 new.png";
import C1logo from "../src/assets/BannerSlide1.png";
import DUlogo from "../src/assets/BannerSlide2.png";

import Ignoulogoo from "../src/assets/BannerSlide4.png";
import Icon from "../src/assets/s4-removebg-preview.png";
import { MdKeyboardArrowDown } from "react-icons/md";

import LogoSlider from "./components/AutomaticSlideShow";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/pHD_Section/1.Intro";
import Header from "./components/Header";

function Home() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showComparePage, setShowComparePage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleCompareClick = () => {
    setShowComparePage(true);
  };

  const handleBackToHomeClick = () => {
    setShowComparePage(false);
  };

  return (
    <div className="App">
      {showComparePage ? (
        <div>
          <Compare />
          <button className="back-btn" onClick={handleBackToHomeClick}>
            Back to Home
          </button>
          <LogoBar />
          <Footer />
        </div>
      ) : (
        <div>
          <section className="hero">
            <Form />
            <div className="hero-content">
              <h3>#India'sMostTrusted</h3>
              <h1>DISTANCE EDUCATION CENTRE</h1>
              <p>
                We simplify the journey to obtaining distance and online degrees
              </p>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search courses & University e.g. BA MBA MA BBA BCA MCA"
                />
                <button>
                  <img src={Icon} alt="" className="s-icon" />
                </button>
              </div>
              <div className="icons">
                <div className="icon-box">
                  <img src={Tlogo4} alt="Top 10 MBA Universities" />
                  <p>NAAC 'A' GRADE</p>
                </div>
                <div className="icon-box">
                  <img src={Tlogo3} alt="UGC-DEB Approved Universities" />
                  <p>UGC-DEB Approved Universities 2024</p>
                </div>
                <div className="icon-box">
                  <img src={Tlogo2} alt="Top 10 MCA Universities" />
                  <p>Top 10 MCA Universities</p>
                </div>
                <div className="icon-box">
                  <img src={Tlogo} alt="NIRF Ranked Universities" />
                  <p>NIRF Ranked Universities 2024</p>
                </div>
              </div>
            </div>

            <style jsx>{`
              .hero {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 20px;
                background-color: #f8f8f8;
              }

              .hero-content {
                flex: 1;
                padding: 20px;
                order: 2;
              }

              .total-form {
                flex: 1;
                order: 1;
              }

              .hero-content h3 {
                font-size: 20px;
                color: #ffffff;
              }

              .hero-content h1 {
                font-size: 36px;
                font-weight: bold;
                color: #fff44f;
                margin-top: 10px;
              }

              .hero-content p {
                font-size: 16px;
                color: #ffffff;
                margin-top: 10px;
                line-height: 1.5;
              }

              .search-box {
                display: flex;
                margin-top: 20px;
                position: relative;
              }

              .search-box input {
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ddd;
                border-radius: 5px 0 0 5px; /* Round only left corners */
                flex: 7; /* Adjust input size */
                height: 40px; /* Set height of input */
              }

              .search-box button {
                background-color: #ff7f00;
                border: none;
                padding: 0 5px;
                border-radius: 0 5px 5px 0; /* Round only right corners */
                cursor: pointer;
                flex: 0.1; /* Adjust button size */
                height: 40px; /* Set height of button equal to input */
                display: flex;
                align-items: center; /* Vertically align content in button */
                justify-content: center; /* Center the content horizontally */
              }

              .search-box button img {
                width: 20px; /* Adjust size of icon */
                height: 20px; /* Ensure the icon is centered */
              }

              /* Adjust for small devices */
              @media (max-width: 768px) {
                .search-box input {
                  flex: 8; /* Larger input width on small devices */
                  font-size: 14px; /* Slightly smaller text */
                  padding: 8px; /* Reduced padding */
                  height: 36px; /* Reduced height on small devices */
                  margin-bottom: 3.5px;
                }

                .search-box button {
                  flex: 0.1; /* Smaller button on small devices */
                  padding: 8px;
                  height: 36px; /* Adjust height to match input */
                }
              }

              .icons {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                gap: 15px;
              }

              .icon-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 45%;
                text-align: center;
              }

              .icon-box img {
                width: 40px;
                margin-bottom: 10px;
              }

              .icon-box p {
                font-size: 14px;
                color: #333;
              }

              /* Responsive layout for mobile */
              @media (max-width: 768px) {
                .hero {
                  flex-direction: column;
                  align-items: center;
                }

                .hero-content {
                  order: 1;
                  text-align: center;
                }

                .total-form {
                  order: 2;
                  width: 100%;
                  margin-top: 20px;
                }

                .hero-content h1 {
                  font-size: 28px;
                }

                .search-box {
                  flex-direction: row;
                  margin-top: 15px;
                }

                .search-box input {
                  flex: 1;
                }

                .icons {
                  flex-direction: column;
                  align-items: center;
                }

                .icon-box {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  text-align: left;
                  padding: 10px;

                  border-radius: 5px;
                  margin-bottom: 10px;
                }

                .icon-box img {
                  width: 150px; /* Set width */
                  height: 130px; /* Set height */
                  margin-right: 10px;
                }

                .icon-box p {
                  font-size: 20px;
                  margin: 0;
                  color: #ffffff;
                }
              }
            `}</style>
          </section>

          <LogoSlider />
          <SubjectBoxes />
          <UniversityGrid />
          {/* <MbaSpecialization /> */}
          <CouncelExpert />
          <TalkToExperts />
          <LogoBar />
        </div>
      )}
    </div>
  );
}

export default Home;
