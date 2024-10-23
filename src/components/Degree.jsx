import React from "react";

// Import images from assets (ensure these paths are correct in your project)
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
          <div key={index} className="subject-box">
            {/* Render the image instead of emoji */}
            <img src={subject.icon} alt={subject.name} className="icon" />
            <div className="subject-name">{subject.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectBoxes;
