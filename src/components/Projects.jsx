import TypewriterText from "./TypewriterText";
import impulseGif from "../assets/impulse.gif";
import vehicleSimGif from "../assets/vehiclesim.gif";

const projectList = [
  {
    title: "Impulse",
    description: "A Java space shooter built from scratch with the Greenfoot library. Artwork handmade in Piskel.",
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
      <TypewriterText as="h2" text="My Projects" speed={14} />
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img src={project.image} alt={`${project.title} gameplay`} className="project-image" />
            )}
            <TypewriterText as="h3" text={project.title} speed={11} />
            <TypewriterText as="p" text={project.description} speed={4} />
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
