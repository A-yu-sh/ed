import React, { useState } from "react";
import ANimage from "../assets/GOVT logo/Acharya_Nagarjuna_University_crest.png";
import AMimage from "../assets/GOVT logo/Aligarh_Muslim_University_logo.png";
import JMIimage from "../assets/GOVT logo/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png";
import AUimage from "../assets/GOVT logo/Andhra University.jpg";
import MCUimage from "../assets/GOVT logo/Mizoram_University_logo.png";
import Hlogo from "../assets/GOVT logo/University_of_Hyderabad_Logo.png";

function Course() {
  const Online_University = [
    { id: 1, title: "Acharya Nagarjuna", image: ANimage },
    { id: 2, title: "Aligarh Muslim", image: AMimage },
    { id: 3, title: "Andhra University", image: AUimage },
    { id: 4, title: "Jamia-Milia-Islamia University", image: JMIimage },
    { id: 5, title: "Mizoram Central University", image: MCUimage },
    { id: 6, title: "Sambalpur University", image: ANimage },
    { id: 7, title: "University of Hyderabad", image: Hlogo },
    { id: 8, title: "Amrita University", image: ANimage },
    { id: 9, title: "Jain University", image: AMimage },
    { id: 10, title: "Chandigarh University", image: AUimage },
    { id: 11, title: "DPU University", image: JMIimage },
    { id: 12, title: "Amity University", image: MCUimage },
    { id: 13, title: "Mangalayatan University", image: ANimage },
    { id: 14, title: "Manipal College", image: Hlogo },
    { id: 15, title: "SGVU University", image: AUimage },
    { id: 16, title: "Sharda University", image: JMIimage },
    { id: 17, title: "Shobhit University", image: MCUimage },
    { id: 18, title: "SMU University", image: ANimage },
  ];

  const Distance_University = [
    { id: 19, title: "Lovely Professional University", image: ANimage },
    { id: 20, title: "Shohbit University", image: AMimage },
    { id: 21, title: "Mangalayatan University", image: AUimage },
    { id: 22, title: "Suresh Gyan Vihar", image: JMIimage },
    { id: 23, title: "Swami Vivekananda University", image: MCUimage },
  ];

  const Govt_University = [
    { id: 24, title: "Acharya Nagarjuna", image: ANimage },
    { id: 25, title: "Aligarh Muslim", image: AMimage },
    { id: 26, title: "Andhra University", image: AUimage },
    { id: 27, title: "Jamia-Milia-Islamia University", image: JMIimage },
    { id: 28, title: "Mizoram Central University", image: MCUimage },
    { id: 29, title: "Sambalpur University", image: ANimage },
    { id: 30, title: "University of Hyderabad", image: Hlogo },
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
