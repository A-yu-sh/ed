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
import "./univ.css";

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

// Import the external CSS file

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
