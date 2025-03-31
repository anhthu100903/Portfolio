// components/Header.js
import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img_logo.jpg";
import "./styles/Header.css";

function Header({ handleScrollTo, activeTab }) {
  // Trạng thái để kiểm soát việc mở/đóng menu trên mobile
  const [isMobile, setIsMobile] = useState(false);

  // Xử lý toggle menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      {/* Thay h1 bằng thẻ img */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
        <h4>Anh Thư</h4>
      </div>
      <nav>
        <ul className={isMobile ? "nav-links nav-active" : "nav-links"}>
          <li
            onClick={() => handleScrollTo("home")}
            className={activeTab === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => handleScrollTo("about")}
            className={activeTab === "about" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => handleScrollTo("skills")}
            className={activeTab === "skills" ? "active" : ""}
          >
            Skills
          </li>
          <li
            onClick={() => handleScrollTo("projects")}
            className={activeTab === "projects" ? "active" : ""}
          >
            Projects
          </li>
          <li
            onClick={() => handleScrollTo("resume")}
            className={activeTab === "resume" ? "active" : ""}
          >
            Resume
          </li>
          <li
            onClick={() => handleScrollTo("contact")}
            className={activeTab === "contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Icon Hamburger/Close cho mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
}

export default Header;
