import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-text animated-text">
        Hi! I’m <span className="highlight-name">Pranali</span>, a BCA student exploring web development. Feel free to connect, collaborate, or just chat! 👋
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">📍 Maharashtra</div>
        <div className="info-item">📞 +91-8623072913</div>
        <div className="info-item">📧 deokarpranali02@gmail.com</div>
      </div>

      {/* Resume Button */}
      <div className="contact-actions">
        <a href="src/assets/resume.pdf" download className="resume-btn">
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        action="https://formsubmit.co/deokarpranali02@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" /> {/* Disable captcha if desired */}

        <div className="input-group">
          <FaUser />
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="input-group">
          <FaEnvelope />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="input-group">
          <FaCommentDots />
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
