import React from "react";
import logo from "../img/name.avif";
export const Home = () => {
  return (
    <>
      <header>
        <li className="logoTitle">
          <i class="fa-solid fa-mug-hot"></i>Get the App
        </li>
        <ul>
          <li>Investor Relations</li>
          <li>Add restaurant</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </header>
      <div className="homeBody">
        <img src={logo} alt="" className="logo" />
        <div className="subtit">
          Discover the best food & drinks in Coimbatore
        </div>
        <div className="searchContainer">
          <div className="loc">
            <i class="fa-solid fa-location-dot"></i>
            <p>Coimbatore</p>
          </div>
          <div className="search">
            <i class="fa-solid fa-caret-down"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
          </div>
        </div>
      </div>
    </>
  );
};
