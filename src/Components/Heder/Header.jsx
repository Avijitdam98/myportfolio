import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const phoneNumber = "+91 9593-1899-13";
  const email = "avijitdam003@gmail.com";

  const handleContactClick = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <ul>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
          <div className="contact">
            <button className="btn" onClick={handleContactClick}>
              Contact Me
            </button>
            {showContactInfo && (
              <div className="contact-info">
                <p>Phone: {phoneNumber}</p>
                <p>Email: {email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
