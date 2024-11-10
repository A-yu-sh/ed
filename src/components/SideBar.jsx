import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import "./Sidebar.css"; // Import the CSS file
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle screen resize to dynamically update `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Filter Button for Mobile View */}
      {isMobile && (
        <button style={styles.filterButton} onClick={toggleSidebar}>
          <MdMenu />
        </button>
      )}

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, ...(isOpen ? styles.sidebarOpen : {}) }}>
        {/* Close Button (visible in mobile view) */}
        {isMobile && (
          <button style={styles.closeButton} onClick={toggleSidebar}>
            <FaTimes />
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
          <h2 style={styles.sectionTitle}>Filter by Mode</h2>
          <div style={styles.checkboxContainer}>
            <label>
              <input type="checkbox" /> Distance Mode
            </label>
            <label>
              <input type="checkbox" /> Online Mode
            </label>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Filter by Course</h2>
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
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Filter by University</h2>
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
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Select Specialization</h2>
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
        </div>

        {/* Apply Filter Button (visible in mobile view) */}
        {isMobile && (
          <button style={styles.applyButton} onClick={toggleSidebar}>
            Apply Filters
          </button>
        )}
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
    position: "",
    top: 0,
    marginTop: "-10px",
    left: "-100%", // Initially hidden on small screens
    transition: "left 0.3s ease",
  },
  sidebarOpen: {
    left: 0, // Show sidebar on small screens
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    position: "relative",
  },
  searchInput: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    paddingLeft: "30px", // space for the icon
  },
  searchIcon: {
    position: "absolute",
    left: "10px",
    color: "#888",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1em",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
  },
  filterButton: {
    position: "fixed",
    top: "200px",
    left: "10px",

    padding: "10px 15px",
    marginTop: "10px",

    color: "#000",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
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
  applyButton: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  },
  filterIcon: {
    marginRight: "5px",
  },
};

export default Sidebar;
