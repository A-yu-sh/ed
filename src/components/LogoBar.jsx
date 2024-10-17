import React from 'react';


const LogoBar = () => {
  return (
    <div className="logo-bar">
      <img src={require('../assets/Daily_Hunt-removebg-preview (1).png')} alt="DailyHunt" />
      <img src={require('../assets/Hindustan_Times-removebg-preview.png')} alt="Hindustan Times" />
      <img src={require('../assets/Latest_LY-removebg-preview (1).png')} alt="Mid-Day" />
      <img src={require('../assets/Mid-day-removebg-preview.png')} alt="LatestLY" />
      <img src={require('../assets/The_Print-removebg-preview.png')} alt="The Print" /> {/* No space in filename */}
      <img src={require('../assets/ANI.png')} alt="ANI" />
    </div>
  );
};

export default LogoBar;
