// components/About.js
import React from "react";
import img_about from "../assets/img_about.svg";
import "./styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="row">
          <div className="col-5 about-img">
            <img
              src={img_about} // Thay bằng ảnh của bạn
              alt="About Me"
              className="img-fluid about-pic"
            />
          </div>
          <div className="col-7 about-text">
            <p className="about-intro">
              I'm 
              <strong> Phan Thi Anh Thu</strong>
              , a senior at Saigon University majoring in
              Software Engineering. With a passion for technology, I specialize
              in creating innovative web applications using 
              <strong> React, Java, Python,
              and C#. </strong>
              I focus on building seamless, responsive, and impactful
              digital experiences.
            </p>

            {/* Thông tin cá nhân */}
            <div className="about-info">
              <ul>
                <li>
                  <strong>📍 From:</strong> Vietnam
                </li>
                <li>
                  <strong>🏙️ Lives In:</strong> Ho Chi Minh City
                </li>
                <li>
                  <strong>🎂 Age:</strong> 22
                </li>
                <li>
                  <strong>⚡ Gender:</strong> Female
                </li>
                <li>
                  <strong>📧 Email:</strong>{" "}
                  <a href="mailto:anhthu115599@gmail.com">
                    anhthu115599@mail.com
                  </a>
                </li>
                <li>
                  <strong>📞 Phone:</strong>{" "}
                  <a href="tel:+84378587427">(+84) 374-278-587</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
