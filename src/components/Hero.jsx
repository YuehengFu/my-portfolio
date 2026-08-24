import { useEffect, useState } from "react";

const LINES = [
  "Hi, I'm Yueheng Fu",
  'First Year Systems Design Engineering Student @University of Waterloo',
];
const TYPE_SPEED = 40;
const LINE_PAUSE = 500;
const START_DELAY = 300;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Hero() {
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? LINES : ["", ""]));
  const [activeLine, setActiveLine] = useState(0);
  const [doneTyping, setDoneTyping] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let cancelled = false;
    const timeouts = [];

    const typeLine = (lineIndex, charIndex) => {
      if (cancelled) return;
      if (lineIndex >= LINES.length) {
        setDoneTyping(true);
        return;
      }
      setActiveLine(lineIndex);
      const line = LINES[lineIndex];
      if (charIndex > line.length) {
        timeouts.push(setTimeout(() => typeLine(lineIndex + 1, 0), LINE_PAUSE));
        return;
      }
      setTyped((prev) => {
        const next = [...prev];
        next[lineIndex] = line.slice(0, charIndex);
        return next;
      });
      timeouts.push(setTimeout(() => typeLine(lineIndex, charIndex + 1), TYPE_SPEED));
    };

    timeouts.push(setTimeout(() => typeLine(0, 0), START_DELAY));

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <h1>
        {typed[0]}
        {activeLine === 0 && !doneTyping && <span className="cursor">_</span>}
      </h1>
      <p>
        {typed[1]}
        {(activeLine === 1 || doneTyping) && <span className="cursor">_</span>}
      </p>
    </section>
  );
}

export default Hero;
