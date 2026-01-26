import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2026 <span>Pranali Deokar</span> • Built with <FaHeart className="heart" /> and passion
      </p>

      <div className="social-links">
        <a href="https://github.com/deokarpranali02" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/pranali-deokar-1a3884283" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
