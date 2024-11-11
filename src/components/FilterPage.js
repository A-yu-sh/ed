import React, { useState } from "react";
import Sidebar from "./SideBar";
import i1 from "../assets/Aligarh Muslim.jpg";

const universities = [
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1, // Replace with actual image URL
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1, // Replace with actual image URL
  },
  {
    name: "Chandigarh University",
    fee: "30,000/- Semester",
    location: "Ajitgarh, Punjab",
    approvals: "UGC | NAAC A+ | NIRF 20",
    advantage: "Harvard Certifications",
    image: i1, // Replace with actual image URL
  },
  {
    name: "Amity University",
    fee: "42,500/- Semester",
    location: "Noida, Uttar Pradesh",
    approvals: "UGC | NRIF 32 | NAAC A+",
    advantage: "Industry Mentorship",
    image: i1, // Replace with actual image URL
  },
  {
    name: "Amrita University",
    fee: "35,000/- Semester",
    location: "Coimbatore, Tamil Nadu",
    approvals: "UGC | NAAC A++ | NIRF 7",
    advantage: "Certification Training",
    image: i1, // Replace with actual image URL // Replace with actual image URL
  },
  {
    name: "Chandigarh University",
    fee: "30,000/- Semester",
    location: "Ajitgarh, Punjab",
    approvals: "UGC | NAAC A+ | NIRF 20",
    advantage: "Harvard Certifications",
    image: i1, // Replace with actual image URL // Replace with actual image URL
  },
];

const FilterPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={styles.container}>
      <Sidebar />
      <div
        style={{
          ...styles.sidebar,
          display: isSidebarOpen ? "block" : "none",
        }}>
        <button
          onClick={() => setIsSidebarOpen(false)}
          style={styles.closeSidebar}>
          X
        </button>
        <h2>Filter by Mode</h2>
        <div style={styles.checkboxContainer}>
          <label>
            <input type="checkbox" /> Distance Mode
          </label>
          <label>
            <input type="checkbox" /> Online Mode
          </label>
        </div>
        <h2>Filter by Course</h2>
        <div style={styles.checkboxContainer}>
          <label>
            <input type="checkbox" /> MCA
          </label>
          <label>
            <input type="checkbox" /> MBA
          </label>
          {/* Add other courses as necessary */}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {universities.map((uni, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{ ...styles.image, backgroundImage: `url(${uni.image})` }}>
              <div style={styles.mode}>Online Mode</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    marginTop: "100px",
  },
  sidebar: {
    width: "20%",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRight: "1px solid #ddd",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    display: "block",
    overflowY: "auto",
  },
  closeSidebar: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5em",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "50px",
  },
  openSidebar: {
    display: "none",
    background: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 1000,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  mainContent: {
    flex: 1,
    marginLeft: "0%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  card: {
    display: "flex",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px 0",
    overflow: "hidden",
    flexDirection: "column",
    "@media(min-width: 600px)": {
      flexDirection: "row",
    },
  },
  image: {
    width: "100%",
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    "@media(min-width: 600px)": {
      width: "30%",
    },
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
    padding: "10px",
    width: "100%",
  },
  uniName: {
    fontSize: "1.2em",
    color: "#d9534f",
  },
  info: {
    margin: "5px 0",
    color: "#555",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  knowMoreButton: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  getHelpButton: {
    padding: "8px 15px",
    backgroundColor: "#0275d8",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

// Media queries for responsive behavior
Object.assign(styles, {
  "@media(max-width: 768px)": {
    sidebar: {
      width: "100%",
      position: "fixed",
      zIndex: 1000,
      display: "none",
    },
    mainContent: {
      marginLeft: "0",
      width: "100%",
    },
    openSidebar: {
      display: "block",
    },
    closeSidebar: {
      display: "block",
    },
  },
});

export default FilterPage;
