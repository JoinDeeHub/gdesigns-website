import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  useEffect(() => {
    // Fade-up for all [data-anim] elements
    const elements = document.querySelectorAll('[data-anim]');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Stagger children for [data-stagger]
    const staggerGroups = document.querySelectorAll('[data-stagger]');
    staggerGroups.forEach((group) => {
      const children = group.children;
      gsap.fromTo(
        children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
}
