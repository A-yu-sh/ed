import React from 'react';

function Compare() {
  return (
    <div className="compare-page">
      <div className="compare-container-unique">
        {/* Title */}
        <h1 className="compare-title-unique">Compare Universities </h1>
          <h1> & Choose Best Fit For You</h1>
        
        {/* Description */}
        <p className="compare-description-unique">
          Discover your ideal university and explore a wide range of factors such as academic programs, 
         <br /> faculty expertise, campus culture, and facilities.
        </p>
        
        {/* Box Container */}
        <div className="compare-box-container-unique">
          {/* Box 1 */}
          <div className="box-unique">
            <div className="box-content">
              <img src="university_image_1.jpg" alt="University 1" className="box-image" />
              <select className="dropdown-unique">
                <option>Select University</option>
              </select>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box-unique">
            <div className="box-content">
              <img src="ANI.png" alt="University 2" className="box-image" />
              <select className="dropdown-unique">
                <option>Select University</option>
              </select>
            </div>
          </div>

          {/* Box 3 */}
          <div className="box-unique">
            <div className="box-content">
              <img src="university_image_3.jpg" alt="University 3" className="box-image" />
              <select className="dropdown-unique">
                <option>Select University</option>
              </select>
            </div>
          </div>

          {/* Box 4 */}
          <div className="box-unique">
            <div className="box-content">
              <img src="university_image_4.jpg" alt="University 4" className="box-image" />
              <select className="dropdown-unique">
                <option>Select University</option>
              </select>
            </div>
          </div>
        </div>

        {/* Compare Button */}
        <button className="compare-button-unique">Compare Now</button>
      </div>
     
    </div>
    
    
    
  );

  

}

export default Compare;
