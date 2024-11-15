import React, { useState } from "react";
import MBA from "../assets/Course logo/MBA Logo.png";
import MCOM from "../assets/Course logo/M Com logo.png";
import MCA from "../assets/Course logo/MCA logo.png";
import MA from "../assets/Course logo/MA.png";
import MSC from "../assets/Course logo/MSC.png";
import MJMC from "../assets/Course logo/MJMC.png";

function Course() {
  const courses = [
    {
      id: 1,
      subtitle: "Master of Business Administration",
      duration: "2 Year",
      image: MBA,
    },
    {
      id: 2,
      subtitle: "Master of Commerce",
      image: MCOM,
    },
    {
      id: 3,
      subtitle: "Master of Computer Application",
      image: MCA,
    },
    {
      id: 4,
      subtitle: "Master of Arts",
      image: MA,
    },
    {
      id: 5,
      subtitle: "Master of Science",
      image: MSC,
    },
    {
      id: 6,
      subtitle: "Master of Journalism & Mass Media Communications",
      image: MJMC,
    },
  ];

  const Bachelorcourses = [
    {
      id: 1,
      subtitle: "Bachelor of Business Administration",
      duration: "2 Year",
      image: MBA,
    },
    {
      id: 2,
      subtitle: "Bachelor of Commerce",
      image: MCOM,
    },
    {
      id: 3,
      subtitle: "Bachelor of Computer Application",
      image: MCA,
    },
    {
      id: 4,
      subtitle: "Bachelor of Arts",
      image: MA,
    },
    {
      id: 5,
      subtitle: "Bachelor of Science",
      image: MSC,
    },
    {
      id: 6,
      subtitle: "Bachelor of Journalism & Mass Media Communications",
      image: MJMC,
    },
  ];

  const universities = [
    {
      id: 1,
      subtitle: "SIT",
      duration: "2 Year",
      image: MBA,
    },
    {
      id: 2,
      subtitle: "UEM",
      image: MCOM,
    },
    {
      id: 3,
      subtitle: "IIT-J",
      image: MCA,
    },
    {
      id: 4,
      subtitle: "NIT-K",
      image: MA,
    },
  ];

  // State to toggle between courses and universities
  const [data, setData] = useState(courses);

  // Function to handle toggling
  const handleToggle = (type) => {
    if (type === "distance") {
      setData(universities);
    } else if (type === "bachelor") {
      setData(Bachelorcourses);
    } else {
    }
  };

  return (
    <div className="c-container">
      <div className="courses-courses-container">
        <div className="courses-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="online-courses-header">Online Courses</div>
            <p onClick={() => handleToggle("distance")}>Distance Courses</p>
            <p onClick={() => handleToggle("courses")}>
              Master Courses{" "}
              <span className="duration-badge green">2 Year</span>
            </p>
            <p onClick={() => handleToggle("bachelor")}>
              Bachelor Courses{" "}
              <span className="duration-badge orange">3 Year</span>
            </p>
            <p>
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
                  <h2>{item.title}</h2>
                </div>
                <p className="course-subtitle">{item.subtitle}</p>{" "}
                {/* Subtitle class applied */}
                <div className="course-actions">
                  <button className="explore-btn">Explore</button>
                  <button className="view-btn">View Universities</button>
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
