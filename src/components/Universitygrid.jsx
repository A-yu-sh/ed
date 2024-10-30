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

const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage },
  { name: "Aligar Muslim University", image: VGUImage },
  { name: "Jamia University ", image: DUImage },
  { name: "Andhra University  ", image: AmityImage },
  { name: "University of Hyderabad   ", image: AmritaImage2 },
  { name: "University of Hyderabad  ", image: HONImage },
  { name: "Sambalpur University ", image: SImage },
  { name: "Amrita University ", image: PCImage },
  { name: "Jain University ", image: PC2Image },
  { name: "Chindagar University  ", image: PC3Image2 },
  { name: "DPU University ", image: PC4Image },
  { name: "Amity University ", image: PC5Image },
  { name: "Mangalayanta University ", image: PC6Image },
  { name: "Manipal Collage ", image: PC7Image },
  { name: "SGVU University ", image: PC8Image },
  { name: "Sharda University ", image: PC9Image },
  { name: "Shobhit University ", image: PC10Image },
  { name: "SMU University ", image: PC11Image },
];

const UniversityGrid = ({ onCompareClick }) => {
  return (
    <div className="university-grid">
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
            <img
              src={university.logo}
              alt={`${university.name} logo`}
              className="university-logo"
            />
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
