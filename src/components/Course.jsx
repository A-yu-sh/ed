import React, { useState } from "react";
import MBA from "../assets/Course logo/MBA Logo.png";
import MCOM from "../assets/Course logo/M Com logo.png";
import MCA from "../assets/Course logo/MCA logo.png";
import MA from "../assets/Course logo/MA.png";
import MSC from "../assets/Course logo/MSC.png";
import MJMC from "../assets/Course logo/MJMC.png";
import { Link } from "react-router-dom";

function Course() {
  const Online_Courses = [
    {
      id: 1,
      subtitle: "Master of Business Administration",
      duration: "2 Year",
      image: MBA,
      clicked: "/filter",
    },
    {
      id: 2,
      subtitle: "Master of Commerce",
      image: MCOM,
      clicked: "/filter",
    },

    {
      id: 3,
      subtitle: "Master of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 4,
      subtitle: "Master of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 5,
      subtitle: "Master of Science",
      image: MSC,
      clicked: "/filter",
    },
    {
      id: 6,
      subtitle: "Master of Journalism & Mass Media Communications",
      image: MJMC,
      clicked: "/filter",
    },
    {
      id: 7,
      subtitle: "Bachelor of Commerce",
      image: MCOM,
      clicked: "/filter",
    },
    {
      id: 8,
      subtitle: "Bachelor of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 9,
      subtitle: "Bachelor of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 10,
      subtitle: "Bachelor of Journalism & Mass Media Communications",
      image: MJMC,
      clicked: "/filter",
    },
  ];
  const Distance_Courses = [
    {
      id: 1,
      subtitle: "Master of Business Administration",
      duration: "2 Year",
      image: MBA,
      clicked: "/filter",
    },
    {
      id: 2,
      subtitle: "Master of Commerce",
      image: MCOM,
      clicked: "/filter",
    },
    {
      id: 3,
      subtitle: "Master of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 4,
      subtitle: "Master of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 5,
      subtitle: "Master of Science",
      image: MSC,
      clicked: "/filter",
    },
    {
      id: 6,
      subtitle: "Master of Library and Information Science",
      image: MJMC,
      clicked: "/filter",
    },
    {
      id: 7,
      subtitle: "Bachelor of Commerce",
      image: MCOM,
      clicked: "/filter",
    },
    {
      id: 8,
      subtitle: "Bachelor of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 9,
      subtitle: "Bachelor of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 10,
      subtitle: "Bachelor of Library and Information Science",
      image: MJMC,
      clicked: "/filter",
    },
    {
      id: 11,
      subtitle: "Bachelor of Business Administration",
      image: MCA,
      clicked: "/filter",
    },
  ];

  const Bachelorcourses = [
    {
      id: 1,
      subtitle: "Bachelor of Business Administration",
      duration: "2 Year",
      image: MBA,
      clicked: "/filter",
    },
    {
      id: 2,
      subtitle: "Bachelor of Commerce",
      image: MCOM,
      clicked: "/filter",
    },
    {
      id: 3,
      subtitle: "Bachelor of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 4,
      subtitle: "Bachelor of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 5,
      subtitle: "Bachelor of Science",
      image: MSC,
      clicked: "/filter",
    },
    {
      id: 6,
      subtitle: "Bachelor of Journalism & Mass Media Communications",
      image: MJMC,
      clicked: "/filter",
    },
    {
      id: 10,
      subtitle: "Bachelor of Library and Information Science",
      image: MJMC,
      clicked: "/filter",
    },
  ];
  const Mastercourses = [
    {
      id: 1,
      subtitle: "Master of Business Administration",
      duration: "2 Year",
      image: MBA,
      clicked: "/filter",
    },
    {
      id: 2,
      subtitle: "Master of Commerce",
      image: MCOM,
      clicked: "/filter",
    },
    {
      id: 3,
      subtitle: "Master of Computer Application",
      image: MCA,
      clicked: "/filter",
    },
    {
      id: 4,
      subtitle: "Master of Arts",
      image: MA,
      clicked: "/filter",
    },
    {
      id: 5,
      subtitle: "Master of Science",
      image: MSC,
      clicked: "/filter",
    },
    {
      id: 6,
      subtitle: "Master of Journalism & Mass Media Communications",
      image: MJMC,
      clicked: "/filter",
    },
    {
      id: 10,
      subtitle: "Master of Library and Information Science",
      image: MJMC,
      clicked: "/filter",
    },
  ];
  const MBACOURSE = [
    {
      id: 1,
      subtitle: "General Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 2,
      subtitle: "Finance Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 3,
      subtitle: "Marketing Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 4,
      subtitle: "Human Resource Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 5,
      subtitle: "Operation Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 6,
      subtitle: "Information Technology",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 7,
      subtitle: "Healthcare and Hospital Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 8,
      subtitle: "Data Analytics",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 9,
      subtitle: "Business Analytics",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 10,
      subtitle: "Supply Chain Management",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 11,
      subtitle: "International Business",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 12,
      subtitle: "Project Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 13,
      subtitle: "Hospitality Management",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 14,
      subtitle: "International Finance",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 15,
      subtitle: "Retail Management",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 16,
      subtitle: "Logistics and Supply Chain Management",
      duration: "2 Year",

      clicked: "/filter",
    },
    {
      id: 17,
      subtitle: "Fintech Management",
      duration: "2 Year",
    },
    {
      id: 18,
      subtitle: "Data Science and Analytics",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 19,
      subtitle: "IT and Fintech Management",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 20,
      subtitle: "Banking and Finance Management",
      duration: "2 Year",
      clicked: "/filter",
    },
    {
      id: 21,
      subtitle: "Marketing and HR Management",
      duration: "2 Year",

      clicked: "/filter",
    },
  ];
  // State to toggle between courses
  const [data, setData] = useState(Distance_Courses);

  // Function to handle toggling
  const handleToggle = (type) => {
    if (type === "Distance_Courses") {
      setData(Distance_Courses);
    } else if (type === "bachelor") {
      setData(Bachelorcourses);
    } else if (type === "Online_Courses") {
      setData(Online_Courses);
    } else if (type === "Mastercourses") {
      setData(Mastercourses);
    } else if (type === "mba") {
      setData(MBACOURSE);
    }
  };

  return (
    <div className="c-container">
      <div className="courses-courses-container">
        <div className="courses-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div
              className="online-courses-header"
              onClick={() => handleToggle("Online_Courses")}>
              Online Courses
            </div>
            <p onClick={() => handleToggle("Distance_Courses")}>
              Distance Courses
            </p>
            <p onClick={() => handleToggle("Mastercourses")}>
              Master Courses{" "}
              <span className="duration-badge green">2 Year</span>
            </p>
            <p onClick={() => handleToggle("bachelor")}>
              Bachelor Courses{" "}
              <span className="duration-badge orange">3 Year</span>
            </p>
            <p onClick={() => handleToggle("mba")}>
              MBA Specialization{" "}
              <span className="duration-badge green">2 Year</span>
            </p>
            <p>
              Post Graduate{" "}
              <span className="duration-badge orange">10 Months</span>
            </p>
            <p>Certificate Courses</p>
          </div>

          {/* Courses/Universities grid */}
          <div className="courses-grid">
            {data.map((item) => (
              <div key={item.id} className="course-card">
                <div className="course-title">
                  <img
                    className="course-icon"
                    src={item.image}
                    alt={item.subtitle}
                  />
                </div>
                <p className="course-subtitle">{item.subtitle}</p>
                <div className="course-actions">
                  <button className="explore-btn">Explore</button>
                  <Link to={item.clicked} className="view-btn">
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
