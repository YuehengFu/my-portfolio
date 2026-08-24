import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function TypewriterText({ text, speed = 8, as: Tag = "span", className, showCursor = true }) {
  const ref = useRef(null);
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? text : ""));
  const [done, setDone] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const timeouts = [];
    let started = false;

    const typeChar = (i) => {
      setTyped(text.slice(0, i));
      if (i < text.length) {
        timeouts.push(setTimeout(() => typeChar(i + 1), speed));
      } else {
        setDone(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            observer.unobserve(el);
            typeChar(0);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [text, speed]);

  return (
    <Tag ref={ref} className={className}>
      {typed}
      {showCursor && !done && <span className="cursor">_</span>}
    </Tag>
  );
}

export default TypewriterText;
