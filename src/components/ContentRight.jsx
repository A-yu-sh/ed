import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons
import Tlogo from "../assets/Tlogo.png";
import Tlogo2 from "../assets/Tlogo2.png";
import Tlogo3 from "../assets/Tlogo3.png";
import Tlogo4 from "../assets/Tlogo4.png";
import LogoSlider from "./AutomaticSlideShow";

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
      marginBottom: "10px",
      color: "#ffffff",
    },

    mainHeading: {
      display: "flex",
      justifyContent: "start",
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#fff44f",
    },
    description: {
      display: "flex",
      justifyContent: "start",
      fontSize: "1rem",
      marginBottom: "20px",
      color: "#ffffff",
    },
    searchBox: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      marginBottom: "30px",
      width: "100%", // Ensure full width to align input and button together
    },
    searchInput: {
      flex: 0, // Makes the input take up the remaining space
      padding: "10px 20px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px 0 0 5px", // Rounded left corner for input
      color: "#000000",
      marginRight: "0", // Remove margin between input and button
    },
    searchButton: {
      backgroundColor: "#FF6E05",
      color: "#fff",
      border: "none",
      padding: "13px 0px",
      cursor: "pointer",
      borderRadius: "0 5px 5px 0", // Rounded right corner for button
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80px", // Fixed width for the button to match input height
    },
    text: {
      maxWidth: "25ch",
      fontSize: "12px",
      color: "white",
      borderBottom: "1px solid white",
    },
    icons: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      marginBottom: "20px",
    },
    iconBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconImage: {
      width: "80px",
      height: "80px",
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
            <FaSearch size={20} /> {/* Search icon */}
          </button>
        </div>
        <div style={styles.icons}>
          <div style={styles.iconBox}>
            <img
              src={Tlogo4}
              alt="Top 10 MBA Universities"
              style={styles.iconImage}
            />
            <p style={styles.text}>Top 10 MBA Universities in India</p>
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
            <p style={styles.text}>Top 10 MCA Universities in India</p>
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
    </div>
  );
}

export default ContentRight;
