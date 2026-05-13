import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const scenes = [
  {
    label: 'Concept',
    title: 'Vision Born\nFrom Blueprint',
    sub: 'Every great structure begins as a single line on paper — a quiet declaration of what is possible.',
    accent: 'Architectural Planning',
    align: 'left',
    bg: 'from-black via-[#0a0800] to-black',
    xDir: -1,
  },
  {
    label: 'Structure',
    title: 'Form Meets\nFunction',
    sub: 'We engineer spaces that breathe — where structural integrity and aesthetic beauty coexist in perfect tension.',
    accent: 'Structural Engineering',
    align: 'right',
    bg: 'from-black via-[#080800] to-black',
    xDir: 1,
  },
  {
    label: 'Finish',
    title: 'Crafted Down\nTo The Detail',
    sub: 'The final 10% defines everything — materials, light, shadow, and the feel of a surface under your hand.',
    accent: 'Interior & Finish',
    align: 'left',
    bg: 'from-black via-[#06080a] to-black',
    xDir: -1,
  },
];

function SceneCard({ scene, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [scene.xDir * 120, 0, 0, scene.xDir * -60]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.95]);
  const rawRotateY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [scene.xDir * 18, 0, 0, scene.xDir * -8]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ['0%', '100%']);

  const x = useSpring(rawX, { stiffness: 60, damping: 18 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 18 });
  const scale = useSpring(rawScale, { stiffness: 60, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 60, damping: 18 });

  const isRight = scene.align === 'right';

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center px-8 md:px-20 bg-gradient-to-b ${scene.bg} relative overflow-hidden`}
    >
      {/* Cinematic noise grain */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />

      {/* Large scene number */}
      <div className={`absolute ${isRight ? 'left-8' : 'right-8'} bottom-12 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none`}>
        0{index + 1}
      </div>

      {/* Gold vertical accent line */}
      <motion.div
        className={`absolute ${isRight ? 'left-8 md:left-16' : 'right-8 md:right-16'} top-1/2 -translate-y-1/2 w-[1px] bg-yellow-500/30`}
        style={{ height: lineWidth, maxHeight: '40vh' }}
      />

      <motion.div
        className={`max-w-3xl w-full ${isRight ? 'ml-auto text-right' : 'text-left'}`}
        style={{
          x,
          opacity,
          scale,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <motion.p
          className="text-yellow-500/80 text-xs tracking-[0.4em] uppercase mb-6 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {scene.label} — {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </motion.p>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8" style={{ textShadow: '0 0 80px rgba(234,179,8,0.15)' }}>
          {scene.title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span className="text-yellow-400">{line}</span> : line}
            </span>
          ))}
        </h2>

        <motion.div
          className={`h-[1px] bg-gradient-to-r from-yellow-500/60 to-transparent mb-8 ${isRight ? 'ml-auto' : ''}`}
          style={{ width: lineWidth }}
        />

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
          {scene.sub}
        </p>

        <div className={`mt-10 flex items-center gap-3 ${isRight ? 'justify-end' : 'justify-start'}`}>
          <div className="w-8 h-[1px] bg-yellow-500/50" />
          <span className="text-yellow-500/60 text-xs tracking-[0.3em] uppercase">{scene.accent}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function CinematicScroll() {
  return (
    <section className="relative bg-black" style={{ perspective: '1px' }}>
      {/* Section intro */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 bg-black">
        <motion.p
          className="text-yellow-500/60 text-xs tracking-[0.5em] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          How We <span className="text-yellow-400">Build</span>
        </motion.h2>
        <motion.div
          className="gold-line mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Three phases. One vision. Infinite detail.
        </motion.p>
      </div>

      {/* Cinematic scenes */}
      {scenes.map((scene, i) => (
        <SceneCard key={i} scene={scene} index={i} total={scenes.length} />
      ))}

      {/* Exit transition */}
      <div className="h-32 bg-gradient-to-b from-black to-[#050505]" />
    </section>
  );
}
