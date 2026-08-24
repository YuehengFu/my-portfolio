import impulseGif from "../assets/impulse.gif";
import vehicleSimGif from "../assets/vehiclesim.gif";

const projectList = [
  {
    title: "Impulse",
    description: "A Java space shooter from scratch with the Greenfoot library. Artwork handmade in Piskel.",
    image: impulseGif,
    tags: ["Java", "Greenfoot"],
    link: "https://github.com/YuehengFu/Impulse",
  },
  {
    title: "Ancient Greece Battleground Simulation",
    description: "Includes special events with Poseidon, Hades, Zeus & more.",
    image: vehicleSimGif,
    tags: ["Java", "Greenfoot"],
    link: "https://github.com/YuehengFu/YuehengFuVehicleSimulator",
  },
  {
    title: "Coming soon",
    description: "More projects incoming...",
    tags: ["TODO"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img src={project.image} alt={`${project.title} gameplay`} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
