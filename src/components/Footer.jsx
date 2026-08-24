import TypewriterText from "./TypewriterText";

function Footer() {
  return (
    <footer className="footer">
      <TypewriterText as="p" text={`© ${new Date().getFullYear()} Yueheng Fu`} speed={6} showCursor={false} />
    </footer>
  );
}

export default Footer;
