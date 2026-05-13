import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const words = ['G', 'DESIGNS', 'ARCHITECTS', '&', 'BUILDERS'];

const wordVariants = {
  hidden: { opacity: 0, y: 120, skewY: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.13 + 0.5,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.12)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden grain"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

      {/* Ambient gold glows */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/8 blur-[120px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/6 blur-[140px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Thin animated gold horizontal lines */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '18%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.18) 50%, transparent 100%)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: '18%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.12) 50%, transparent 100%)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Label */}
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.4, delay: 0.2 }}
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
          animate={{ width: '12rem', opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          Designing timeless spaces with innovation, elegance, and structural excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.a
            href="#projects"
            className="shimmer-btn bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase glow-pulse"
            whileHover={{ scale: 1.06, y: -3, boxShadow: '0 12px 40px rgba(234,179,8,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-yellow-500 text-yellow-400 px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-yellow-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator mt-16 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
