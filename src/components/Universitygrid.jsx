import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JuImage from "../assets/Goverment University image/Goverment University image/Acharya Nagarjuna.png";
import VGUImage from "../assets/Goverment University image/Goverment University image/Aligarh Muslim.png";
import DUImage from "../assets/Jamia-Milia-Islamia.jpg";
import AmityImage from "../assets/Andhra University.jpg";
import AmritaImage2 from "../assets/Mizoram Central University.png";
import HONImage from "../assets/Goverment University image/Goverment University image/University of Hyderabad.png";
import SImage from "../assets/Sambalpur.png";
import PCImage from "../assets/Amrita university Sixe Fix.png";
import PC2Image from "../assets/JU.jpeg";
import PC3Image2 from "../assets/Chindagar University Size fix.png";
import PC4Image from "../assets/DPU University.png";
import PC5Image from "../assets/Amity university Fix Size.png";
import PC6Image from "../assets/Mangalayanta University.png";
import PC7Image from "../assets/Manipal Collage.png";
import PC8Image from "../assets/SGVU University.png";
import PC9Image from "../assets/Sharda University.png";
import PC10Image from "../assets/Shobhit University.png";
import PC11Image from "../assets/SMU Collage.png";
import PC12Image from "../assets/Goverment University image/Private University  Image/LPU University.png";
import PC13Image from "../assets/Goverment University image/Private University  Image/UPES  university.png";

const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage },
  { name: "Aligarh Muslim University", image: VGUImage },
  { name: "Jamia University", image: DUImage },
  { name: "Andhra University", image: AmityImage },
  { name: "Mizoram University", image: AmritaImage2 },
  { name: "University of Hyderabad", image: HONImage },
  { name: "Sambalpur University", image: SImage },
  { name: "Amrita University", image: PCImage },
  { name: "Jain University", image: PC2Image },
  { name: "Chandigarh University", image: PC3Image2 },
  { name: "DPU University", image: PC4Image },
  { name: "Amity University", image: PC5Image },
  { name: "Mangalayatan University", image: PC6Image },
  { name: "Manipal College", image: PC7Image },
  { name: "SGVU University", image: PC8Image },
  { name: "Sharda University", image: PC9Image },
  { name: "Shobhit University", image: PC10Image },
  { name: "SMU University", image: PC11Image },

  { name: "UPES University", image: PC13Image },
  { name: "Lovely Professional University", image: PC12Image },
];

const UniversityGrid = ({ onCompareClick }) => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateView);
    updateView();

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const displayedUniversities =
    showMore || !isMobile ? universities : universities.slice(0, 6);

  return (
    <div className="university-grid">
      <style>
        {`
  /* General Styles (unchanged) */
.compare {
  background: #FF6E05;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  margin-top: 1rem;
}

.university-grid {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8f9fa;
  text-align: center;
}

.university-grid h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
      display:flex;
    justify-content:center;
}

.university-grid p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 60px;
  box-sizing: border-box;
}

.grid-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.grid-item:hover {
  transform: scale(1.05);
}

.university-image {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover .university-image {
  transform: scale(1.1);
}

.text {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.view-more-button,
.compare-button-container .compare {
  background: #FF6E05;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
}

.view-more-button:hover,
.compare-button-container .compare:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
}

/* Mobile (Below 480px) */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(160px, 1fr)); /* Two cards per row */
    gap: 20px;
    padding: 0 10px;
    justify-items: center;
  }

  .university-image {
    width: 300px;
    height: 300px;
  }

  .text {
    font-size: 14px;
    margin-top: 10px;
  }

  .grid-item {
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
  }
}

/* Tablet (800px to 1200px) */
@media (min-width: 800px) and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, minmax(220px, 1fr)); /* Three cards per row */
    gap: 25px;
    padding: 40px; /* Less padding to fit more on the screen */
    display:flex;
    justify-content:center;
  }

  .university-image {
    width: 600px; /* Slightly bigger image */
    height: 600px;
  }

  .text {
    font-size: 16px; /* Slightly smaller text for more space */
  }

  .grid-item {
    padding: 18px; /* Smaller padding inside cards */
  }
}

@media (width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 15px;
              display:flex;
    justify-content:center;

  }

  .university-image {
    width: 500px;
    height: 500px;
  }

  .text {
    font-size: 16px;
  }

  .grid-item {
    padding: 18px;
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(5, 1fr);
  }

  .university-image {
    width: 800px;
    height: 800px;
  }

  .text {
    font-size: 20px;
    padding: 20px;
  }
}

  `}
      </style>

      <h1>Online & Distance Education Universities</h1>
      <p>
        Discover information about higher education through distance and online
        universities in India. Compare programs and find the perfect fit for
        your educational journey.
      </p>
      <div className="grid-container">
        {displayedUniversities.map((university, index) => (
          <div key={index} className="grid-item">
            <img
              src={university.image}
              alt={university.name}
              className="university-image"
            />
            <h4 className="text">{}</h4>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="compare-button-container">
          <button
            className="view-more-button"
            onClick={() => setShowMore(!showMore)}>
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
      <div className="compare-button-container">
        <Link to="/compare" className="compare" onClick={onCompareClick}>
          Compare Universities
        </Link>
      </div>
    </div>
  );
};

export default UniversityGrid;
