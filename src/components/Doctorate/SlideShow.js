import React, { useState, useEffect, useCallback } from "react";
import i1 from "../../assets/PHD Univiersity logo/Asian international University,.jpeg";
import i2 from "../../assets/PHD Univiersity logo/Glocal University .jpeg";
import i3 from "../../assets/PHD Univiersity logo/Mahaveer university.jpeg";
import i4 from "../../assets/PHD Univiersity logo/Mejor SD Singh University.jpeg";
import i5 from "../../assets/PHD Univiersity logo/Sikim Professional University.jpeg";
import i6 from "../../assets/PHD Univiersity logo/Sikkim Skill University.jpeg";

const PHDUnderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  const logos = [i1, i2, i3, i4, i5, i6];
  const extendedLogos = [...logos, ...logos.slice(0, itemsPerView)];

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= logos.length) {
      setIsTransitioning(true);
      setCurrentIndex(0);
      setTimeout(() => setIsTransitioning(false), 50);
    }
  }, [currentIndex, logos.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [logos.length]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(5);
      }
    };

    window.addEventListener("resize", updateItemsPerView);
    updateItemsPerView(); // Initial check

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const style = {
    sliderContainer: {
      maxWidth: "1920px",
      overflow: "hidden",
      position: "relative",
      padding: "10px 0",
      margin: "0 auto",
      marginTop: "40px",
      borderRadius: "12px",
      backgroundColor: "transparent",
    },
    logoContainer: {
      display: "flex",
      transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
      transition: isTransitioning ? "none" : "transform 0.5s ease",
    },
    logoWrapper: {
      minWidth: `${100 / itemsPerView}%`,
      padding: "0 5px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: window.innerWidth <= 768 ? "120px" : "180px", // Adjust height for mobile
    },
    logo: {
      width: "80%",
      height: "auto",
      objectFit: "contain",
      transition: "transform 0.3s ease",
      filter: "brightness(1.2)",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    text: {
      fontSize: window.innerWidth <= 768 ? "24px" : "36px", // Adjust font size for mobile
      fontWeight: 700,
      color: "#000000",
      margin: 0,
      textTransform: "uppercase",
    },
  };
  return (
    <div style={style.sliderContainer}>
      <div style={style.text}>
        <h1>Your All-in-One Destination for the PhD Program</h1>
      </div>
      <div style={style.logoContainer} onTransitionEnd={handleTransitionEnd}>
        {extendedLogos.map((logo, index) => (
          <div key={index} style={style.logoWrapper}>
            <img
              src={logo}
              alt={`University Logo ${(index % logos.length) + 1}`}
              style={{
                ...style.logo,
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                isolation: "isolate",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.filter = "brightness(1.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1.2)";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PHDUnderSlider;
