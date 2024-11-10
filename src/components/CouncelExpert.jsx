import React, { useState, useEffect, useCallback } from "react";
import DImg from "../assets/AI2.jpg";
import AImg from "../assets/AI3.jpg";
import A1Img from "../assets/AI1.jpg";
import AI2Img from "../assets/AI4.jpeg";

const CounselorExpert = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const counselors = [
    {
      name: "Amelia Grece",
      experience: "3 Years of Experience",
      guidance: "Guiding for Skill Development",
      qualifications: [
        "MBA HR & Marketing (AKTU, Lucknow)",
        "BSC (Dr. Bhimrao Ambedkar University, Agra)",
      ],
      image: DImg,
    },
    {
      name: "Olivia James",
      experience: "5 Years of Experience",
      guidance: "Software Development",
      qualifications: [
        "BSC in Computer Science (North Bengal University)",
        "MCA (Siliguri Institute of Technology)",
      ],
      image: AImg,
    },
    {
      name: "Nilesh Guha",
      experience: "14 Years of Experience",
      guidance: "Guiding Marketing Students",
      qualifications: [
        "MBA Marketing (Sikkim Manipal University, Gangtok)",
        "BCOM (Delhi University)",
      ],
      image: A1Img,
    },
    {
      name: "Henry William",
      experience: "4 Years of Experience",
      guidance: "MERN Stack Developers",
      qualifications: [
        "BCA (Siliguri Institute of Technology)",
        "MCA (Siliguri Institute of Technology)",
      ],
      image: AI2Img,
    },
    {
      name: "John Doe",
      experience: "8 Years of Experience",
      guidance: "Guiding Psychology Students",
      qualifications: [
        "M.A. Psychology (Stanford University)",
        "B.A. Psychology (Yale University)",
      ],
      image: DImg,
    },
  ];

  const extendedCounselors = [...counselors, ...counselors, ...counselors];

  const moveNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => {
        if (prev >= counselors.length - 1) {
          setTimeout(() => {
            setIsTransitioning(false);
            setActiveIndex(0);
          }, 1000);
          return prev + 1;
        }
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000);
        return prev + 1;
      });
    }
  }, [isTransitioning, counselors.length]);

  useEffect(() => {
    const intervalId = setInterval(moveNext, 3000);
    return () => clearInterval(intervalId);
  }, [moveNext]);

  const getTransformValue = () => {
    const baseTransform = (activeIndex * 100) / itemsToShow;
    return `translateX(-${baseTransform}%)`;
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      maxWidth: "1920px",
      margin: "0 auto",
      overflow: "hidden",
      marginBottom: "20px",
    },
    counselorCardsContainer: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
    counselorCards: {
      display: "flex",
      transition: isTransitioning ? "transform 1s ease" : "none",
      transform: getTransformValue(),
      marginLeft: "0",
    },
    card: {
      flex: `0 0 ${100 / itemsToShow}%`,
      padding: "0 10px",
      boxSizing: "border-box",
    },
    cardContent: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: "20px",
      height: "100%",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      objectFit: "cover",
      marginBottom: "15px",
      border: "4px solid #28a745",
    },
    name: {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#333",
      margin: "10px 0",
    },
    experience: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "10px",
    },
    guidance: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "15px",
    },
    qualifications: {
      listStyleType: "none",
      padding: "0",
      margin: "0 0 15px 0",
      fontSize: "0.9rem",
      color: "#555",
    },
    connectButton: {
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      fontSize: "0.9rem",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "#218838",
      },
    },
    // Media queries applied through inline styles
    title: {
      fontSize: window.innerWidth <= 768 ? "1.5rem" : "2rem",
      marginBottom: "1rem",
    },
    description: {
      fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
      marginBottom: "2rem",
      padding: "0 20px",
    },
  };

  // Additional styles for mobile
  if (window.innerWidth <= 768) {
    styles.img = {
      ...styles.img,
      width: "80px",
      height: "80px",
    };
    styles.name = {
      ...styles.name,
      fontSize: "1rem",
    };
    styles.experience = {
      ...styles.experience,
      fontSize: "0.9rem",
    };
    styles.guidance = {
      ...styles.guidance,
      fontSize: "0.8rem",
    };
    styles.qualifications = {
      ...styles.qualifications,
      fontSize: "0.8rem",
    };
    styles.connectButton = {
      ...styles.connectButton,
      padding: "8px 16px",
      fontSize: "0.8rem",
    };
    styles.cardContent = {
      ...styles.cardContent,
      padding: "15px",
    };
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Meet Our Expert Counselors</h2>
      <p style={styles.description}>
        Our counselors are experts in their respective fields and are here to
        guide you in your educational journey.
      </p>

      <div style={styles.counselorCardsContainer}>
        <div style={styles.counselorCards}>
          {extendedCounselors.map((counselor, idx) => (
            <div key={`${counselor.name}-${idx}`} style={styles.card}>
              <div style={styles.cardContent}>
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  style={styles.img}
                />
                <h3 style={styles.name}>{counselor.name}</h3>
                <p style={styles.experience}>{counselor.experience}</p>
                <p style={styles.guidance}>{counselor.guidance}</p>
                <ul style={styles.qualifications}>
                  {counselor.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
                <button style={styles.connectButton}>Connect Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorExpert;
