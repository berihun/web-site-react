function ProjectList() {
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
    <div>
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
    </div>
  );
}
export default ProjectList;
