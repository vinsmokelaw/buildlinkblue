import React from "react";
import "./Footer.css";
import buildlinkLogo from "../assets/Group 1.png";

// Lucide icons
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* 🌊 Wavy Top */}
      <div className="footer-wave">
        {/* Make sure this fill color matches your footer bg */}
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
           
          />
        </svg>
      </div>

      {/* 🧱 Logo */}
      <div className="footer-logo">
        <img src={buildlinkLogo} alt="BuildLink Logo" />
      </div>

      {/* 🧭 Links */}
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Handyman</li>
            <li>Companies</li>
            <li>Specialists</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h4>Handyman</h4>
          <ul>
            <li>Plumber</li>
            <li>Electrician</li>
            <li>Builder</li>
          </ul>
        </div>
        <div>
          <h4>Companies</h4>
          <ul>
            <li>Construction Companies</li>
            <li>Electrical Specialists</li>
            <li>Plumber Specialists</li>
            <li>Builder Specialists</li>
          </ul>
        </div>
      </div>

      {/* ✉️ Subscribe */}
      {/* <div className="footer-subscribe">
        <h4>Subscribe to our Newsletter</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div> */}

      {/* 🔗 Social */}
      <div className="footer-social">
        <p>buildlink@gmail.com</p>
        <div className="social-icons">
          <Linkedin color="white" />
          <Facebook color="white" />
          <Instagram color="white" />
          <Twitter color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
