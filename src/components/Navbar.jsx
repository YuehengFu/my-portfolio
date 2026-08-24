import { useState } from "react";
import TypewriterText from "./TypewriterText";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <TypewriterText as="h2" className="logo" text="Yueheng Fu" speed={10} />
      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#experiences" onClick={() => setIsOpen(false)}>Experiences</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
