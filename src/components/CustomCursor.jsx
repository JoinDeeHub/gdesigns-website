import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px';
        dotRef.current.style.top = y + 'px';
      }
      if (ringRef.current) {
        // Slight lag for ring
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.left = x + 'px';
            ringRef.current.style.top = y + 'px';
          }
        }, 60);
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-card')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovered ? 'hovered' : ''}`} />
    </>
  );
}
