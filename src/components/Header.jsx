import React, { useState } from "react";
import "../Global.css";

import logo from "../assets/TopLogo.png";

import Course from "../components/Course";
import University from "../components/University";

import Phd from "../components/Phd";

import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
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
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <nav>
          <ul className="nav-list">
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("course")}
              onMouseLeave={handleMouseLeave}>
              COURSES{" "}
              <span className="dropdown-arrow">
                <MdKeyboardArrowDown />
              </span>
              {activeDropdown === "course" && (
                <div className="dropdown">
                  <Course />
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("university")}
              onMouseLeave={handleMouseLeave}>
              UNIVERSITY{" "}
              <span className="dropdown-arrow">
                {" "}
                <MdKeyboardArrowDown />
              </span>
              {activeDropdown === "university" && (
                <ul className="dropdown">
                  <University />
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("PHD")}
              onMouseLeave={handleMouseLeave}>
              PHD{" "}
              <span className="dropdown-arrow">
                {" "}
                <MdKeyboardArrowDown />
              </span>
              {activeDropdown === "PHD" && (
                <ul className="PHD-dropdown">
                  <Phd />
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <button className="compare-btn" onClick={handleCompareClick}>
          COMPARE
        </button>
      </header>
    </div>
  );
}

export default Header;
