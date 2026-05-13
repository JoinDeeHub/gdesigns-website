import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-driven 3D perspective tilt
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const rotateX = useSpring(rawRotateX, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden grain"
      style={{ perspective: '1200px' }}
    >
      {/* Parallax BG Layer — deep depth */}
      <motion.div
        ref={bgRef}
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          inset: '-10%',
          willChange: 'transform',
          y: bgParallax,
          scale: 1.2,
        }}
      />

      {/* Cinematic dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />

      {/* Depth layer: faint grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(234,179,8,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Ambient gold glows */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Gold hairlines */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '18%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.2) 50%, transparent 100%)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: '18%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.14) 50%, transparent 100%)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Main content — 3D scroll tilt */}
      <motion.div
        className="relative z-10 max-w-6xl w-full"
        style={{ rotateX, scale, opacity, y, transformStyle: 'preserve-3d' }}
      >
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.6, delay: 0.2 }}
        >
          Luxury Architecture & Construction
        </motion.p>

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
                style={{ textShadow: '0 0 40px rgba(234,179,8,0.3)' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          className="gold-line mx-auto my-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '12rem', opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          Designing timeless spaces with innovation, elegance, and structural excellence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.a
            href="#projects"
            className="shimmer-btn bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase glow-pulse"
            whileHover={{ scale: 1.06, y: -4, boxShadow: '0 16px 50px rgba(234,179,8,0.5)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-yellow-500/70 text-yellow-400 px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-yellow-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <span>Scroll</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent"
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
