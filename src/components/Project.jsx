// components/Project.js
import React from "react";
import imgTour from "../assets/img_tour.jpg";
import imgExpenses from "../assets/img_expenses.png";
import imgSaler from "../assets/img_saler.png";
import imgLibary from "../assets/img_libary.png";
import imgProjectManagement from "../assets/img_project-management.png";
import "./styles/Project.css";

function Project() {
  const projects = [
    {
      name: "Book Tour",
      description: "A modern web application built with React and Java Spring Boot 3 and MySQL.",
      image: imgTour,
      link: "https://github.com/anhthu100903/TourBooking",
    },
    {
      name: "Expenses Management",
      description: "A modern web application built with React and Java Spring Boot 3 and MySQL.",
      image: imgExpenses,
      link: "https://github.com/anhthu100903/ExpenseManagement",
    },
    {
      name: "Saler Management",
      description: "A data analysis tool using Python and SQL Server.",
      image: imgSaler,
      link: "https://github.com/anhthu100903/QUANLYBANHANG",
    },
    {
      name: "Libary Management",
      description: "A data analysis tool using Java and SQL Server.",
      image: imgLibary,
      link: "https://github.com/anhthu100903/QLThuVien",
    },
    {
      name: "Project Management",
      description: "A data analysis tool using PHP, React and My SQL.",
      image: imgProjectManagement,
      link: "https://github.com/anhthu100903/project_management-server",
    },
  ];
  

  return (
    <section id="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
