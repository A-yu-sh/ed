import React from "react";
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

  return (
    <div className="c-container">
      <div className="univ-courses-container">
        <div className="univ-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="online-courses-header">Online Courses</div>
            <p>Distance Courses</p>
            <p>
              Master Courses{" "}
              <span className="duration-badge green">2 Year</span>
            </p>
            <p>
              Bachelor Courses{" "}
              <span className="duration-badge orange">3 Year</span>
            </p>
            <p>
              Top MBA Specialization{" "}
              <span className="duration-badge green">2 Year</span>
            </p>
            <p>
              Post Graduate{" "}
              <span className="duration-badge orange">10 Months</span>
            </p>
            <p>Certificate Courses</p>
          </div>
          {/* Courses grid */}
          {/* <div className="courses-grid-container"> */}
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-title">
                  <img className="course-icon" src={course.image} />
                  <h2>{course.title}</h2>
                </div>
                <p className="course-subtitle">{course.subtitle}</p>{" "}
                {/* Subtitle class applied */}
                <div className="course-actions">
                  <button className="explore-btn">Explore</button>
                  <button className="view-btn">View Universities</button>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Course;
