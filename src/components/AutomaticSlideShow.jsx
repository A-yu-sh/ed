import React, { useState, useEffect, useCallback } from "react";
// Import statements for all university logos
import i1 from "../assets/University logo Folder/Acharya Nagarjuna University logo.jpeg";
import i2 from "../assets/University logo Folder/Aligarh Mushlim University logo.png";
import i3 from "../assets/University logo Folder/Amity University Logo.png";
import i4 from "../assets/University logo Folder/Amrita university logo.png";
import i5 from "../assets/University logo Folder/AndhraUniversitylogo.png";
import i6 from "../assets/University logo Folder/Chindagar University Logo.png";
import i7 from "../assets/University logo Folder/DPU University Logo.jpeg";
import i8 from "../assets/University logo Folder/Ignou logo.png";
import i9 from "../assets/University logo Folder/Jain logo.png";
import i10 from "../assets/University logo Folder/Jamia University (A) logo.png";
import i11 from "../assets/University logo Folder/LPU logo.jpeg";
import i12 from "../assets/University logo Folder/Mangalayatan University Logo.png";
import i13 from "../assets/University logo Folder/Manipal logo.png";
import i14 from "../assets/University logo Folder/Mizoram University Logo.png";
import i15 from "../assets/University logo Folder/SGVU logo.png";
import i16 from "../assets/University logo Folder/SMU logo.jpeg";
import i17 from "../assets/University logo Folder/Sambalpur University (A+) logo.jpeg";
import i18 from "../assets/University logo Folder/Sharda University Logo.png";
import i19 from "../assets/University logo Folder/Shobhit University Logo.jpeg";
import i20 from "../assets/University logo Folder/Shooline Logo.png";
import i21 from "../assets/University logo Folder/UPES University Logo.jpeg";
import i22 from "../assets/University logo Folder/University of Hyderabad  Online Courses (A) logo.jpeg";
import i23 from "../assets/University logo Folder/Uttranchal University Logo.png";
import i24 from "../assets/University logo Folder/VGU Logo.png";
import i25 from "../assets/University logo Folder/Vignans University Logo.png";

/**
 * LogoSlider Component
 * A responsive, infinite-scrolling carousel that displays university logos
 * Features:
 * - Automatic scrolling
 * - Infinite loop effect
 * - Smooth transitions
 * - Responsive design
 */
const LogoSlider = () => {
  // State to track the current position of the slider
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to control transition animation
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Base array of all university logos
  const logos = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24,
    i25,
  ];

  // Number of logos visible at once in the slider
  const itemsPerView = 4;

  // Create an extended array by adding first few logos at the end
  // This creates the illusion of infinite scrolling
  const extendedLogos = [...logos, ...logos.slice(0, itemsPerView)];

  /**
   * Handles the transition end event of the slider
   * When the last set of logos is reached, it seamlessly resets to the beginning
   */
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= logos.length) {
      // Temporarily disable transition
      setIsTransitioning(true);

      // Reset to the start
      setCurrentIndex(0);

      // Re-enable transition after a brief delay
      // This prevents visible jumping when resetting
      setTimeout(() => setIsTransitioning(false), 50);
    }
  }, [currentIndex, logos.length]);

  /**
   * Sets up the automatic scrolling effect
   * Moves the slider one position every 2 seconds
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Styling configuration object
  const style = {
    // Main container styles
    sliderContainer: {
      maxWidth: "1920px",
      overflow: "hidden",
      position: "relative",
      padding: "5px 0",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      marginTop: "40px", // Spacing from top elements
      borderRadius: "10px",
    },
    // Container for the scrolling logos
    logoContainer: {
      display: "flex",
      // Calculate the exact translation based on current index and visible items
      transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
      // Toggle transition based on whether we're resetting position
      transition: isTransitioning ? "none" : "transform 0.5s ease",
    },
    // Individual logo wrapper styles
    logoWrapper: {
      minWidth: `${100 / itemsPerView}%`, // Each wrapper takes up 1/4 of the container
      padding: "0 5px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60px",
    },
    // Individual logo image styles
    logo: {
      width: "250px",
      height: "45px",
      objectFit: "contain",
      padding: "3px",
      transition: "transform 0.3s ease",
      mixBlendMode: "multiply", // Helps with logo visibility on white background
      filter: "brightness(1.1)",
      WebkitFilter: "brightness(1.1)",
      borderRadius: "10px",
    },
  };

  return (
    <div style={style.sliderContainer}>
      <div style={style.logoContainer} onTransitionEnd={handleTransitionEnd}>
        {extendedLogos.map((logo, index) => (
          <div key={index} style={style.logoWrapper}>
            <img
              src={logo}
              alt={`University Logo ${(index % logos.length) + 1}`}
              style={{
                ...style.logo,
                // Performance optimizations for smoother animations
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                isolation: "isolate",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;

// import React, { useState, useEffect } from "react";
// import B1logo from "../assets/Group_1-removebg-preview.png";
// import B2logo from "../assets/Group_2-removebg-preview.png";
// import C1logo from "../assets/Group_3-removebg-preview.png";
// import DUlogo from "../assets/Group_4-removebg-preview.png";
// import AUlogo from "../assets/Group_5-removebg-preview.png";
// import Ignoulogoo from "../assets/Group_6-removebg-preview.png";
// // import B1 from "../assets/BannerSlide01-removebg-preview.png";

// const AutoSlideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: B1logo,
//     },
//     {
//       image: B2logo,
//     },
//     {
//       image: C1logo,
//     },
//     {
//       image: DUlogo,
//     },
//     {
//       image: AUlogo,
//     },
//     {
//       image: Ignoulogoo,
//     },
//     // {
//     //   image: B1,
//     // },
//   ];

// useEffect(() => {
//   const timer = setInterval(() => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   }, 3000); // Changes slide every 1 second

//   return () => clearInterval(timer);
// }, [slides.length]);

//   return (
//     <div className="slideshow-container">
//       <style>
//         {`
//           .slideshow-container {
//             position: relative;
//           }

//           .slide {
//             position: absolute;
//             left:-800px;
//             width: 70%;
//             height: 100%;
//             opacity: 0;
//             transition: opacity 0.5s ease-in-out;
//           }

//           .slide.active {
//             opacity: 1;
//           }

//           .slide img {
//           border-radius:10px;
//             object-fit: scale-down;
//           }

//           .slide-image {

//             height: 100%;
//           }

//           .slide-content {
//             position: absolute;

//             bottom: 0;
//             left: 0;
//             right: 0;
//             color: white;
//           }

//           .slide-title {
//             margin: 0;
//             font-size: 24px;
//             font-weight: 500;
//           }

//           @media (max-width: 768px) {
//             .slideshow-container {
//               height: 300px;
//             }

//             .slide-title {
//               font-size: 20px;
//             }
//           }

//           @media (max-width: 480px) {
//             .slideshow-container {
//               height: 200px;
//             }

//             .slide-title {
//               font-size: 16px;
//             }
//           }
//         `}
//       </style>

//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentSlide ? "active" : ""}`}>
//           <img src={slide.image} alt={slide.title} className="slide-image" />
//           <div className="slide-content">
//             <h2 className="slide-title">{slide.title}</h2>
//           </div>
//         </div>
//       ))}

//       {/* <div className="dots-container">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${index === currentSlide ? "active" : ""}`}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default AutoSlideshow;
