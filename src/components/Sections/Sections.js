import React from "react";
import "./Sections.css";
import carInfos from "../../carInfo.json";
import { Fade } from "react-reveal";

const Sections = () => {
  const dropDownBtn = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      {carInfos.map((carInfo) => {
        return (
          <div className="wrap" key={carInfo.id}>
            <div className="con-img">
              <img src={carInfo.image} alt="" />
            </div>
            <div className="item-text">
              <Fade bottom>
                <h1>{carInfo.title}</h1>

                <p>{carInfo.description}</p>
              </Fade>
            </div>
            <div className="items-btn">
              <div className="group-btn">
                <Fade left>
                  {" "}
                  <button className="left-btn btn">Custom Order</button>{" "}
                </Fade>
                <Fade right>
                  <button className="right-btn btn">Demo Drive</button>
                </Fade>
              </div>
            </div>
          </div>
        );
      })}
      <div className="btn-arrow" onClick={dropDownBtn}>
        <img src="/images/down-arrow.svg" alt="" />
      </div>
    </>
  );
};

export default Sections;
