import React from "react";
import "./Sections.css";
import carInfos from "../../carInfo.json";

const Sections = () => {
  return (
    <>
      {carInfos.map((carInfo) => {
        return (
          <div className="wrap" key={carInfo.id}>
            <div className="con-img">
              <img src={carInfo.image} alt="" />
            </div>
            <div className="item-text">
              <h1>${carInfo.title}</h1>
              <p>${carInfo.description}</p>
            </div>
            <div className="items-btn">
              <div className="group-btn">
                <button className="left-btn btn">Custom Order</button>
                <button className="right-btn btn">Demo Drive</button>
              </div>
              <div className="btn-arrow">
                <img src="/images/down-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sections;
