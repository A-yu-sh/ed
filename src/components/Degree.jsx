import React from "react";

// Import images from assets
import mbaIcon from "../assets/10.png";
import mcaIcon from "../assets/5.png";
import bbaIcon from "../assets/2.png";
import bcaIcon from "../assets/9.png";
import bcomIcon from "../assets/3.png";
import mcomIcon from "../assets/4.png";
import baIcon from "../assets/11.png";
import maIcon from "../assets/6.png";
import mscIcon from "../assets/8.png";
import diplomaIcon from "../assets/12.png";
import bscIcon from "../assets/14.png";
import bjmcIcon from "../assets/7.png";
import mjmcIcon from "../assets/1.png";
import pgpIcon from "../assets/15.png";
import certificateIcon from "../assets/13.png";
import { Link } from "react-router-dom";

const SubjectBoxes = () => {
  const subjects = [
    { name: "MBA", icon: mbaIcon },
    { name: "MCA", icon: mcaIcon },
    { name: "BBA", icon: bbaIcon },
    { name: "BCA", icon: bcaIcon },
    { name: "BCOM", icon: bcomIcon },
    { name: "MCOM", icon: mcomIcon },
    { name: "BA", icon: baIcon },
    { name: "MA", icon: maIcon },
    { name: "MSC", icon: mscIcon },
    { name: "DIPLOMA", icon: diplomaIcon },
    { name: "BSC", icon: bscIcon },
    { name: "BJMC", icon: bjmcIcon },
    { name: "MJMC", icon: mjmcIcon },
    { name: "PGP", icon: pgpIcon },
    { name: "CERTIFICATE", icon: certificateIcon },
  ];

  return (
    <div>
      <div className="subject-container">
        {subjects.map((subject, index) => (
          <Link
            to="/filter"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            key={index}>
            <div className="subject-box">
              <img src={subject.icon} alt={subject.name} className="icon" />
              <div className="subject-name">{subject.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        /* Center Grid Container */
        .subject-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-left: 10px;
          justify-content: center; /* Center the grid horizontally */
          padding: 60px; /* Equal padding on all sides */
          box-sizing: border-box;
        }

        .subject-box {
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
        }

        .subject-box:hover {
          transform: scale(1.05);
        }

        .icon {
          width: 70px;
          height: 70px;
          margin-bottom: 10px;
          object-fit: cover;
        }

        .subject-name {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        /* Responsive Styling */
        @media (max-width: 480px) {
          .subject-container {
            grid-template-columns: repeat(
              2,
              minmax(120px, 1fr)
            ); /* Adjust box size for smaller screens */
            gap: 10px; /* Reduce gap between boxes */
            padding: 30px; /* Reduce padding for mobile */
          }

          .icon {
            width: 50px;
            height: 50px;
          }

          .subject-name {
            font-size: 14px;
          }

          .subject-box {
            padding: 15px; /* Reduce padding inside the box */
          }
        }

        @media (max-width: 768px) {
          .subject-container {
            grid-template-columns: repeat(
              2,
              minmax(140px, 1fr)
            ); /* Three boxes per row on tablets */
            gap: 15px;
          }

          .icon {
            width: 55px;
            height: 55px;
          }

          .subject-name {
            font-size: 15px;
          }

          .subject-box {
            padding: 18px;
          }
        }

        @media (min-width: 1024px) {
          .subject-container {
            grid-template-columns: repeat(
              5,
              1fr
            ); /* Five boxes per row on desktop */
          }

          .icon {
            width: 80px;
            height: 80px;
          }

          .subject-name {
            font-size: 20px;
          }

          .subject-box {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SubjectBoxes;
