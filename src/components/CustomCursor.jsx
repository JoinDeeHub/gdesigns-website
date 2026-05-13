import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dot = { x: mouse.x, y: mouse.y };
    let ring = { x: mouse.x, y: mouse.y };
    let rafId;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (e.target.closest('a, button, .project-card')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // Dot follows mouse instantly (no lag)
      dot.x = lerp(dot.x, mouse.x, 0.45);
      dot.y = lerp(dot.y, mouse.y, 0.45);

      // Ring follows with smooth, gentle lag
      ring.x = lerp(ring.x, mouse.x, 0.1);
      ring.y = lerp(ring.y, mouse.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovered ? 'hovered' : ''}`} />
    </>
  );
}
