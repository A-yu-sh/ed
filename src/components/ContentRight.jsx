import React, { useState, useEffect } from "react";
import Tlogo from "../assets/Tlogo.png";
import Tlogo2 from "../assets/Tlogo2.png";
import Tlogo3 from "../assets/Tlogo3.png";
import Tlogo4 from "../assets/Tlogo4.png";
import LogoSlider from "./AutomaticSlideShow";
import { FaSearch } from "react-icons/fa";

function ContentRight() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this width as needed
    };

    // Check the screen size on component mount and on window resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const styles = {
    heroRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
    },
    heroContent: {
      maxWidth: "800px",
      width: "100%",
    },
    heading: {
      display: "flex",
      justifyContent: isMobile ? "center" : "start",
      color: "#ffffff",
    },
    mainHeading: {
      display: "flex",
      justifyContent: isMobile ? "center" : "start",
      fontSize: isMobile ? "1.1rem" : "2.5rem",
      fontWeight: "bold",
      color: "#fff44f",
    },
    description: {
      display: "flex",
      justifyContent: isMobile ? "center" : "start",
      fontSize: isMobile ? "0.7rem" : "1rem",
      marginBottom: "20px",
      color: "#ffffff",
    },
    searchBox: {
      display: "flex",
      justifyContent: isMobile ? "center" : "start",
      alignItems: "center",
      marginBottom: "30px",
    },
    searchInput: {
      width: "80%",
      padding: isMobile ? "5px" : "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px 0px 0px 5px",
      color: "#000000",
    },
    searchButton: {
      backgroundColor: "#FF6E05",
      color: "#fff",
      border: "none",
      padding: isMobile ? "10px" : "15px",
      marginLeft: "0px",
      cursor: "pointer",
      borderRadius: "0px 5px 5px 0px",
      display: "flex",
      justifyContent: "center",
    },
    text: {
      maxWidth: "25ch",
      fontSize: "12px",
      color: "white",
      borderBottom: "1px solid white",
    },
    icons: {
      display: "grid",
      gap: "20px",
      marginBottom: "20px",
    },
    iconBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconImage: {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
    },
    topLeading: {
      display: "flex",
      justifyContent: "start",
      color: "#fff44f",
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.heroRight}>
      <div style={styles.heroContent}>
        <h3 style={styles.heading}>#India'sTopReliable</h3>
        <h1 style={styles.mainHeading}>DISTANCE EDUCATION SCHOOL</h1>
        <p style={styles.description}>
          We Ease the Process to Achieve Distance & Online Degree
        </p>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Course & University"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
        <div className="icons-container" style={styles.icons}>
          <div style={styles.iconBox}>
            <img
              src={Tlogo4}
              alt="Top 10 MBA Universities"
              style={styles.iconImage}
            />
            <p style={styles.text}>Top 10 Distance University</p>
          </div>
          <div style={styles.iconBox}>
            <img
              src={Tlogo3}
              alt="UGC-DEB Approved Universities"
              style={styles.iconImage}
            />
            <p style={styles.text}>UGC-DEB Approved Universities 2024</p>
          </div>
          <div style={styles.iconBox}>
            <img
              src={Tlogo2}
              alt="Top 10 MCA Universities"
              style={styles.iconImage}
            />
            <p style={styles.text}>Top 10 Online Universities</p>
          </div>
          <div style={styles.iconBox}>
            <img
              src={Tlogo}
              alt="NIRF Ranked Universities"
              style={styles.iconImage}
            />
            <p style={styles.text}>NIRF Ranked Universities 2024</p>
          </div>
        </div>
        <div style={styles.topLeading}>
          <h3>Top Leading Universities</h3>
        </div>
      </div>
      <LogoSlider />
      <style>
        {`
          @media (max-width: 768px) {
            .icons-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 769px) {
            .icons-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
}

export default ContentRight;
