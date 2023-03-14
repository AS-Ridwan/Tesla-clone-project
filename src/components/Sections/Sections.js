import React from "react";
import "./Sections.css";

const Sections = () => {
  return (
    <div className="wrap">
      <div className="item-text">
        <h1>Model 3</h1>
        <p>Leasing starting at $349/mo</p>
      </div>
      <div className="items-btn">
        <div className="group-btn">
          <button className="left-btn btn">Custom Order</button>
          <button className="right-btn">Demo Drive</button>
        </div>
        <div className="btn-arrow">
          <img src="/images/down-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sections;
