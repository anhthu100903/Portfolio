import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleScrollTo = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <Header handleScrollTo={handleScrollTo} activeTab={activeTab} />

      <div className="content">
        {/* Hiển thị từng section dựa trên activeTab */}
        {activeTab === "home" && <Home />}
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skill />}
        {activeTab === "projects" && <Project />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "contact" && <Contact />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
