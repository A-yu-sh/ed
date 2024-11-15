import React from "react";
import Tlogo from "../assets/Tlogo.png";
import Tlogo2 from "../assets/Tlogo2.png";
import Tlogo3 from "../assets/Tlogo3.png";
import Tlogo4 from "../assets/Tlogo4.png";
import LogoSlider from "./AutomaticSlideShow";

function ContentRight() {
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
      justifyContent: "start",
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
    },
    searchInput: {
      width: "70%",
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      color: "#000000",
    },
    searchButton: {
      backgroundColor: "#FF6E05",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      marginLeft: "10px",
      cursor: "pointer",
      borderRadius: "5px",
    },
    text: {
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
            placeholder="Search Course & University e.g. BA MBA MA BBA"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>Search</button>
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
