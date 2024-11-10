import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/TopLogo.png";
import Course from "../components/Course";
import University from "../components/University";
import Phd from "../components/Phd";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  return (
    <div className="App">
      <header className="header">
        <style>{`
          .header {
            background-color: #f5f5f5;
            padding: 10px 20px;
            display: flex;
            justify-content: center;
            height:90px;
          }
          .header-container {
            display: grid;
            grid-template-columns: 1fr auto auto auto auto;
            align-items: center;
            max-width: 1200px;
            width: 100%;
          }
          .logo-image {
            max-height: 50px;
          }
          .nav {
            display: flex;
          }
          .nav-list {
            display: flex;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .nav-item {
            position: relative;
          }
          .dropdown {
            position: absolute;
            margin-top:24px;
            left: 2%;
            width:100vw;
            padding: 10px;
            border-radius: 4px;
          }

          .univ-dropdown {
            position: absolute;
            margin-top:24px;
            left: -710%;
            width:100vw;
            padding: 10px;
            border-radius: 4px;
          }
            
          .compare-btn {
            padding: 10px 15px;
              background-color: #ffa500;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .header-container {
              grid-template-columns: 1fr auto;
            }
            .nav {
              display: none;
            }
            .hamburger-btn {
              font-size: 24px;
              background: none;
              border: none;
              cursor: pointer;
              color: #333;
            }
            .mobile-menu {
              position: fixed;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: white;
              display: flex;
              flex-direction: column;
              padding: 20px;
              z-index: 100;
            }
            .mobile-nav-list {
              list-style: none;
              padding: 0;
              display: flex;
              flex-direction: column;
              gap: 20px;
              border-bottom: 1px solid #ccc;
              padding-bottom: 10px;
            }
            .mobile-nav-item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }
            .mobile-dropdown-content {
            
              padding: 10px;
              margin-top: 5px;
              border-radius: 4px;
            }
            .mobile-dropdown-content p{
            text-align: center;
            }
            .close-mobile-menu {
              align-self: flex-end;
              cursor: pointer;
              font-size: 24px;
            }
          }
          @media (min-width: 769px) {
            .hamburger-btn {
              display: none;
            }
          }
        `}</style>

        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("course")}
                onMouseLeave={handleMouseLeave}>
                COURSES <MdKeyboardArrowDown />
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
                UNIVERSITY <MdKeyboardArrowDown />
                {activeDropdown === "university" && (
                  <div className="univ-dropdown">
                    <University />
                  </div>
                )}
              </li>
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("phd")}
                onMouseLeave={handleMouseLeave}>
                PHD <MdKeyboardArrowDown />
                {activeDropdown === "phd" && (
                  <div className="dropdown">
                    <Phd />
                  </div>
                )}
              </li>
            </ul>
            <Link to="/compare" className="compare-btn">
              Compare
            </Link>
          </nav>

          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <span className="close-mobile-menu" onClick={toggleMobileMenu}>
              <MdClose />
            </span>
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("course")}>
                  COURSES
                  {activeMobileDropdown === "course" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "course" && (
                  <div className="mobile-dropdown-content">
                    <p>Master of Business Administration</p>
                    <p>Master of Commerce</p>
                    <p>Master of Computer Application</p>
                    <p>Master of Arts</p>
                    <p>Master of Science</p>
                    <p>Master of Journalism & Mass Media Communications</p>
                  </div>
                )}
              </li>
              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("university")}>
                  UNIVERSITY
                  {activeMobileDropdown === "university" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "university" && (
                  <div className="mobile-dropdown-content">
                    <p>Master of Business Administration</p>
                    <p>Master of Commerce</p>
                    <p>Master of Computer Application</p>
                    <p>Master of Arts</p>
                    <p>Master of Science</p>
                    <p>Master of Journalism & Mass Media Communications</p>
                  </div>
                )}
              </li>
              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("phd")}>
                  PHD
                  {activeMobileDropdown === "phd" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "phd" && (
                  <div className="mobile-dropdown-content">
                    <p>PhD Content</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
