import React from 'react';

function Course() {
  const courses = [
    { id: 1, title: "MBA", subtitle: "Master of Business Administration", duration: "2 Year" },
    { id: 2, title: "MCOM", subtitle: "Master of Commerce" },
    { id: 3, title: "MCA", subtitle: "Master of Computer Application" },
    { id: 4, title: "MA", subtitle: "Master of Arts" },
    { id: 5, title: "MSC", subtitle: "Master of Science" },
    { id: 6, title: "MJMC", subtitle: "Master of Journalism & Mass Media Communications" },
  ];

  return (
    <div className="courses-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div class="online-courses-header">Online Courses</div>
        
          <p>Distance Courses</p>
          <p>Master Courses <span className="duration-badge green">2 Year</span></p>
          <p>Bachelor Courses <span className="duration-badge orange">3 Year</span></p>
          <p>Top MBA Specialization <span className="duration-badge green">2 Year</span></p>
          <p>Post Graduate Programs <span className="duration-badge orange">10 Months</span></p>
          <p>Certificate Courses</p>
    
      </div>

      {/* Courses grid */}
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.subtitle}</p>
            <div className="course-actions">
              <button className="explore-btn">Explore</button>
              <button className="view-btn">View Universities</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
