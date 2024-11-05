import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./components/pHD_Section/1.Intro";
import Header from "./components/Header";
import FilterSection from "./components/SideFilter";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phd" element={<Intro />} />
        <Route path="/filter" element={<FilterSection />} />
      </Routes>
    </div>
  );
}

export default App;
