import React, { useEffect } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

const languages = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C/C++", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: null },
  { name: "CSS", icon: null },
  { name: "React.js", icon: <FaReact /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Flask", icon: null },
];

const tools = ["VS Code", "Eclipse", "Command Prompt", "MySQL Workbench"];
const databases = ["MySQL", "SQLite"];

const About = () => {
  // Intersection Observer for fade-in animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    fadeEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Heading */}
        <h2 className="about-heading fade-in">ABOUT ME</h2>

        {/* Description */}
        <p className="about-text fade-in">
          Final-year BBA-CA student with a strong foundation in programming.
          Skilled in building responsive web interfaces using modern
          technologies. Quick learner and passionate about real-world projects.
        </p>

        {/* Education Card */}
        <div className="about-card fade-in">
          <h3 className="about-title">EDUCATION</h3>
          <div className="edu-item">
            <h4>PE Society’s Modern College, Pune</h4>
            <p>BBA-CA | CGPA: 8.55 | Exp. 2026</p>
          </div>
          <div className="edu-item">
            <h4>The New Millennium Jr. College, Pune</h4>
            <p>HSC | 71.50% | 2023</p>
          </div>
          <div className="edu-item">
            <h4>Mar Ivanios Convent High School, Pune</h4>
            <p>SSC | 72.60% | 2021</p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="about-card fade-in">
          <h3 className="about-title">TECHNICAL SKILLS</h3>

          {/* Languages */}
          <div className="skills-grid">
            {languages.map((lang, idx) => (
              <span className="skill-item" key={idx}>
                {lang.icon && <span className="skill-icon">{lang.icon}</span>}
                {lang.name}
              </span>
            ))}
          </div>

          {/* Tools */}
          <p className="sub-heading">Tools</p>
          <div className="skills-grid">
            {tools.map((tool, idx) => (
              <span className="skill-item" key={idx}>
                <FaTools className="skill-icon" />
                {tool}
              </span>
            ))}
          </div>

          {/* Databases */}
          <p className="sub-heading">Databases</p>
          <div className="skills-grid">
            {databases.map((db, idx) => (
              <span className="skill-item" key={idx}>
                <FaDatabase className="skill-icon" />
                {db}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
