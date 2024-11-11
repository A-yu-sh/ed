import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
  MdClose,
} from "react-icons/md";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // State to track which sections are collapsed or expanded
  const [expandedSections, setExpandedSections] = useState({
    mode: true,
    course: true,
    university: true,
    specialization: true,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sidebar Toggle Button (visible in both mobile and desktop views) */}
      <button style={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          ...(isOpen ? styles.sidebarOpen : {}),
        }}>
        {/* Close Button (visible in mobile view) */}
        {isMobile && (
          <button style={styles.closeButton} onClick={toggleSidebar}>
            <MdClose />
          </button>
        )}

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search here..."
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>

        {/* Filter Sections */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle} onClick={() => toggleSection("mode")}>
            Filter by Mode
            {expandedSections.mode ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </h2>
          {expandedSections.mode && (
            <div style={styles.checkboxContainer}>
              <label>
                <input type="checkbox" /> Distance Mode
              </label>
              <label>
                <input type="checkbox" /> Online Mode
              </label>
            </div>
          )}
        </div>

        <div style={styles.section}>
          <h2
            style={styles.sectionTitle}
            onClick={() => toggleSection("course")}>
            Filter by Course
            {expandedSections.course ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </h2>
          {expandedSections.course && (
            <div style={styles.checkboxContainer}>
              {[
                "BA",
                "BCom",
                "BCA",
                "BBA",
                "BSC",
                "BJMC",
                "BLIS",
                "MA",
                "MBA",
                "EMBA",
                "MCA",
              ].map((course, index) => (
                <label key={index}>
                  <input type="checkbox" /> {course}
                </label>
              ))}
            </div>
          )}
        </div>

        <div style={styles.section}>
          <h2
            style={styles.sectionTitle}
            onClick={() => toggleSection("university")}>
            Filter by University
            {expandedSections.university ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </h2>
          {expandedSections.university && (
            <div style={styles.checkboxContainer}>
              {[
                "Sikkim Manipal University",
                "DY Patil University",
                "Shobhit University",
                "IGNOU",
                "Vivekananda global university",
                "Shoolini university",
                "Sharda university",
                "Amity university",
                "Amrita University",
              ].map((university, index) => (
                <label key={index}>
                  <input type="checkbox" /> {university}
                </label>
              ))}
            </div>
          )}
        </div>

        <div style={styles.section}>
          <h2
            style={styles.sectionTitle}
            onClick={() => toggleSection("specialization")}>
            Select Specialization
            {expandedSections.specialization ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </h2>
          {expandedSections.specialization && (
            <div style={styles.checkboxContainer}>
              {[
                "General",
                "Hindi",
                "English",
                "Political science",
                "History",
                "Economics",
                "Sociology",
                "Mathematics",
                "Psychology",
                "Public Admin",
              ].map((specialization, index) => (
                <label key={index}>
                  <input type="checkbox" /> {specialization}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Inline Styles
const styles = {
  sidebar: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRight: "1px solid #ddd",
    height: "100vh",
    overflowY: "auto",
    fontFamily: "Arial, sans-serif",
    position: "fixed",
    top: 0,
    left: "-100%", // Hide sidebar by default
    transition: "left 0.3s ease",
    zIndex: 999,
  },
  sidebarOpen: {
    left: "0", // Slide in the sidebar when open
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "100px",
    marginBottom: "30px",
    position: "relative",
    marginTop: "130px",
  },
  searchInput: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    paddingLeft: "30px",
  },
  searchIcon: {
    position: "absolute",
    left: "10px",
    color: "#888",
  },
  section: {
    marginBottom: "20px",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "1em",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
  },
  toggleButton: {
    position: "fixed",
    top: "20px",
    left: "20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1000,
    marginTop: "75px",
    marginBottom: "75px",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5em",
    color: "#888",
    cursor: "pointer",
  },
};

export default Sidebar;
