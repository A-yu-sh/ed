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
import PhdHeader from "../components/Phd";

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
            height: 90px;
          }
          .header-container {
            display: grid;
            grid-template-columns: 1fr auto auto auto auto;
            align-items: center;
            max-width: 1200px;
            width: 100%;
          }
          .logo{
             display:flex;
          justify-content: start;
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
            display: flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            justify-content: center;
          }
          .nav-item-content {
            display: flex;
            justify-content: start;
            align-items: start;
            gap: 4px;
            justify-content: center;
          }
          .dropdown {
            position: absolute;
            top: 50%;
            left: -90%;
            width: 100vw;
            padding: 10px;
            border-radius: 4px;
            z-index:1000;
          }
          .univ-dropdown {
            position: absolute;
            margin-top: 675px;
            left: -770%;
            width: 100vw;
            padding: 10px;
            border-radius: 4px;
          }
          .compare-btn {
            padding: 10px 15px;
            background-color: #ff6600;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 20px;
          }
          .mobile-nav-item button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 8px;
            border: none;
            background: none;
            cursor: pointer;
            font-size: inherit;
          }
          .mobile-nav-item svg {
            margin-left: 8px;
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
  height: 100%; /* Ensure it occupies full viewport height */
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 100;
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 100vh; /* Prevent the menu from exceeding viewport height */
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
              flex-direction: column;
              width: 100%;
            }
           
.mobile-dropdown-content {
text-align: start;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
}

.mobile-dropdown-content a {
  text-align: start;
  margin: 8px 0;

  text-decoration: none;
  color: #333;
}

.mobile-dropdown-content a:hover {
  color: #007BFF; /* Change to your desired hover color */

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
                <div className="nav-item-content">
                  COURSES
                  <MdKeyboardArrowDown />
                </div>
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
                <div className="nav-item-content">
                  UNIVERSITY
                  <MdKeyboardArrowDown />
                </div>
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
                <div className="nav-item-content">
                  HonorEdge
                  <MdKeyboardArrowDown />
                </div>
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
                <button onClick={() => toggleMobileDropdown("online")}>
                  Online Courses
                  {activeMobileDropdown === "online" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "online" && (
                  <div className="mobile-dropdown-content">
                    <Link to="/filter">Master of Business Administration</Link>
                    <br />
                    <Link to="/filter">Master of Commerce</Link>
                    <br />
                    <Link to="/filter">Master of Computer Application</Link>
                    <br />
                    <Link to="/filter">Master of Arts</Link>
                    <br />
                    <Link to="/filter">Master of Science</Link>
                    <br />
                    <Link to="/filter">
                      Master of Journalism & Mass Media Communications
                    </Link>
                    <br />

                    <Link to="/filter">Bachelor of Commerce</Link>
                    <br />
                    <Link to="/filter">Bachelor of Computer Application</Link>
                    <br />
                    <Link to="/filter">Bachelor of Arts</Link>
                    <br />

                    <p>Bachelor of Journalism & Mass Media Communications</p>
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <button
                  onClick={() => toggleMobileDropdown("Distance-Courses")}>
                  Distance Courses
                  {activeMobileDropdown === "Distance-Courses" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "Distance-Courses" && (
                  <div className="mobile-dropdown-content">
                    <Link to="/filter">Master of Business Administration</Link>
                    <br />
                    <Link to="/filter">Master of Commerce</Link>
                    <br />
                    <Link to="/filter">Master of Computer Application</Link>
                    <br />
                    <Link to="/filter">Master of Arts</Link>
                    <br />
                    <Link to="/filter">Master of Science</Link>
                    <br />
                    <Link to="/filter">
                      Master of Library and Information Science
                    </Link>
                    <br />

                    <Link to="/filter">Bachelor of Commerce</Link>
                    <br />
                    <Link to="/filter">Bachelor of Computer Application</Link>
                    <br />
                    <Link to="/filter">Bachelor of Arts</Link>
                    <br />
                    <Link to="/filter">
                      Bachelor of Library and Information Science
                    </Link>
                    <br />
                    <Link to="/filter">
                      Bachelor of Business Administration
                    </Link>
                    <br />
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("master-courses")}>
                  Master Courses
                  {activeMobileDropdown === "master-courses" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "master-courses" && (
                  <div className="mobile-dropdown-content">
                    <Link to="/filter">Master of Business Administration</Link>
                    <br />
                    <Link to="/filter">Master of Commerce</Link>
                    <br />
                    <Link to="/filter">Master of Computer Application</Link>
                    <br />
                    <Link to="/filter">Master of Arts</Link>
                    <br />
                    <Link to="/filter">Master of Science</Link>
                    <br />
                    <Link to="/filter">
                      Master of Journalism & Mass Media Communications
                    </Link>
                    <br />
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <button
                  onClick={() => toggleMobileDropdown("bachelor-courses")}>
                  Bachelor Courses
                  {activeMobileDropdown === "bachelor-courses" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "bachelor-courses" && (
                  <div className="mobile-dropdown-content">
                    <Link to="/filter">
                      Bachelor of Business Administration
                    </Link>
                    <Link to="/filter">Bachelor of Commerce</Link>
                    <br />
                    <Link to="/filter">Bachelor of Computer Application</Link>
                    <br />
                    <Link to="/filter">Bachelor of Arts</Link>
                    <br />
                    <Link to="/filter">Bachelor of Science</Link>
                    <br />
                    <Link to="/filter">
                      Bachelor of Journalism & Mass Media Communications
                    </Link>
                    <br />
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("MBA")}>
                  MBA Specialization
                  {activeMobileDropdown === "MBA" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "MBA" && (
                  <div className="mobile-dropdown-content">
                    <Link to="/filter">General Management</Link>
                    <br />
                    <Link to="/filter">Finance Management</Link>
                    <br />
                    <Link to="/filter">Marketing Management</Link>
                    <br />
                    <Link to="/filter">Human Resource Management</Link>
                    <br />
                    <Link to="/filter">Operation Management</Link>
                    <br />
                    <Link to="/filter">Information Technology</Link>
                    <br />
                    <Link to="/filter">Healthcare and Hospital Management</Link>
                    <br />
                    <Link to="/filter">Data Analytics</Link>
                    <br />
                    <Link to="/filter">Business Analytics</Link>
                    <br />
                    <Link to="/filter">Supply Chain Management</Link>
                    <br />
                    <Link to="/filter">International Business</Link>
                    <br />
                    <Link to="/filter">Project Management</Link>
                    <br />
                    <Link to="/filter">Hospitality Management</Link>
                    <br />
                    <Link to="/filter">International Finance</Link>
                    <br />
                    <Link to="/filter">Retail Management</Link>
                    <br />
                    <Link to="/filter">
                      Logistics and Supply Chain Management
                    </Link>
                    <br />
                    <Link to="/filter">Fintech Management</Link>
                    <br />
                    <Link to="/filter">Data Science and Analytics</Link>
                    <br />
                    <Link to="/filter">Banking and Finance Management</Link>
                    <br />
                    <Link to="/filter">Marketing and HR Management</Link>
                    <br />
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
                    <Link to="/filter">Jamia Milia Islamia</Link>
                    <br />
                    <Link to="/filter">Aligar Muslim University</Link>
                    <br />
                    <Link to="/filter">University of Hyderabad</Link>
                    <br />
                    <Link to="/filter">Acharya Nagarjuna University</Link>
                    <br />
                    <Link to="/filter">Andhra University</Link>
                    <br />
                    <Link to="/filter">Sambalpur University</Link>
                    <br />
                  </div>
                )}
              </li>
              <li className="mobile-nav-item">
                <button onClick={() => toggleMobileDropdown("HonorEdge")}>
                  HonorEdge
                  {activeMobileDropdown === "HonorEdge" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
                {activeMobileDropdown === "HonorEdge" && (
                  <div className="mobile-dropdown-content">
                    <p>
                      <PhdHeader />
                    </p>
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
