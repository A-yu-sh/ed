import React from "react";
import "./App.css";
import Form from "./components/Form";
import Universities from "./components/Universities";
import logo from "./assets/TopLogo.png"; // Import your logo here

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logos">
          <img src={logo} alt="Logo" className="logo-image" />{" "}
          {/* Adjusted logo class */}
        </div>
        <nav>
          <ul>
            <li>COURSES</li>
            <li>UNIVERSITY</li>
            <li>SERVICES</li>
          </ul>
        </nav>
        <button className="compare-btn">COMPARE</button>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h3>#India'sTopReliable</h3>
          <h1>DISTANCE EDUCATION SCHOOL</h1>
          <p>We Ease the Process to Achieve Distance & Online Degree</p>
          <div className="search-box">
            <input type="text" placeholder="Search course..." />
            <button>🔍</button>
          </div>
          <div className="icons">
            <div>Top 10 MBA Universities in India</div>
            <div>UGC-DEB Approved Universities 2024</div>
            <div>Top 10 MCA Universities in India</div>
            <div>NIRF Ranked Universities 2024</div>
          </div>
        </div>
        <Form />
      </section>
      <Universities />
    </div>
  );
}

export default App;
