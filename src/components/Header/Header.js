/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Header.css";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <>
      <div className="top-note">
        <p>
          Until March 2023, new Model 3 and Model Y vehicles qualify for a
          $7,500 federal tax credit for eligible buyers.{" "}
          <a href="#">Learn More</a>{" "}
        </p>
      </div>
      <div className="header-container">
        <a href="#">
          <img src="./images/logo.svg" alt="Tesla" />
        </a>
        <div className="menu">
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
          <a href="#">Powerwall</a>
        </div>
        <div className="right-menu">
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a href="#">Menu</a>
        </div>
        <div className="burger-Nav">
          <li>
            {" "}
            <a href="#">Existing Inventory</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Used Inventory</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Trade-In</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Demo Drive</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Insurance</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Cybertruck</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Roadster</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Semi</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Charging</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Utilities</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Find Us</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Support</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Investor Relations</a>{" "}
          </li>
          <li>
            {" "}
            <span>
              <LanguageIcon />
            </span>
            <a href="#">
              United States
              <br />
              English
            </a>{" "}
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
