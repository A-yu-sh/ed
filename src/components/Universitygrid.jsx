import React from "react";
import JuImage from "../assets/Acharya Nagarjuna University.png";
import VGUImage from "../assets/Aligar Muslim University.png";
import DUImage from "../assets/Jamia University (A).png";
import AmityImage from "../assets/Andhra University (A++).png";
import AmritaImage2 from "../assets/Mizoram Central University Online Courses (A).png";
import HONImage from "../assets/University of Hyderabad  Online Courses (A).png";
import SImage from "../assets/Sambalpur University (A+).png";
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
import i1 from "../assets/University logo Folder/Acharya Nagarjuna University logo.jpeg";
import i2 from "../assets/University logo Folder/Aligarh Mushlim University logo.png";
import i3 from "../assets/University logo Folder/Amity University Logo.png";
import i4 from "../assets/University logo Folder/Amrita university logo.png";
import i5 from "../assets/University logo Folder/AndhraUniversitylogo.png";
import i6 from "../assets/University logo Folder/Chindagar University Logo.png";
import i7 from "../assets/University logo Folder/DPU University Logo.jpeg";

import i9 from "../assets/University logo Folder/Jain logo.png";
import i10 from "../assets/University logo Folder/Jamia University (A) logo.png";

import i12 from "../assets/University logo Folder/Mangalayatan University Logo.png";
import i13 from "../assets/University logo Folder/Manipal logo.png";

import i15 from "../assets/University logo Folder/SGVU logo.png";
import i16 from "../assets/University logo Folder/SMU logo.jpeg";
import i17 from "../assets/University logo Folder/Sambalpur University (A+) logo.jpeg";
import i18 from "../assets/University logo Folder/Sharda University Logo.png";
import i19 from "../assets/University logo Folder/Shobhit University Logo.jpeg";

import i22 from "../assets/University logo Folder/AndhraUniversitylogo.png";

import G1 from "../assets/Goverment Collage image/Andhra University.jpg";
import G2 from "../assets/Goverment Collage image/Acharya Nagarjuna.jpg";
import G3 from "../assets/Goverment Collage image/Aligarh Muslim.jpg";
import G4 from "../assets/Goverment Collage image/Jamia-Milia-Islamia.jpg";
import G5 from "../assets/Goverment Collage image/Mizoram Central University.png";
import G6 from "../assets/Goverment Collage image/Sambalpur.png";
import G7 from "../assets/Goverment Collage image/University of Hyderabad.png";

const universities = [
  { name: "Acharya Nagarjuna University", image: G2, logo: i1 },
  { name: "University of Hyderabad", image: G7, logo: i1 },
  { name: "Aligar Muslim University", image: G3, logo: i2 },
  { name: "Jamia University ", image: G4, logo: i10 },
  { name: "Andhra University  ", image: G1, logo: i5 },
  { name: "University of Hyderabad   ", image: G7, logo: i22 },
  { name: "Sambalpur University ", image: G6, logo: i17 },
  { name: "Amrita University ", image: PCImage, logo: i4 },
  { name: "Jain University ", image: PC2Image, logo: i9 },
  { name: "Chandigarh University  ", image: PC3Image2, logo: i6 },
  { name: "DPU University ", image: PC4Image, logo: i7 },
  { name: "Amity University ", image: PC5Image, logo: i3 },
  { name: "Mangalayanta University ", image: PC6Image, logo: i12 },
  { name: "Manipal Collage ", image: PC7Image, logo: i13 },
  { name: "SGVU University ", image: PC8Image, logo: i15 },
  { name: "Sharda University ", image: PC9Image, logo: i18 },
  { name: "Shobhit University ", image: PC10Image, logo: i19 },
  { name: "SMU University ", image: PC11Image, logo: i16 },
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
            margin-bottom: 1.5rem;
            transition: transform 0.3s ease;
            padding: 0.5rem;
          }

          .university-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: white;
            padding: 0.5rem;
            margin-top: -1rem;
            transition: transform 0.3s ease;
          }

          .grid-item:hover .university-image {
            transform: scale(1.05);
          }

          .grid-item:hover .university-logo {
            transform: scale(1.1);
          }

          .compare-button-container {
            text-align: center;
            margin-top: 2rem;
          }

          .compare {
            background: linear-gradient(45deg, #ff6b00, #ff8533);
            color: white;
            border: none;
            padding: 1.2rem 3rem;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
          }

          .compare:hover {
            background: linear-gradient(45deg, #ff8533, #ff6b00);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4);
          }

          .compare:active {
            transform: translateY(0);
            box-shadow: 0 2px 10px rgba(255, 107, 0, 0.4);
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
              padding: 1.5rem 1rem;
            }

            .university-image {
              width: 150px;
              height: 150px;
            }

            .university-logo {
              width: 60px;
              height: 60px;
            }
          }

          @media (max-width: 480px) {
            .grid-container {
              grid-template-columns: 1fr;
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
        {universities.map((university, index) => (
          <div key={index} className="grid-item">
            <img
              src={university.image}
              alt={university.name}
              className="university-image"
            />
            {/* <img
              src={university.logo}
              alt={`${university.name} logo`}
              className="university-logo"
            /> */}
            <div>{university.name}</div>
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
