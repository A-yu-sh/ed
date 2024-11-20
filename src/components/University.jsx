import React, { useState } from "react";
import ANimage from "../assets/GOVT logo/Acharya_Nagarjuna_University_crest.png";
import AMimage from "../assets/GOVT logo/Aligarh_Muslim_University_logo.png";
import JMIimage from "../assets/GOVT logo/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png";
import AUimage from "../assets/GOVT logo/Andhra University.jpg";
import MCUimage from "../assets/GOVT logo/Mizoram_University_logo.png";
import Hlogo from "../assets/GOVT logo/University_of_Hyderabad_Logo.png";
import pv1 from "../assets/Goverment University image/Private university logo/Amity.jpg";
import pv2 from "../assets/Goverment University image/Private university logo/Amrita.jpg";
import pv3 from "../assets/Goverment University image/Private university logo/Chandigarh.jpg";
import pv4 from "../assets/Goverment University image/Private university logo/DPU.png";
import pv5 from "../assets/Goverment University image/Private university logo/Jain.jpg";
import pv6 from "../assets/Goverment University image/Private university logo/Lovely_Professional_University_logo.png";
import pv7 from "../assets/Goverment University image/Private university logo/Mangalayatan.jpeg";
import pv8 from "../assets/Goverment University image/Private university logo/Manipal.png";
import pv9 from "../assets/Goverment University image/Private university logo/SMU manipal.png";
import pv10 from "../assets/Goverment University image/Private university logo/Sharda_University_logo_no_wordmark.png";
import pv11 from "../assets/Goverment University image/Private university logo/Suresh Gyan Vihar university.jpg";
import pv12 from "../assets/Goverment University image/Private university logo/UPES.jpg";
import pv13 from "../assets/Goverment University image/Private university logo/Uttaranchal.png";
import pv14 from "../assets/Goverment University image/Private university logo/Vignan.jpeg";
import pv15 from "../assets/Goverment University image/Private university logo/Vivekananda global.png";
import pv16 from "../assets/Goverment University image/Private university logo/shobhit university.png";
import pv17 from "../assets/Goverment University image/Private university logo/shoolini.png";
import pv18 from "../assets/Goverment University image/Private university logo/swami vivekananda university.jpeg";
import { Link } from "react-router-dom";

function Course() {
  const Online_University = [
    { id: 1, title: "Acharya Nagarjuna", image: ANimage, clicked: "/filter" },
    { id: 2, title: "Aligarh Muslim", image: AMimage, clicked: "/filter" },
    { id: 3, title: "Andhra University", image: AUimage, clicked: "/filter" },
    {
      id: 4,
      title: "Jamia-Milia-Islamia University",
      image: JMIimage,
      clicked: "/filter",
    },
    {
      id: 5,
      title: "Mizoram Central University",
      image: MCUimage,
      clicked: "/filter",
    },
    {
      id: 6,
      title: "Sambalpur University",
      image: ANimage,
      clicked: "/filter",
    },
    {
      id: 7,
      title: "University of Hyderabad",
      image: Hlogo,
      clicked: "/filter",
    },
    { id: 8, title: "Amrita University", image: pv2, clicked: "/filter" },
    { id: 9, title: "Jain University", image: pv5, clicked: "/filter" },
    {
      id: 10,
      title: "Chandigarh University",
      image: pv3,
      clicked: "/filter",
    },
    { id: 11, title: "DPU University", image: pv4, clicked: "/filter" },
    { id: 12, title: "Amity University", image: pv1 },
    {
      id: 13,
      title: "Mangalayatan University",
      image: pv7,
      clicked: "/filter",
    },
    { id: 14, title: "Manipal College", image: pv8, clicked: "/filter" },
    { id: 15, title: "SGVU University", image: pv11, clicked: "/filter" },
    { id: 16, title: "Sharda University", image: pv10, clicked: "/filter" },
    {
      id: 17,
      title: "Shobhit University",
      image: pv16,
      clicked: "/filter",
    },
    { id: 18, title: "SMU University", image: pv9, clicked: "/filter" },
  ];

  const Distance_University = [
    {
      id: 19,
      title: "Lovely Professional University",
      image: pv6,
      clicked: "/filter",
    },
    { id: 20, title: "Shohbit University", image: pv16, clicked: "/filter" },
    {
      id: 21,
      title: "Mangalayatan University",
      image: pv7,
      clicked: "/filter",
    },
    { id: 22, title: "Suresh Gyan Vihar", image: pv11, clicked: "/filter" },
    {
      id: 23,
      title: "Swami Vivekananda University",
      image: pv18,
      clicked: "/filter",
    },
  ];

  const Govt_University = [
    { id: 24, title: "Acharya Nagarjuna", image: ANimage, clicked: "/filter" },
    { id: 25, title: "Aligarh Muslim", image: AMimage, clicked: "/filter" },
    { id: 26, title: "Andhra University", image: AUimage },
    {
      id: 27,
      title: "Jamia-Milia-Islamia University",
      image: JMIimage,
      clicked: "/filter",
    },
    {
      id: 28,
      title: "Mizoram Central University",
      image: MCUimage,
      clicked: "/filter",
    },
    {
      id: 29,
      title: "Sambalpur University",
      image: ANimage,
      clicked: "/filter",
    },
    {
      id: 30,
      title: "University of Hyderabad",
      image: Hlogo,
      clicked: "/filter",
    },
  ];

  const [data, setData] = useState(Online_University);

  // Function to handle toggling
  const handleToggle = (type) => {
    if (type === "Govt_University") {
      setData(Govt_University);
    } else if (type === "Online_University") {
      setData(Online_University);
    } else if (type === "Distance_University") {
      setData(Distance_University);
    }
  };

  return (
    <div className="u-container">
      <div className="univ-courses-container">
        <div className="univ-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div
              onClick={() => handleToggle("Online_University")}
              className="online-courses-header">
              Online University
            </div>
            <p onClick={() => handleToggle("Distance_University")}>
              Distance University
            </p>
            <p onClick={() => handleToggle("Govt_University")}>
              Govt College <span className="duration-badge orange">3 Year</span>
            </p>
          </div>
          {/* Courses grid */}
          <div className="univ-grid">
            {data.map((course) => (
              <div key={course.id} className="univ-card">
                <div className="course-title">
                  <img
                    className="course-icon"
                    src={course.image}
                    alt={course.title}
                  />
                </div>
                <p className="univ-subtitle">{course.title}</p>
                <div className="course-actions">
                  <button className="explore-btn">Explore</button>
                  <Link to={course.clicked} className="view-btn">
                    View Universities
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
