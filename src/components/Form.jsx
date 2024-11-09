import React, { useState } from "react";
import {
  MdPerson,
  MdPhone,
  MdEmail,
  MdSchool,
  MdLocationOn,
} from "react-icons/md";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    course: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="Total_Form">
      <div className="Enquiry">
        <h2>Enquire Now</h2>
        <p>Get 100% Free Counseling</p>
      </div>
      <div className="form-section">
        <form className="form">
          <div className="form-group">
            <label className="label">
              <MdPerson className="md-logo" />
              Name <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter Your Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdPhone className="md-logo" />
              Phone <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter Your Number" />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdEmail className="md-logo" />
              Email <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdSchool className="md-logo" />
              Course <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter Course Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdLocationOn className="md-logo" />
              State <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <select
                name="state"
                className="select-state-container"
                value={formData.state}
                onChange={handleChange}
                required>
                <option value="">Select Your State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
