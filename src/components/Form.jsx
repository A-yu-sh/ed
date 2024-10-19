import React from "react";
import NameImg from "../assets/nameicon-removebg-preview.png";
import PhoneImg from "../assets/phone-removebg-preview.png";
import EmailImg from "../assets/email-removebg-preview.png";
import CourseImg from "../assets/course2-removebg-preview.png";
import StateImg from "../assets/state-removebg-preview (1).png";
import {
  MdPerson,
  MdPhone,
  MdEmail,
  MdSchool,
  MdLocationOn,
} from "react-icons/md";

function Form() {
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
              {/* <img src={NameImg} alt="Phone" className="f-icon" /> */}
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdPhone className="md-logo" />
              Phone <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter Your Number" />
              {/* <img src={PhoneImg} alt="Phone" className="f-icon" /> */}
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdEmail className="md-logo" />
              Email <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="email" placeholder="Enter Your Email" />
              {/* <img src={EmailImg} alt="Email" className="f-icon" /> */}
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdSchool className="md-logo" />
              Course <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter Course Name" />
              {/* <img src={CourseImg} alt="Course" className="f-icon" /> */}
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <MdLocationOn className="md-logo" />
              State <span className="asterisk">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter State Name" />
              {/* <img src={StateImg} alt="State" className="f-icon" /> */}
            </div>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
