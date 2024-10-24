import React, { useState, useEffect } from "react";
import DImg from "../assets/AI2.jpg"; // Importing image for one counselor
import AImg from "../assets/AI3.jpg"; // Importing image for another counselor
import A1Img from "../assets/AI1.jpg";
import AI2Img from "../assets/AI4.jpeg";

// Array containing details of all counselors
const counselors = [
  {
    name: "3 Years of Experience",
    experience: "Amelia Grece",
    guidance: "Guiding for Skill Development",
    qualifications: [
      "MBA HR & Marketing (AKTU, Lucknow)",
      "BSC (Dr. Bhimrao Ambedkar University, Agra)",
    ],
    image: DImg,
  },
  {
    name: "5 Years of Experience",
    experience: "Olivia James",
    guidance: "Software Development",
    qualifications: [
      "BSC in Computer science (North Bengal university)",
      "MCA. (Siliguri Institute of Technology)",
    ],
    image: AImg,
  },
  {
    name: "14 Years of Experience",
    experience: "Nilesh Guha",
    guidance: "Guiding Marketing Students",
    qualifications: [
      "MBA Marketing (Sikkim Manipal University, Gangtok)",
      "BCOM (Delhi University)",
    ],
    image: A1Img,
  },
  {
    name: "4 Years of Experience",
    experience: "Henry William",
    guidance: "MERN Stack Developers",
    qualifications: [
      "BCA. (Siliguri Institute of Technology)",
      "MCA. (Siliguri Institute of Technology)",
    ],
    image: AI2Img,
  },
  {
    name: "8 Years of Experience",
    experience: "John Doe",
    guidance: "Guiding Psychology Students",
    qualifications: [
      "M.A. Psychology (Stanford University)",
      "B.A. Psychology (Yale University)",
    ],
    image: DImg,
  },
];

const CounselorExpert = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index to track the currently displayed counselor cards
  const itemsToShow = 4; // Number of cards to show at a time

  // Function to show next set of counselors, one at a time
  const nextCounselor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % counselors.length);
  };

  // Function to show previous set of counselors, one at a time
  const prevCounselor = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + counselors.length) % counselors.length
    );
  };

  // Auto-slide functionality to change the counselor cards every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextCounselor();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="counselor-container">
      <h2 className="h2">Educational Counselor Photos</h2>
      <p>
        Connect with our skilled counseling experts, who are prepared to offer
        guidance and motivation as you continue on your journey toward personal
        growth and a brighter future.
      </p>

      {/* Navigation Buttons and Counselor Cards Container */}
      <div className="counselor-navigation">
        <button className="nav-button" onClick={prevCounselor}>
          &lt;
        </button>

        <div className="counselor-cards">
          {/* Display a subset of counselors based on current index */}
          {counselors
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((counselor, idx) => (
              <CounselorCard key={idx} counselor={counselor} />
            ))}
        </div>

        <button className="nav-button" onClick={nextCounselor}>
          &gt;
        </button>
      </div>

      {/* Slideshow Indicators */}
      <div className="slideshow-indicators">
        {Array.from({ length: Math.ceil(counselors.length / itemsToShow) }).map(
          (_, idx) => (
            <span
              key={idx}
              className={`dot ${
                idx === Math.floor(currentIndex / itemsToShow) ? "active" : ""
              }`}></span>
          )
        )}
      </div>
    </div>
  );
};

// Component for individual counselor card
const CounselorCard = ({ counselor }) => {
  return (
    <div className="card">
      {/* Display counselor's profile image */}
      <img src={counselor.image} alt={counselor.name} className="profile-img" />

      {/* Counselor's experience */}
      <div className="experience-badge">{counselor.experience}</div>

      {/* Name and guidance wrapped in a new div with a border */}
      <div className="name-guidance-container">
        <h3 className="name-title">{counselor.name}</h3>
        <p className="sub-title">{counselor.guidance}</p>
      </div>

      {/* Qualifications */}
      <div className="education-details">
        {counselor.qualifications.map((qual, idx) => (
          <p key={idx}>{qual}</p>
        ))}
      </div>

      {/* Button to connect with the counselor */}
      <button className="connect-now">
        <i className="fab fa-whatsapp"></i> Connect Now
      </button>
    </div>
  );
};

export default CounselorExpert;
