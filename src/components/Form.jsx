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
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    course: "",
    state: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    // Get the name and value of the input element
    const { name, value } = e.target;
    // Update the form data state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Log the form data to the console
    console.log(formData);
  };

  return (
    <>
      <div className="total-form">
        {/* Form section container */}
        <div className="form-section">
          {/* Top header section */}

          {/* Form container */}
          <form className="form" onSubmit={handleSubmit}>
            {/* Enquiry header section */}
            <div className="enquiry-header">
              <h2>Enquire Now</h2>
              <p>Get 100% Free Counseling</p>
            </div>
            {/* Form group for name input */}
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
            {/* Form group for phone number input */}
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
            {/* Form group for email input */}
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
            {/* Form group for course input */}
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
            {/* Form group for state input */}
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
            {/* Form submit button */}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Total form container styles */
        .total-form {
          font-family: Arial, sans-serif;
          padding: 10px;
        }

        /* Form section container styles */
        .form-section {
          display: flex;
          justify-content: center;
          margin-top: 10px; /* Added margin top */
        }

        /* Form container styles */
        .form {
          display: flex;
          flex-direction: column;
          width: 100%; /* Make form full width */
          max-width: 100%; /* Make form full width */
          background-color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Enquiry header section styles */
        .enquiry-header {
          text-align: center;
          margin-bottom: 15px;
        }
        .enquiry-header h2 {
          font-size: 2rem;
          font: bold;
          margin-bottom: 1px;
        }

        /* Form group styles */
        .form-group {
          margin-bottom: 8px;
        }

        /* Label styles */
        .label {
          display: flex;
          align-items: center;
          font-weight: bold;
          margin-bottom: 4px;
          color: #333;
        }

        /* Input container styles */
        .input-container {
          display: flex;
          flex-direction: column;
        }

        /* Input and select styles */
        .input-container input,
        .input-container select {
          padding: 6px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-top: 8px;
          width: 100%;
        }

        /* Submit button styles */
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

        /* Submit button hover styles */
        .submit-btn:hover {
          background-color: #e66a00;
        }

        /* Asterisk styles */
        .asterisk {
          color: red;
        }

        /* Top header styles */
        .top-header {
          margin-bottom: 20px;
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

          .form-group {
            margin-bottom: 10px;
          }

          .input-container input,
          .input-container select {
            padding: 8px;
            font-size: 14px;
          }

          .submit-btn {
            padding: 8px 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Form;
