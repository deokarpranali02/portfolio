import React, { useState, useEffect } from "react";
import profileAvatar from "../assets/profile.png";

const Hero = () => {
  const fullGreeting = 'Hello 👋';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullGreeting.slice(0, index + 1));
      index++;
      if (index === fullGreeting.length) clearInterval(interval);
    }, 120); // adjust typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">

      <div className="corner-portfolio">
        <span className="code-symbol">&lt;</span>
        portfolio
        <span className="code-symbol"> /&gt;</span>
      </div>

      <div className="hero-content">

        <div className="avatar-wrapper">
          <span className="avatar-ring"></span>
          <img src={profileAvatar} alt="Avatar" className="hero-avatar" />
        </div>

        {/* Typing Greeting */}
        <p className="code-greet">
          <span className="code-keyword">const</span> greeting = 
          <span className="code-string"> "{typedText}"</span>
          <span className="cursor">|</span>
        </p>

        <h1 className="hero-name">
          Pranali <span>Deokar</span>
        </h1>

        <h2 className="hero-role">Student • Aspiring Web Developer</h2>

        <p className="hero-desc">
          I’m a BBA-CA student passionate about building clean, responsive web
          applications and learning full-stack development through real-world
          projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">Projects</a>
          <a href="#contact" className="hero-btn outline">Contact</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
