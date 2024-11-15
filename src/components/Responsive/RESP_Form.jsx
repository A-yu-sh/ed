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

const RespForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    course: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="responsive-form-container">
      <div className="responsive-form-wrapper">
        <form className="responsive-form" onSubmit={handleSubmit}>
          <div className="responsive-form-header">
            <h2>Enquire Now</h2>
            <p>Get 100% Free Counseling</p>
          </div>

          <div className="responsive-form-group">
            <label className="responsive-form-label">
              <MdPerson className="responsive-icon" />
              Name <span className="required-field">*</span>
            </label>
            <div className="responsive-input-container">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="responsive-form-group">
            <label className="responsive-form-label">
              <MdPhone className="responsive-icon" />
              Phone <span className="required-field">*</span>
            </label>
            <div className="responsive-input-container">
              <input
                type="tel"
                placeholder="Enter Your Number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="responsive-form-group">
            <label className="responsive-form-label">
              <MdEmail className="responsive-icon" />
              Email <span className="required-field">*</span>
            </label>
            <div className="responsive-input-container">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="responsive-form-group">
            <label className="responsive-form-label">
              <MdSchool className="responsive-icon" />
              Course <span className="required-field">*</span>
            </label>
            <div className="responsive-input-container">
              <input
                type="text"
                placeholder="Enter Course Name"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="responsive-form-group">
            <label className="responsive-form-label">
              <MdLocationOn className="responsive-icon" />
              State <span className="required-field">*</span>
            </label>
            <div className="responsive-input-container">
              <select
                name="state"
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

          <button className="responsive-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .responsive-form-container {
          font-family: Arial, sans-serif;
          display: none;
          width: 100%;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }

        @media screen and (max-width: 768px) {
          .responsive-form-container {
            display: block;
          }
        }

        .responsive-form-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .responsive-form {
          width: 100%;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .responsive-form-header {
          text-align: center;
          margin-bottom: 10px;
        }

        .responsive-form-header h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
        }

        .responsive-form-header p {
          color: #666;
          margin-top: 0;
        }

        .responsive-form-group {
          margin-bottom: 10px;
        }

        .responsive-form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
        }

        .required-field {
          color: #ff0000;
        }

        .responsive-input-container input,
        .responsive-input-container select {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }

        .responsive-input-container input:focus,
        .responsive-input-container select:focus {
          outline: none;
          border-color: #ff7f00;
        }

        .responsive-submit-button {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          font-weight: 600;
          background-color: #ff7f00;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 15px;
        }

        .responsive-submit-button:hover {
          background-color: #e66a00;
        }
      `}</style>
    </div>
  );
};

export default RespForm;
