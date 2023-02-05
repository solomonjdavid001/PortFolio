import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>1918,KS Layout</p>
              <p>Bangalore,India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem", marginTop: "1rem" }}
              />
              +91 9886409959
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem", marginTop: "1rem"}}
              />
              solomonjdavid001@gmail.com
            </h4>
          </div>
        </div>


        <div className="right">
          <h4>About me</h4>
          <p>Hello! My name is Solomon David and I am a student currently working as a intern. I have a B.E in Information Science Engineering from Dayananda Sagar College of Engineering.</p>
          <div className="social">
            <Link to="https://www.facebook.com">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </Link>
            <Link to="https://www.twitter.com">
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </Link>
            <Link to="https://www.linkedin.com">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
