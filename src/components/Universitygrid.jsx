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
import PC9Image from "../assets/Sharda University.png";
import PC10Image from "../assets/Shobhit University.png";
import PC11Image from "../assets/SMU Collage.png";
import i1 from "../assets/GOVT logo/Acharya_Nagarjuna_University_crest.png";
import i2 from "../assets/GOVT logo/Aligarh_Muslim_University_logo.png";
import i3 from "../assets/University logo Folder/Amity University Logo.png";
import i4 from "../assets/University logo Folder/Amrita university logo.png";
import i5 from "../assets/GOVT logo/Andhra University.jpg";
import i6 from "../assets/University logo Folder/Chindagar University Logo.png";
import i7 from "../assets/University logo Folder/DPU University Logo.jpeg";
import i8 from "../assets/University logo Folder/Ignou logo.png";
import i9 from "../assets/University logo Folder/Jain logo.png";
import i10 from "../assets/GOVT logo/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png";
import i11 from "../assets/University logo Folder/LPU logo.jpeg";
import i12 from "../assets/University logo Folder/Mangalayatan University Logo.png";
import i13 from "../assets/University logo Folder/Manipal logo.png";
import i14 from "../assets/University logo Folder/Mizoram University Logo.png";
import i15 from "../assets/University logo Folder/SGVU logo.png";
import i16 from "../assets/University logo Folder/SMU logo.jpeg";
import i17 from "../assets/GOVT logo/Sambalpur_University_logo.png";
import i18 from "../assets/University logo Folder/Sharda University Logo.png";
import i19 from "../assets/University logo Folder/Shobhit University Logo.jpeg";
import i20 from "../assets/University logo Folder/Shooline Logo.png";
import i21 from "../assets/University logo Folder/UPES University Logo.jpeg";
import i22 from "../assets/GOVT logo/University_of_Hyderabad_Logo.png";
import i23 from "../assets/University logo Folder/Uttranchal University Logo.png";
import i24 from "../assets/University logo Folder/VGU Logo.png";
import i25 from "../assets/University logo Folder/Vignans University Logo.png";
import { Link } from "react-router-dom";

const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage, logo: i1 },
  { name: "Aligar Muslim University", image: VGUImage, logo: i2 },
  { name: "Jamia University ", image: DUImage, logo: i10 },
  { name: "Andhra University  ", image: AmityImage, logo: i5 },
  { name: "University of Hyderabad   ", image: AmritaImage2, logo: i22 },
  { name: "Sambalpur University ", image: SImage, logo: i17 },
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
            margin-bottom: 1rem;
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
          
          .text{
          font-size: 18px;
          color: #2C3E50;
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
              grid-template-columns: repeat(2, 1fr);
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
              width: 120px;
              height: 120px;
            }

            .university-logo {
              width: 50px;
              height: 50px;
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
            <div>
              <h4 className="text">{university.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="compare-button-container">
        <Link to="/compare" className="compare" onClick={onCompareClick}>
          Compare Universities
        </Link>
      </div>
    </div>
  );
};

export default UniversityGrid;
