import React, { useEffect, useState } from "react";
import "./FormLayout.css"; // Ensure your CSS is linked

const Form = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file and update the state
    fetch("./data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-section">
      <h2>{data.formTitle || "Enquire Now"}</h2>
      <p>{data.formSubtitle || "Get 100% Free Counseling"}</p>
      <form>
        <div className="form-group">
          <label>{data.nameLabel || "Name *"}</label>
          <input
            type="text"
            placeholder={data.namePlaceholder || "Enter Your Name"}
            required
          />
        </div>
        <div className="form-group">
          <label>{data.phoneLabel || "Phone *"}</label>
          <input
            type="text"
            placeholder={data.phonePlaceholder || "Enter Your Number"}
            required
          />
        </div>
        <div className="form-group">
          <label>{data.emailLabel || "Email *"}</label>
          <input
            type="email"
            placeholder={data.emailPlaceholder || "Enter Your Email"}
            required
          />
        </div>
        <div className="form-group">
          <label>{data.courseLabel || "Course *"}</label>
          <input
            type="text"
            placeholder={data.coursePlaceholder || "Enter Course Name"}
            required
          />
        </div>
        <div className="form-group">
          <label>{data.stateLabel || "State *"}</label>
          <input
            type="text"
            placeholder={data.statePlaceholder || "Enter State Name"}
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          {data.buttonText || "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
