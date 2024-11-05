import React from "react";

const FilterSection = () => {
  return (
    <div className="filter-section p-4 w-1/4 border-r border-gray-200">
      <h2 className="font-bold mb-4">Filter by Mode</h2>
      <div>
        <label>
          <input type="checkbox" className="mr-2" /> Distance Mode
        </label>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> Online Mode
        </label>
      </div>

      <h2 className="font-bold mt-6 mb-4">Filter by Course</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 w-full border rounded"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" className="mr-2" /> MBA
        </label>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> BCA
        </label>
        {/* Add more courses here */}
      </div>

      <h2 className="font-bold mt-6 mb-4">Filter by University</h2>
      <div style={{ height: "150px", overflowY: "scroll" }}>
        <label>
          <input type="checkbox" className="mr-2" /> Amity University
        </label>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> Lovely Professional
          University
        </label>
        {/* Add more universities here */}
      </div>

      <h2 className="font-bold mt-6 mb-4">Select Specialization</h2>
      <div>
        <label>
          <input type="checkbox" className="mr-2" /> General
        </label>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> Hindi
        </label>
        {/* Add more specializations here */}
      </div>
    </div>
  );
};

export default FilterSection;
