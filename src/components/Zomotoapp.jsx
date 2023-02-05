import React from "react";
import logo from "../img/phone.avif";
import google from "../img/google.png";
import apple from "../img/apple.png";
export const Zomotoapp = () => {
  return (
    <>
      <div className="zomoto">
        <img src={logo} alt="" className="zomotoAppLogo" />
        <div className="form">
          <p className="tit">Get the Zomato app</p>
          <p className="sub">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="inputs">
            <div className="input">
              <input type="radio"/>
              <p>Email</p>
            </div>
            <div className="input">
              <input type="radio"/>
              <p>Phone</p>
            </div>
          </div>
          <div className="textField">
            <input type="text"  placeholder="Email"/>
            <p className="placeholder">Email</p>
            <button>Share App Link</button>
          </div>
          <p className="down">Download app from</p>
          <div className="links">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
