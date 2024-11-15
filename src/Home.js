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
import C1logo from "../src/assets/BannerSlide1.png";
import DUlogo from "../src/assets/BannerSlide2.png";
import Ignoulogoo from "../src/assets/BannerSlide4.png";
import Icon from "../src/assets/s4-removebg-preview.png";
import { MdKeyboardArrowDown } from "react-icons/md";

import LogoSlider from "./components/AutomaticSlideShow";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/pHD_Section/1.Intro";
import Header from "./components/Header";
import UnderSlider from "./components/UnderHeroSlider";

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
            <div className="hero-left">
              <Form />
            </div>
            <div className="hero-right">
              <div className="hero-content">
                <h3>#India'sTopReliable</h3>
                <h1>DISTANCE EDUCATION SCHOOL</h1>
                <p>We Ease the Process to Achieve Distance & Online Degree</p>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search Course & University e.g. BA MBA MA BBA"
                  />
                  <button>
                    <img src={Icon} alt="" className="s-icon" />
                  </button>
                </div>
                <div className="icons">
                  <div className="icon-box">
                    <img src={Tlogo4} alt="Top 10 MBA Universities" />
                    <p>Top 10 MBA Universities in India</p>
                  </div>
                  <div className="icon-box">
                    <img src={Tlogo3} alt="UGC-DEB Approved Universities" />
                    <p>UGC-DEB Approved Universities 2024</p>
                  </div>
                  <div className="icon-box">
                    <img src={Tlogo2} alt="Top 10 MCA Universities" />
                    <p>Top 10 MCA Universities in India</p>
                  </div>
                  <div className="icon-box">
                    <img src={Tlogo} alt="NIRF Ranked Universities" />
                    <p>NIRF Ranked Universities 2024</p>
                  </div>
                </div>
                <div className="top-Leading">
                  <h3>Top Leading Universities</h3>
                </div>

                <LogoSlider />
              </div>
            </div>
          </section>

          <style jsx>{`
            .hero {
              display: grid;
              align-items: center;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              padding: 30px 20px;
              color: white;
            }

            .hero-left {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
              border-radius: 8px;
              margin-top: -60px;
              color: white;
            }

            .hero-right {
              display: flex;
              align-items: center;
              justify-content: start;
              margin-top: -50px;
              text-align: center;
            }

            .hero-content h3 {
              font-size: 18px;
              color: #ccc;
              margin-bottom: 5px;
              font-weight: 500;
            }

            .hero-content h1 {
              font-size: 36px;
              font-weight: 700;
              color: #fff44f;
              margin: 0;
              text-transform: uppercase;
            }

            .hero-content p {
              font-size: 16px;
              color: #ffffff;
              margin-top: 10px;
              line-height: 1.5;
              text-align: start;
            }

            .search-box {
              display: flex;
              align-items: center;
              margin-top: 20px;
              max-width: 600px;
              width: 100%;
              gap: 10px;
            }

            .search-box input {
              padding: 10px;
              font-size: 16px;
              border: 1px solid #ddd;
              border-radius: 5px;
              flex: 1;
              height: 45px;
            }

            .search-box button {
              background-color: #ff7f00;
              border: none;
              padding: 10px 15px;
              border-radius: 5px;
              cursor: pointer;
              display: flex;
              align-items: center;
            }

            .search-box button img {
              width: 20px;
              height: 20px;
            }

            .icons {
              display: flex;
              justify-content: space-between;
              gap: 20px;
              margin-top: 20px;
              width: 100%;
              max-width: 800px;
            }

            .icon-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              color: white;
              font-size: 14px;
            }

            .icon-box img {
              width: 50px;
              height: 50px;
              margin-bottom: 10px;
            }

            .top-Leading h3 {
              font-size: 20px;
              font-weight: 700;
              color: #fff44f;
              margin-top: 10px;
              margin-bottom: -5px;
              text-transform: uppercase;
            }

            /* Responsive layout for smaller screens */
            @media (max-width: 768px) {
              .hero {
                grid-template-columns: 1fr;
              }

              .hero-left,
              .hero-right {
                width: 100%;
              }
              .hero-content h3 {
                margin-top: 100px;
                font-size: 28px;
                text-align: center;
                color: white;
              }

              .hero-content h1 {
                margin-top: 30px;
                font-size: 28px;
                text-align: center;
              }
              .hero-content p {
                text-align: center;
              }

              .search-box {
                width: 80%; /* Adjust width for smaller screens */
                margin: 0 auto; /* Center the search box */
                gap: 5px;
              }

              .search-box input {
                font-size: 14px;
                padding: 8px;
                height: 40px;
                border-radius: 5px; /* Fully rounded */
              }

              .search-box button {
                padding: 8px 10px;
                border-radius: 5px; /* Fully rounded */
              }

              .icons {
                flex-direction: column;
                align-items: center;
                gap: 15px;
              }

              .icon-box img {
                width: 45px;
                height: 45px;
                margin-bottom: 10px;
              }

              .hero-left {
                order: 2; /* Move form below content */
              }

              .hero-right {
                order: 1; /* Keep content at top */
              }
            }
          `}</style>

          <UnderSlider />
          <SubjectBoxes />
          <UniversityGrid />
          <CouncelExpert />
          <TalkToExperts />
          <LogoBar />
        </div>
      )}
    </div>
  );
}

export default Home;
