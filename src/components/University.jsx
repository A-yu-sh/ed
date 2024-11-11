import React from "react";
import ANimage from "../assets/GOVT logo/Acharya_Nagarjuna_University_crest.png";
import AMimage from "../assets/GOVT logo/Aligarh_Muslim_University_logo.png";
import JMIimage from "../assets/GOVT logo/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png";
import AUimage from "../assets/GOVT logo/Andhra University.jpg";
import MCUimage from "../assets/GOVT logo/Mizoram_University_logo.png";
import Hlogo from "../assets/GOVT logo/University_of_Hyderabad_Logo.png";

function Course() {
  const courses = [
    {
      id: 1,
      title: "Master of Business Administration",
      subtitle: "Acharya Nagarjuna University",
      duration: "2 Year",
      image: ANimage,
    },
    {
      id: 2,
      title: "Master of Commerce",
      subtitle: "Aligarh Muslim University",
      image: AMimage,
    },
    {
      id: 3,
      title: "Master of Computer Application",
      subtitle: "Jamia-Milia-Islamia University",
      image: JMIimage,
    },
    {
      id: 4,
      title: "Master of Arts",
      subtitle: "Andhra University",
      image: AUimage,
    },
    {
      id: 5,
      title: "Master of Science",
      subtitle: "Mizoram Central University",
      image: MCUimage,
    },
    {
      id: 6,
      title: "Master of Journalism & Mass Media Communications",
      subtitle: "University of Hyderabad",
      image: Hlogo,
    },
  ];

  return (
    <div className="u-container">
      <styles>{}</styles>
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
          <div className="univ-grid">
            {courses.map((course) => (
              <div key={course.id} className="univ-card">
                <div className="course-title">
                  <img className="course-icon" src={course.image} />
                </div>
                <p className="univ-subtitle">{course.subtitle}</p>{" "}
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
