// components/Skill.js
import React from "react";
import c from "../assets/img_c.png";
import java from "../assets/img_java.png";
import mysql from "../assets/img_mysql.png";
import python from "../assets/img_python.png";
import cSharp from "../assets/img_sharp.jpg";
import react from "../assets/img_react.png";
import sql_server from "../assets/img_sql-server.png";
import github from "../assets/img_github.png";
import "./styles/Skill.css";

function Skill() {
  const skills = [
    { name: "React", description: "Building interactive user interfaces for web apps.", icon: react },
    { name: "Java", description: "Developing scalable enterprise software.", icon: java },
    { name: "Python", description: "Solving data science and machine learning problems.", icon: python },
    { name: "C#", description: "Building high-performance applications with C#.", icon: cSharp },
    { name: "C++", description: "Developing fast and efficient backend systems.", icon: c },
    { name: "SQL Server", description: "Managing relational databases with SQL Server.", icon: sql_server },
    { name: "MySQL", description: "Creating and optimizing relational databases.", icon: mysql },
    { name: "Github", description: "Version control and collaboration with GitHub.", icon: github }
  ];
  
  

  return (
    <section id="skills">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
