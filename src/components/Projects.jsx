import React from "react";
import { FaBus, FaIceCream, FaUtensils, FaBookOpen } from "react-icons/fa";

const projects = [
  {
    title: "Ice Cream Shop Website",
    icon: <FaIceCream />,
    desc: "A responsive static website for an ice cream shop focusing on clean UI and mobile-friendly design.",
    tech: ["HTML", "CSS"],
    
  },
  {
    title: "Smart Canteen Management System",
    icon: <FaUtensils />,
    desc: "Full-stack web app for college canteens with pre-ordering, live tracking, payments, and admin dashboards.",
    tech: ["Flask", "SQLite", "JavaScript"],
   
  },
  {
    title: "Book Author Portfolio Website",
    icon: <FaBookOpen />,
    desc: "Responsive author portfolio built using React with reusable components and dynamic rendering.",
    tech: ["React", "CSS"],
    
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-row" key={idx}>
            {/* Logo */}
            <div className="project-icon">{proj.icon}</div>

            {/* Content */}
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

            
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="project-demo"
              >
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
