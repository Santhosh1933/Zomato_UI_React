import React from "react";
import logo from "../img/logo.avif";
import flag from "../img/flag.webp";
import apple from "../img/apple.png";
import google from "../img/google.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <img src={logo} alt="" className="logo" />
        <div className="nation">
          <div className="india">
            <img src={flag} alt="" className="flag" />
            <p>India</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="lang">
            <i class="fa-solid fa-globe"></i>
            <p>English</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div>
          <li>
            <b>ABOUT ZOMATO</b>
          </li>
          <li>Who We Are</li>
          <li>Blog</li>
          <li>Work With Us</li>
          <li>Investor Relations</li>
          <li>Report Fraud</li>
          <li>Contact Us</li>
        </div>
        <div>
          <li>
            <b>ZOMAVERSE</b>
          </li>
          <li>Zomato</li>
          <li>Blinkit</li>
          <li>Feeding India</li>
          <li>Hyperpure</li>
          <li>Zomaland</li>
        </div>
        <div>
          <li>
            <b>For Restaurants</b>
          </li>
          <li>Partner With Us</li>
          <li>Apps For You</li>
          <li></li>
          <li>
            <b>For Enterprises</b>
          </li>
          <li>Zomato For Work</li>
        </div>
        <div>
          <li>
            <b>Zomato For Work</b>
          </li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </div>
        <div>
          <li>
            <b>Social Links</b>
          </li>
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <img src={google} alt="" className="googleLogo" />
          <img src={apple} alt="" className="appleLogo"/>
        </div>
      </div>

      <hr />
      <p>
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2023 © Santhosh Ltd. All
        rights reserved.
      </p>
    </div>
  );
};
