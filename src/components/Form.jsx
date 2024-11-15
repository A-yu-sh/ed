import React, { useState } from "react";
import {
  MdPerson,
  MdPhone,
  MdEmail,
  MdSchool,
  MdLocationOn,
} from "react-icons/md";

// List of Indian states and union territories
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

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    course: "",
    state: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="total-form">
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit}>
          {/* Form Header */}
          <div className="enquiry-header">
            <h2>Enquire Now</h2>
            <p>Get 100% Free Counseling</p>
          </div>

          {/* Name Input */}
          <div className="form-group">
            <label className="label">
              <MdPerson className="md-logo" />
              Name <span className="asterisk">*</span>
            </label>
            <div className="input-container">
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

          {/* Phone Input */}
          <div className="form-group">
            <label className="label">
              <MdPhone className="md-logo" />
              Phone <span className="asterisk">*</span>
            </label>
            <div className="input-container">
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

          {/* Email Input */}
          <div className="form-group">
            <label className="label">
              <MdEmail className="md-logo" />
              Email <span className="asterisk">*</span>
            </label>
            <div className="input-container">
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

          {/* Course Input */}
          <div className="form-group">
            <label className="label">
              <MdSchool className="md-logo" />
              Course <span className="asterisk">*</span>
            </label>
            <div className="input-container">
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

          {/* State Selection */}
          <div className="form-group">
            <label className="label">
              <MdLocationOn className="md-logo" />
              State <span className="asterisk">*</span>
            </label>
            <div className="input-container">
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

          {/* Submit Button */}
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        /* Main container styles */
        .total-form {
          display: flex;
          justify-content: center;
          font-family: Arial, sans-serif;
          width: 85%;

          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }

        /* Form section wrapper */
        .form-section {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* Form container */
        .form {
          width: 70%;
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Header styles */
        .enquiry-header {
          text-align: center;
          margin-top: -27px;
          margin-bottom: 10px;
        }

        .enquiry-header h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .enquiry-header p {
          color: #666;
          margin-top: 0;
        }

        /* Form group styles */
        .form-group {
          margin-bottom: 5px;
        }

        /* Label styles */
        .label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          margin-bottom: -5px;
          color: #333;
        }

        .asterisk {
          color: #ff0000;
        }

        /* Input container styles */
        .input-container {
          width: 100%;
        }

        /* Input and select styles */
        .input-container input,
        .input-container select {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }

        .input-container input:focus,
        .input-container select:focus {
          outline: none;
          border-color: #ff7f00;
        }

        /* Submit button styles */
        .submit-btn {
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

        .submit-btn:hover {
          background-color: #e66a00;
        }

        /* Responsive styles */
        @media (max-width: 600px) {
          .total-form {
            padding: 10px;
            max-width: 400%;
            justify-content: start;
          }

          .form-section {
            justify-content: center;
          }

          .form {
            width: 400%;
            padding: 20px;
            margin: 0 auto;
          }

          .enquiry-header {
            margin-top: 0;
          }

          .enquiry-header h2 {
            font-size: 24px;
          }

          .input-container input,
          .input-container select {
            padding: 10px;
            font-size: 14px;
          }

          .submit-btn {
            padding: 10px;
            font-size: 14px;
          }

          .form-group {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
