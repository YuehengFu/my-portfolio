import TypewriterText from "./TypewriterText";

function Contact() {
  return (
    <section id="contact" className="contact">
      <TypewriterText as="h2" text="Get In Touch" speed={14} />
      <TypewriterText as="p" text="Feel free to reach out via email or connect on GitHub." speed={4} />
      <div className="contact-links">
        <a href="mailto:yueheng.fu@uwaterloo.ca" className="btn">Say Hello</a>
        <a
          href="https://github.com/YuehengFu"
          className="btn btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
