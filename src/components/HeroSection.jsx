import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const words = ['G', 'DESIGNS', 'ARCHITECTS', '&', 'BUILDERS'];

const wordVariants = {
  hidden: { opacity: 0, y: 100, skewY: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.14 + 0.4,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.45}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="hero-bg scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          inset: 0,
          willChange: 'transform',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Gold vignette corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Label */}
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Luxury Architecture & Construction
        </motion.p>

        {/* Headline word-by-word */}
        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-yellow-400 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Animated gold divider */}
        <motion.div
          className="gold-line mx-auto my-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '10rem', opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
        >
          Designing timeless spaces with innovation, elegance, and structural excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8 }}
        >
          <motion.a
            href="#projects"
            className="shimmer-btn bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-yellow-400 transition-colors duration-300 glow-pulse"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-yellow-500 text-yellow-400 px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-yellow-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator mt-16 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
