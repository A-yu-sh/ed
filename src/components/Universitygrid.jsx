import React from "react";
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


const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage },
  { name: "Aligarh Muslim University", image: VGUImage },
  { name: "Jamia-Milia-Islamia University ", image: DUImage },
  { name: "Andhra University  ", image: AmityImage },
  { name: " Mizoram Central University", image: AmritaImage2 },
  { name: "University of Hyderabad   ", image: HONImage },
  { name: "Sambalpur University ", image: SImage },
  { name: "Amrita University ", image: PCImage },
  { name: "Jain University ", image: PC2Image },
  { name: "Chindagar University  ", image: PC3Image2 },
  { name: "DPU University ", image: PC4Image },
  { name: "Amity University ", image: PC5Image },
  { name: "Mangalayanta University ", image: PC6Image },
  { name: "Manipal Collage ", image: PC7Image },
  { name: "SGVU University ", image: PC8Image },
  
];

const UniversityGrid = ({ onCompareClick }) => {
  return (
    <div className="university-grid">
      <style>
        {`
          .university-grid {
            padding: 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .university-grid h1 {
            text-align: center;
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }

          .university-grid p {
            text-align: center;
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);  /* Exactly 5 columns */
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .grid-item {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.5rem;
          }

          .grid-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }

          .university-image {
            width: 150px;
            height: 150px;
            object-fit: contain;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
          }

          .grid-item:hover .university-image {
            transform: scale(1.05);
          }

          .grid-item h3 {
            color: #2c3e50;
            font-size: 1rem;
            text-align: center;
            margin: 0;
            padding: 0.5rem;
            font-weight: 600;
          }

          .compare-button-container {
            text-align: center;
            margin-top: 2rem;
          }

          .compare {
            background-color: #ff6b00;
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 6px rgba(255, 107, 0, 0.3);
          }

          .compare:hover {
            background-color: #e86100;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(255, 107, 0, 0.4);
          }

          .compare:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(255, 107, 0, 0.4);
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
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }

            .grid-item {
              padding: 1rem;
            }

            .university-image {
              width: 120px;
              height: 120px;
            }
          }

          @media (max-width: 480px) {
            .grid-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <h1>Online & Distance Education Universities</h1>
      <p>
        Discover information about higher education through distance and online
        universities in India.
      </p>
      <div className="grid-container">
        {universities.map((university, index) => (
          <div key={index} className="grid-item">
            <img
              src={university.image}
              alt={university.name}
              className="university-image"
            />
            <h3>{university.name}</h3>
          </div>
        ))}
      </div>
      <div className="compare-button-container">
        <button className="compare" onClick={onCompareClick}>
          Compare Universities
        </button>
      </div>
    </div>
  );
};

export default UniversityGrid;
