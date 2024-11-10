import React from "react";

import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/X Tweeter.png";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First section: Online & Distance Universities */}
        <div className="footer-section">
          <h4>Online & Distance Universities</h4>
          <ul>
            <li>Online Manipal</li>
            <li>Amity University</li>
            <li>Lovely Professional University</li>
            <li>Chandigarh University</li>
            <li>DY Patil University</li>
            <li>Vivekananda Global University</li>
            <li>Sharda University</li>
            <li>Shoolini University</li>
            <li>Jain University</li>
            <li>Sikkim Manipal University</li>
            <li>Vignan University</li>
            <li>UPES University</li>
            <li>Amrita University</li>
            <li>Chandigarh University</li>
          </ul>
        </div>

        {/* Second section: Distance Courses */}
        <div className="footer-section">
          <h4>Distance Courses</h4>
          <ul>
            <li>BA Distance Education</li>
            <li>BBA Distance Education</li>
            <li>BCA Distance Education</li>
            <li>BCOM Distance Education</li>
            <li>BLIS Distance Education</li>
            <li>BJMC Distance Education</li>
            <li>BSC Distance Education</li>
            <li>MA Distance Education</li>
            <li>MBA Distance Education</li>
            <li>MCA Distance Education</li>
            <li>MCOM Distance Education</li>
            <li>MLIS Distance Education</li>
            <li>MSC Distance Education</li>
          </ul>
        </div>

        {/* Third section: Online Courses */}
        <div className="footer-section">
          <h4>Online Courses</h4>
          <ul>
            <li>Online MBA Course</li>
            <li>Online MCA Course</li>
            <li>Online MCOM Course</li>
            <li>Online MA Course</li>
            <li>Online MSC Course</li>
            <li>Online MJMC Course</li>
            <li>Online BBA Course</li>
            <li>Online BCA Course</li>
            <li>Online BCOM Course</li>
            <li>Online BA Course</li>
            <li>Online BSC Course</li>
            <li>Online BJMC Course</li>
          </ul>

          {/* Added Online & Distance Diploma Courses Section */}
          <h4>Online & Distance Diploma Courses</h4>
          <ul>
            <li>PGP Courses</li>
            <li>Certificate Course</li>
          </ul>
        </div>

        {/* Fourth section: Online & Distance MBA Courses */}
        <div className="footer-section">
          <h4>Online & Distance MBA Courses</h4>
          <ul>
            <li>MBA (General)</li>
            <li>MBA (Finance Management)</li>
            <li>MBA (Human Resource)</li>
            <li>MBA (Marketing)</li>
            <li>MBA (Project Management)</li>
            <li>MBA (Operation)</li>
            <li>MBA (IT)</li>
            <li>MBA (Supply Chain)</li>
            <li>MBA (International Business)</li>
            <li>MBA (Retail Management)</li>
            <li>MBA (Hotel Management)</li>
            <li>MBA (Hospitality Management)</li>
            <li>MBA (Hospital Management)</li>
          </ul>
        </div>
      </div>

      <div className="footer-social-links">
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={facebookIcon}
              alt="Facebook"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={instagramIcon}
              alt="Instagram"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={youtubeIcon}
              alt="YouTube"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
        <div className="flw-container">
          <ul className="footer-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <a href="/pay-online">Pay Online</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="/refund-policy">Refund Policy</a>
            </li>
            <li>
              <Link to="/Privacy-Policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/Terms-and-Conditions">Terms & Conditions</Link>
            </li>
          </ul>
          <p className="footer-address">
            Online Form Submission Only: No physical registration office
            available.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <p>&copy; 2024 SODE Counseling Services LLP</p> */}
        <p>&copy; 2024 Distance Education Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
