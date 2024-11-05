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
                  <img src={Icon} alt="" class="s-icon" />
                </button>
              </div>
              <div className="icons">
                <div className="icon-box">
                  <img src={Tlogo4} alt="Top 10 MBA Universities" />
                  <p>NAAC 'A' GRADE</p>
                </div>
                <div className="icon-box">
                  <img src={Tlogo3} alt="UGC-DEB Approved Universities" />
                  <p> UGC-DEB Approved Universities 2024</p>
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
              {/* <div className="leading">
                <span className="leading-univ">Top Leading – Universities</span>
              </div> */}

              {/* <UniversitySlideshow /> */}
              {/* <AutoSlideshow /> */}
            </div>
          </section>
          <LogoSlider />
          <SubjectBoxes />
          <UniversityGrid />
          {/* <MbaSpecialization /> */}
          <CouncelExpert />
          <TalkToExperts />
          <LogoBar />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
