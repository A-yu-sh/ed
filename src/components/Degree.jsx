import React from "react";

// Import images from assets (ensure these paths are correct in your project)
import mbaIcon from "../assets/logo1.png";
import mcaIcon from "../assets/logo2.png";
import bbaIcon from "../assets/logo3.png";
import bcaIcon from "../assets/logo4.png";
import bcomIcon from "../assets/logo5.png";
import mcomIcon from "../assets/logo6.png";
import baIcon from "../assets/logo 7.png";
import maIcon from "../assets/logo 8.png";
import mscIcon from "../assets/logo9.png";
import diplomaIcon from "../assets/logo10.png";
import bscIcon from "../assets/logo11.png";
import bjmcIcon from "../assets/logo12.png";
import mjmcIcon from "../assets/logo13.png";
import pgpIcon from "../assets/logo14.png";
import certificateIcon from "../assets/logo15.png";

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
    <div className="subject-container">
      {subjects.map((subject, index) => (
        <div key={index} className="subject-box">
          {/* Render the image instead of emoji */}
          <img src={subject.icon} alt={subject.name} className="icon" />
          <div className="subject-name">{subject.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SubjectBoxes;
