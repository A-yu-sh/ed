import React from "react";

const MbaSpecialization = () => {
  const specializations = [
    "MBA (Finance)",
    "MBA (Marketing)",
    "MBA (Hospitality Management)",
    "MBA (Human Resource Management)",
    "MBA (Operation)",
    "MBA (Information Technology)",
    "MBA (International Business)",
    "MBA (Supply Chain Management)",
    "MBA (Retail Management)",
    "MBA (Fashion Design)",
    "MBA (Project Management)",
    "MBA (Business Analytics)",
  ];

  return (
    <div className="specialization-section">
      <h2>Distance MBA Specialization</h2>
      <p>
        MBA Distance Education is a preferred choice for working professionals
        because of its flexibility. Specializations in Distance and Online MBA
        programs provide students with a deeper insight into their selected
        fields, enhancing their career prospects.
      </p>
      <div className="specialization-grid">
        {specializations.map((specialization, index) => (
          <div className="specialization-card" key={index}>
            {specialization}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MbaSpecialization;
