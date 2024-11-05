import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    lastEducationQualification: "",
    phdStreamSubject: "",
    profession: "",
    budget: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full name is required";
    if (formData.phoneNo != Number)
      formErrors.phoneNo = "Please Enter a valid Phone Number";
    if (!formData.phoneNo) formErrors.phoneNo = "Phone number is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      formErrors.email = "Valid email is required";
    if (!formData.lastEducationQualification)
      formErrors.lastEducationQualification =
        "Education qualification is required";
    if (!formData.phdStreamSubject)
      formErrors.phdStreamSubject = "PhD stream/subject is required";
    if (!formData.profession) formErrors.profession = "Profession is required";
    if (!formData.budget) formErrors.budget = "Budget is required";
    if (!formData.state) formErrors.state = "State is required";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="relative bg-gray-100 py-2 px-8 mt-7 md:mt-1 rounded-lg max-w-lg mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-1 text-center text-gray-700">
        Connect with Aimlay
      </h2>
      <h3 className="text-xl mb-6 text-center text-gray-600">
        Enter Your Details
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>

        {/* Phone No */}
        <div className="mb-4 flex items-center">
          <img src="india-flag.png" alt="India Flag" className="w-6 h-6 mr-2" />
          <input
            type="tel"
            name="phoneNo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone No."
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>
        {errors.phoneNo && (
          <span className="text-red-500 text-sm">{errors.phoneNo}</span>
        )}

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Last Education Qualification */}
        <div className="mb-4">
          <input
            type="text"
            name="lastEducationQualification"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Education Qualification"
            value={formData.lastEducationQualification}
            onChange={handleChange}
            required
          />
          {errors.lastEducationQualification && (
            <span className="text-red-500 text-sm">
              {errors.lastEducationQualification}
            </span>
          )}
        </div>

        {/* PhD Stream/Subject */}
        <div className="mb-4">
          <input
            type="text"
            name="phdStreamSubject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="PhD Stream/Subject"
            value={formData.phdStreamSubject}
            onChange={handleChange}
            required
          />
          {errors.phdStreamSubject && (
            <span className="text-red-500 text-sm">
              {errors.phdStreamSubject}
            </span>
          )}
        </div>

        {/* Profession */}
        <div className="mb-4">
          <input
            type="text"
            name="profession"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            required
          />
          {errors.profession && (
            <span className="text-red-500 text-sm">{errors.profession}</span>
          )}
        </div>

        {/* Budget */}
        <div className="mb-4">
          <input
            type="text"
            name="budget"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
          {errors.budget && (
            <span className="text-red-500 text-sm">{errors.budget}</span>
          )}
        </div>

        {/* State Dropdown */}
        <div className="mb-4">
          <select
            name="state"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          {errors.state && (
            <span className="text-red-500 text-sm">{errors.state}</span>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <textarea
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-black mb-2 transition duration-300">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
