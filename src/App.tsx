import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const name = "John Doe";
  const profession = "Software Engineer";
  const projects = [
    {
      title: "Project one",
      description: "A web application built using React and Node.js.",
      link: "#",
    },
    {
      title: "Project two",
      description: "An eCommerce platform built using React and Springboot.",
      link: "#",
    },
    {
      title: "Project three",
      description: "A web application built using React and Springboot.",
      link: "#",
    },
  ];

  return (
    <div className="App">
      {/* {header section} */}
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* {about section} */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am {name}, a passionate software engineer with experience in
          building web applications using modern technologies. I enjoy solving
          complex problems and continuously learning new skills.
        </p>
      </section>

      {/* {projects section} */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* {contact section} */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:john.doe@example.com">john.doe@example.com</a>.
        </p>
      </section>

      {/* {footer section} */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
