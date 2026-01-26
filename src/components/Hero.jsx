import React from "react";
import profileAvatar from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* Corner Portfolio (Coding Style) */}
      <div className="corner-portfolio">
        <span className="code-symbol">&lt;</span>
        portfolio
        <span className="code-symbol"> /&gt;</span>
      </div>

      <div className="hero-content">

        {/* Profile with glowing ring */}
        <div className="avatar-wrapper">
          <span className="avatar-ring"></span>
          <img src={profileAvatar} alt="Avatar" className="hero-avatar" />
        </div>

        {/* Coding Greeting */}
        <p className="code-greet">
          <span className="code-keyword">const</span> greeting =
          <span className="code-string"> "Hello 👋"</span>;
        </p>

        {/* Name */}
        <h1 className="hero-name">
          Pranali <span>Deokar</span>
        </h1>

        {/* Role */}
        <h2 className="hero-role">
          Student • Aspiring Web Developer
        </h2>

        {/* Description */}
        <p className="hero-desc">
          I’m a BBA-CA student passionate about building clean, responsive web
          applications and learning full-stack development through real-world
          projects.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">Projects</a>
          <a href="#contact" className="hero-btn outline">Contact</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
