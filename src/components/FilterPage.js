import React, { useState } from "react";
import i1 from "../assets/Aligarh Muslim.jpg"; // Replace with actual image URLs
import { FaSearch, FaFilter } from "react-icons/fa"; // Install react-icons if not done

const universities = [
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1,
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1,
  },
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1,
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1,
  },
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1,
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1,
  },
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1,
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1,
  },
  // Add more universities as needed...
];

const FilterPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleCheckboxChange = (filterCategory, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: {
        ...(prevFilters[filterCategory] || {}),
        [value]: !prevFilters[filterCategory]?.[value],
      },
    }));
  };

  return (
    <div style={styles.container}>
      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search universities..."
          style={styles.searchInput}
        />
        <FaSearch style={styles.searchIcon} />
        <FaFilter
          style={styles.filterIcon}
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        />
      </div>

      {/* Sidebar (Hidden on mobile unless toggled) */}
      <div
        style={{
          ...styles.sidebar,
          display: isSidebarVisible ? "block" : "none",
        }}>
        <h2>Filter by Mode</h2>
        <div style={styles.checkboxContainer}>
          {["Distance Mode", "Online Mode"].map((mode) => (
            <label key={mode}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("mode", mode)}
              />{" "}
              {mode}
            </label>
          ))}
        </div>

        <h2 style={styles.text}>Filter by Course</h2>
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
          ].map((course) => (
            <label key={course}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("course", course)}
              />{" "}
              {course}
            </label>
          ))}
        </div>

        <h2>Filter by University</h2>
        <div style={styles.checkboxContainer}>
          {[
            "Sikkim Manipal University",
            "DY Patil University",
            "Shobhit University",
            "IGNOU",
            "Vivekananda Global University",
            "Shoolini University",
            "Sharda University",
            "Amity University",
            "Amrita University",
          ].map((university) => (
            <label key={university}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("university", university)}
              />{" "}
              {university}
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Online & Distance Education Universities</h1>
        <div style={styles.grid}>
          {universities.map((uni, index) => (
            <div key={index} style={styles.card}>
              <div
                style={{
                  ...styles.image,
                  backgroundImage: `url(${uni.image})`,
                }}>
                <div style={styles.mode}>Online Mode</div>
              </div>
              <div style={styles.details}>
                <h2 style={styles.uniName}>{uni.name}</h2>
                <p style={styles.info}>
                  <strong>MCA Course Fee:</strong> {uni.fee}
                </p>
                <p style={styles.info}>
                  <strong>Location:</strong> {uni.location}
                </p>
                <p style={styles.info}>
                  <strong>Approvals:</strong> {uni.approvals}
                </p>
                <p style={styles.info}>
                  <strong>Advantage:</strong> {uni.advantage}
                </p>
                <div style={styles.buttons}>
                  <button style={styles.knowMoreButton}>Know More</button>
                  <button style={styles.getHelpButton}>Get Help</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CSS in JS with responsive design
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    marginTop: "60px",
    marginTop: "100px",
  },
  text: {
    marginTop: "60px",
  },

  searchBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f1f1f1",
    borderBottom: "1px solid #ddd",
  },
  searchInput: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchIcon: {
    fontSize: "18px",
    color: "#555",
    cursor: "pointer",
  },
  filterIcon: {
    fontSize: "18px",
    color: "#555",
    cursor: "pointer",
  },
  sidebar: {
    position: "fixed",
    top: "60px",
    left: 0,
    width: "100%",
    height: "auto",
    backgroundColor: "#f7f7f7",
    borderBottom: "1px solid #ddd",
    padding: "20px",
    overflowY: "auto",
    marginTop: "100px",
    zIndex: 10,
    transition: "all 0.3s ease-in-out", // For smooth transition
  },
  mainContent: {
    marginLeft: "0",
    padding: "20px",
    width: "100%",
  },
  grid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  mode: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "0.8em",
  },
  details: {
    padding: "15px",
  },
  uniName: {
    fontSize: "1.2em",
    color: "#d9534f",
    marginBottom: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  knowMoreButton: {
    backgroundColor: "#d9534f",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  getHelpButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  // Responsive design (mobile first)
  "@media (max-width: 768px)": {
    sidebar: {
      width: "100%",
      position: "relative",
      display: "block",
      zIndex: 1,
      height: "100%",
      top: "0",
      border: "none",
    },
    mainContent: {
      marginLeft: 0,
      width: "100%",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    card: {
      width: "90%",
      maxWidth: "500px",
      marginBottom: "15px",
    },
  },
};

export default FilterPage;
