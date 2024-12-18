import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./components/pHD_Section/1.Intro";
import Header from "./components/Header";
import FilterSection from "./components/SideFilter";
import Compare from "./components/Compare";
import About from "./components/Footer_Pages/About_Us";
import Contact from "./components/Footer_Pages/Contact";
import Privacy from "./components/Footer_Pages/PrivacyPolicy";
import Terms from "./components/Footer_Pages/TermsAndConditions";
import Ubox from "./components/Convocation_SlideShow";
import FilterPage from "./components/FilterPage";
import Disclaimer from "./components/Footer_Pages/Disclaimer";
import UGCIntro from "./components/UGC/1.Intro";
import DoctorateIntro from "./components/Doctorate/1.Intro";
import ThesisIntro from "./components/Thesis/1.Intro";
import Blog from "./components/Footer_Pages/Blogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phd" element={<Intro />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Privacy-Policy" element={<Privacy />} />
        <Route path="/Terms-and-Conditions" element={<Terms />} />
        <Route path="/Terms" element={<Ubox />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/ugc" element={<UGCIntro />} />
        <Route path="/honorary-doctorate" element={<DoctorateIntro />} />
        <Route path="/thesis" element={<ThesisIntro />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
// backgroundImage: url(${backgroundImage}),
