import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

function PhdHeader() {
  return (
    <div className="phd-dropdown-content">
      <Link to="/phd">PhD Admission</Link>
      <Link to="/phd">UGC NET Preparation</Link>
      <Link to="/phd">Honorary Doctorate</Link>
      <Link to="/phd">Thesis Writing</Link>
    </div>
  );
}

export default PhdHeader;
