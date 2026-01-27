import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-text animated-text">
        Hi! I’m <span className="highlight-name">Pranali</span>, a BCA student exploring web development.
        Feel free to connect, collaborate, or just chat! 👋
      </p>

      {/* Contact Info */}
      <div class="info-item">
      <span class="info-icon">📧</span>
       <a href="mailto:deokarpranali02@gemail.com">deokarpranali02@gmail.com</a>
</div>

      <div class="info-item">
      <span class="info-icon">📞</span>
      <a href="tel:+91-8623072913">+91 8623072913</a>
</div>

       <div class="info-item">
       <span class="info-icon">📍</span>
       <span>Maharashtra, India</span>
</div>


      {/* Resume Button */}
      <div className="contact-actions">
        <a href="/resume.pdf" download className="resume-btn">
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        action="https://formsubmit.co/deokarpranali02@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />

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
          <textarea name="message" placeholder="Your Message" required />
        </div>

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
