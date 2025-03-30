import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Import Facebook and LinkedIn icons
import { AiOutlineGithub } from "react-icons/ai"; // GitHub icon from react-icons
import "./styles/Contact.css"; // Import CSS file for styling

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <AiOutlineMail size={30} />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anhthu115599@mail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            anhthu115599@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <AiOutlinePhone size={30} />
          <a href="tel:+84378587427">0378587427</a>
        </div>
      </div>

      {/* Contact items below */}
      <div className="contact-links">
        <div className="contact-item">
          <AiOutlineGithub size={30} />
          <a
            href="https://github.com/anhthu100903"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaFacebook size={30} />
          <a
            href="https://www.facebook.com/thu.phans.9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin size={30} />
          <a
            href="https://www.linkedin.com/in/phan-thi-anh-thu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
