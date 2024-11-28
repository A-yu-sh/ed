import React from "react";

const LogoBar = () => {
  return (
    <div className="logo-bar">
      <style>
        {`
          .logo-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 20px;
          }

          .logo-bar img {
            max-width: 120px; /* Set a max width for logos */
            height: auto;
            transition: transform 0.3s ease;
          }

          .logo-bar img:hover {
            transform: scale(1.1); /* Slight zoom on hover */
          }

          /* Mobile styles (3-column grid) */
          @media (max-width: 768px) {
            .logo-bar {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 15px;
              justify-content: center;
            }

            .logo-bar img {
              max-width: 100px; /* Adjust size for mobile */
            }
          }
        `}
      </style>
      <img
        src={require("../assets/Daily_Hunt-removebg-preview (1).png")}
        alt="DailyHunt"
      />
      <img
        src={require("../assets/Hindustan_Times-removebg-preview.png")}
        alt="Hindustan Times"
      />
      <img
        src={require("../assets/Latest_LY-removebg-preview (1).png")}
        alt="Mid-Day"
      />
      <img
        src={require("../assets/Mid-day-removebg-preview.png")}
        alt="LatestLY"
      />
      <img
        src={require("../assets/The_Print-removebg-preview.png")}
        alt="The Print"
      />
      <img src={require("../assets/ANI.png")} alt="ANI" />
    </div>
  );
};

export default LogoBar;
