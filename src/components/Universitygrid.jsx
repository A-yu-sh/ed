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
import i1 from "../assets/University logo Folder/Acharya Nagarjuna University logo.jpeg";
import i2 from "../assets/University logo Folder/Aligarh Mushlim University logo.png";
import i3 from "../assets/University logo Folder/Amity University Logo.png";
import i4 from "../assets/University logo Folder/Amrita university logo.png";
import i5 from "../assets/University logo Folder/AndhraUniversitylogo.png";
import i6 from "../assets/University logo Folder/Chindagar University Logo.png";
import i7 from "../assets/University logo Folder/DPU University Logo.png";
import i8 from "../assets/University logo Folder/Ignou logo.png";
import i9 from "../assets/University logo Folder/Jain logo.png";
import i10 from "../assets/University logo Folder/Jamia University (A) logo.png";
import i11 from "../assets/University logo Folder/LPU logo.png";
import i12 from "../assets/University logo Folder/Mangalayatan University Logo.png";
import i13 from "../assets/University logo Folder/Manipal logo.png";
import i14 from "../assets/University logo Folder/Mizoram University Logo.png";
import i15 from "../assets/University logo Folder/SGVU logo.png";
import i16 from "../assets/University logo Folder/SMU logo.png";
import i17 from "../assets/University logo Folder/Sambalpur_University.png";
import i18 from "../assets/University logo Folder/Sharda University Logo.png";
import i19 from "../assets/University logo Folder/Shobhit University Logo.png";
import i20 from "../assets/University logo Folder/Shooline Logo.png";
import i21 from "../assets/University logo Folder/UPES University Logo.png";
import i22 from "../assets/University logo Folder/University of Hyderabad  Online Courses (A) logo.jpeg";
import i23 from "../assets/University logo Folder/Uttranchal University Logo.png";
import i24 from "../assets/University logo Folder/VGU Logo.png";
import i25 from "../assets/University logo Folder/Vignans University Logo.png";

const universities = [
  { name: "Acharya Nagarjuna University", image: JuImage, logo: i1 },
  { name: "Aligarh Muslim University", image: VGUImage, logo: i2 },
  { name: "Jamia University", image: DUImage, logo: i10 },
  { name: "Andhra University", image: AmityImage, logo: i5 },
  { name: "Mizoram University", image: AmritaImage2, logo: i14 },
  { name: "University of Hyderabad", image: HONImage, logo: i22 },
  { name: "Sambalpur University", image: SImage, logo: i17 },
  { name: "Amrita University", image: PCImage, logo: i4 },
  { name: "Jain University", image: PC2Image, logo: i9 },
  { name: "Chandigarh University", image: PC3Image2, logo: i6 },
  { name: "DPU University", image: PC4Image, logo: i7 },
  { name: "Amity University", image: PC5Image, logo: i3 },
  { name: "Mangalayatan University", image: PC6Image, logo: i12 },
  { name: "Manipal College", image: PC7Image, logo: i13 },
  { name: "SGVU University", image: PC8Image, logo: i15 },
  { name: "Sharda University", image: PC9Image, logo: i18 },
  { name: "Shobhit University", image: PC10Image, logo: i19 },
  { name: "SMU University", image: PC11Image, logo: i16 },
  { name: "UPES University", image: PC13Image, logo: i21 },
  { name: "Lovely Professional University", image: PC12Image, logo: i11 },
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
  background-color: white;
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

/* Base styles for the logo */
logoImage {
  max-width: 100%; /* Makes the image responsive */
  height: auto;    /* Maintains the aspect ratio */
  display: block;  /* Removes any extra white space below the image */
  margin: 0 auto;  /* Centers the logo */
}

/* Media queries for different devices */
@media (max-width: 1200px) {
  logoImage {
    width: 60%; /* Adjust width for large tablets or smaller laptops */
  }
}

@media (max-width: 768px) {
  logoImage {
    width: 50%; /* Adjust width for tablets */
  }
}

@media (max-width: 480px) {
  logoImage {
    width: 40%; /* Adjust width for mobile phones */
  }
}

@media (max-width: 320px) {
  logoImage {
    width: 30%; /* Adjust width for very small devices */
  }
}
/* Mobile-specific styles for h1 and p alignment */
@media (max-width: 768px) {
  .university-grid h1,
  .university-grid p {
    display: inline-block;
    margin: 0;
    padding: 0 0.5rem;
    vertical-align: middle; /* Align text vertically */
  }

  .university-grid h1 {
    font-size: 1rem; /* Slightly larger font for h1 */
    font-weight: 700;
  }

  .university-grid p {
    font-size: 0.5rem; /* Smaller font for p */
    color: #666;
  }

  .university-grid {
    text-align: center; /* Center-align text */
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
            <img src={university.logo} className={university.logoImage} />
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
