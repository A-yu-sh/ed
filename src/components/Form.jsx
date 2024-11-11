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
    <>
      <div className="total-form">
        <div className="form-section">
          <form className="form" onSubmit={handleSubmit}>
            <div className="enquiry-header">
              <h2>Enquire Now</h2>
              <p>Get 100% Free Counseling</p>
            </div>
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
            <div className="form-group">
              <label className="label">
                <MdPhone className="md-logo" />
                Phone <span className="asterisk">*</span>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
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
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .total-form {
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .form-section {
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }

        .form {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 380px;
          background-color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .enquiry-header {
          text-align: center;
          margin-bottom: 15px;
        }

        .enquiry-header h2 {
          font-size: 40px;
          font-weight: bold;
        }

        .label {
          display: flex;
          align-items: center;
          font-weight: bold;
          margin-bottom: 4px;
          color: #333;
        }

        .input-container {
          display: flex;
          flex-direction: column;
        }

        .input-container input,
        .input-container select {
          padding: 6px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-top: 4px;
          width: 100%;
        }

        .submit-btn {
          padding: 8px 16px;
          font-size: 16px;
          background-color: #ff7f00;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          margin-top: 15px;
        }

        .submit-btn:hover {
          background-color: #e66a00;
        }

        .asterisk {
          color: red;
        }

        /* Responsive styles */
        @media (max-width: 600px) {
          .total-form {
            padding: 10px;
          }

          .form {
            max-width: 100%; /* Form takes full width */
          }

          .enquiry-header h2 {
            font-size: 32px;
          }

          .submit-btn {
            font-size: 14px;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Form;
