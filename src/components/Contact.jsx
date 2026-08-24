function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out via email or connect on GitHub.</p>
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
