import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JuImage from "../assets/Acharya Nagarjuna.jpg";
import VGUImage from "../assets/Aligarh Muslim.jpg";
import DUImage from "../assets/Jamia-Milia-Islamia.jpg";
import AmityImage from "../assets/Andhra University.jpg";
import AmritaImage2 from "../assets/Mizoram Central University.png";
import HONImage from "../assets/University of Hyderabad.png";
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

const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage },
  { name: "Aligarh Muslim University", image: VGUImage },
  { name: "Jamia University", image: DUImage },
  { name: "Andhra University", image: AmityImage },
  { name: "University of Hyderabad", image: AmritaImage2 },
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
    showMore || !isMobile ? universities : universities.slice(0, 5);

  return (
    <div className="university-grid">
      <style>
        {`
        .compare{
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
            padding: 2rem;
            max-width: 1400px;
            margin: 0 auto;
            background-color: #f8f9fa;
          }

          .university-grid h1 {
            text-align: center;
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .university-grid p {
            text-align: center;
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .grid-item {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 1.5rem;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .grid-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }

          .university-image {
            width: 180px;
            height: 180px;
            object-fit: cover;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
          }

          .grid-item:hover .university-image {
            transform: scale(1.05);
          }

          .view-more-button {
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

          .view-more-button:hover {
            background: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
          }

          @media (max-width: 1200px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .university-grid {
              padding: 1rem;
            }

            .university-grid h1 {
              font-size: 2rem;
            }

            .grid-container {
              grid-template-columns: 1fr;
              display: flex;
              justify-content: center;
            }

            .grid-item {
              padding: 1.5rem 1rem;
            }

            .university-image {
              width: 150px;
              height: 150px;
            }
          }

          @media (max-width: 480px) {
            .grid-container {
              grid-template-columns: 1fr;
              display: flex;
              justify-content: center;
            }

            .university-image {
              width: 200px;
              height: 200px;
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
            <h4 className="text">{university.name}</h4>
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
