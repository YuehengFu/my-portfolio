const projectList = [
  { title: "Project One", description: "Short description of the project." },
  { title: "Project Two", description: "Short description of the project." },
  { title: "Project Three", description: "Short description of the project." },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;