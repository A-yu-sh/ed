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
  // Updated subjects array with image imports
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
            }}>
            <div key={index} className="subject-box">
              {/* Render the image and subject name */}

              <img src={subject.icon} alt={subject.name} className="icon" />
              <div className="subject-name">{subject.name}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* CSS styles for responsiveness */}
      <style jsx>{`
        /* Basic Styling for Subject Boxes */
        .subject-container {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(150px, 1fr)
          ); /* Responsive grid */
          gap: 20px; /* Space between boxes */
          padding: 20px;
        }

        .subject-box {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .subject-box:hover {
          transform: scale(1.05);
          transition: transform 0.3s;
        }

        .icon {
          width: 60px; /* Icon size */
          height: 60px;
          object-fit: cover; /* Ensure the image covers the box proportionally */
          margin-bottom: 10px;
        }

        .subject-name {
          font-size: 16px;
          color: #333;
          font-weight: bold;
        }

        /* Media Queries for Responsiveness */

        /* For small screens (e.g., mobile) */
        @media (max-width: 480px) {
          .subject-container {
            grid-template-columns: 1fr 1fr; /* Two items per row */
          }

          .subject-name {
            font-size: 14px; /* Smaller text size on mobile */
          }

          .icon {
            width: 50px; /* Smaller icons on mobile */
            height: 50px;
          }
        }

        /* For medium screens (e.g., tablets) */
        @media (max-width: 768px) {
          .subject-container {
            grid-template-columns: 1fr 1fr; /* Three items per row */
          }

          .subject-name {
            font-size: 15px; /* Slightly smaller text size on tablets */
          }

          .icon {
            width: 55px; /* Slightly smaller icons on tablets */
            height: 55px;
          }
        }

        /* For large screens (e.g., desktop) */
        @media (min-width: 1024px) {
          .subject-container {
            grid-template-columns: repeat(
              3,
              1fr
            ); /* Four items per row on desktop */
          }

          .icon {
            width: 70px; /* Larger icons on desktop */
            height: 70px;
          }

          .subject-name {
            font-size: 18px; /* Larger text size on desktop */
          }
        }
      `}</style>
    </div>
  );
};

export default SubjectBoxes;
