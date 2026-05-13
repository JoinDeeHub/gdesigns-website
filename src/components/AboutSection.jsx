import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const specialties = ['Residential', 'Commercial', 'Interior', 'Landscape', 'Villa Design'];

const pillars = [
  { num: '9+',        label: 'Years of Excellence' },
  { num: 'Multiple', label: 'Projects Delivered' },
  { num: 'Multiple\nCities', label: 'South Indian' },
  { num: '100%',     label: 'Client Satisfaction' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imgRef    = useRef(null);
  const inView    = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawImgY    = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rawImgScale= useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
  const imgY       = useSpring(rawImgY,    { stiffness: 60, damping: 20 });
  const imgScale   = useSpring(rawImgScale,{ stiffness: 60, damping: 20 });

  const rawTextY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY    = useSpring(rawTextY, { stiffness: 60, damping: 20 });

  const rawRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 4]);
  const rotateY    = useSpring(rawRotateY, { stiffness: 60, damping: 20 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#060606] overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* BG grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(234,179,8,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(234,179,8,0.04) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── IMAGE ── */}
        <motion.div
          className="relative"
          style={{ rotateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, x: -80, rotateY: -15 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(234,179,8,0.1)' }}
          >
            <motion.img
              ref={imgRef}
              src="/house1.jpeg"
              alt="G Designs Architecture"
              className="w-full h-[500px] object-cover object-center"
              style={{ y: imgY, scale: imgScale }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* South India badge */}
          <motion.div
            className="absolute -bottom-5 -left-5 bg-yellow-500 text-black text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, type: 'spring', damping: 20 }}
            style={{ transform: 'translateZ(30px)' }}
          >
            &#x1F30D; South India
          </motion.div>

          {/* Multi-city badge */}
          <motion.div
            className="absolute -top-5 -right-5 bg-black/90 border border-yellow-500/40 text-yellow-400 text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: -20, x: 10 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8, type: 'spring', damping: 20 }}
            style={{ transform: 'translateZ(40px)' }}
          >
            Multi-City Projects
          </motion.div>

          <div className="absolute -inset-1 rounded-2xl -z-10" style={{
            background: 'rgba(234,179,8,0.06)',
            transform: 'translateZ(-20px) translateX(12px) translateY(12px)',
            filter: 'blur(2px)',
          }} />
        </motion.div>

        {/* ── TEXT ── */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="section-label mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            About Us
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Building Dreams<br />
            <span className="text-yellow-400">Across South India</span>
          </h2>

          <motion.div
            className="gold-line mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: '6rem' } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            G Designs Architects &amp; Builders is a premier architectural and construction firm rooted in South India. We craft residences, villas, and commercial spaces that reflect the aspirations of those who inhabit them.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            From detailed floor plans to luxury elevations, we deliver end-to-end design and construction with precision — serving clients across Kerala, Karnataka, and Tamil Nadu.
          </p>

          {/* ── PILLAR COUNTERS ── */}
          <div className="grid grid-cols-2 gap-5 mb-10">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="border border-yellow-500/15 rounded-xl p-4 bg-white/[0.02] backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: 'rgba(234,179,8,0.4)', background: 'rgba(234,179,8,0.04)' }}
              >
                {/* Number — handle newline in "Multiple\nCities" */}
                <div className="text-2xl md:text-3xl font-black text-yellow-400 leading-tight whitespace-pre-line">
                  {p.num}
                </div>
                <div className="text-gray-500 text-[10px] tracking-widest uppercase mt-1">{p.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Specialty tags */}
          <div className="flex flex-wrap gap-2">
            {specialties.map((s, i) => (
              <motion.span
                key={i}
                className="tag-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0 + i * 0.08, type: 'spring', damping: 20 }}
                whileHover={{ borderColor: 'rgba(234,179,8,0.5)', color: '#facc15' }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
