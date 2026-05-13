import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

const featured = [
  {
    image: '/house1.jpeg',
    title: 'Modern Luxury Residence',
    desc: 'Elegant contemporary architecture with premium elevation and spacious planning.',
    tag: 'Residential',
    year: '2024',
  },
  {
    image: '/house2.jpeg',
    title: 'Contemporary Villa Design',
    desc: 'Premium residential architecture with timeless aesthetics and elegance.',
    tag: 'Villa',
    year: '2024',
  },
  {
    image: '/stairs1.jpeg',
    title: 'Premium Interior Staircase',
    desc: 'Luxury floating staircase concept with elegant detailing and interiors.',
    tag: 'Interior',
    year: '2023',
  },
  {
    image: '/stairs2.jpeg',
    title: 'Modern Interior Architecture',
    desc: 'Interior concepts designed with luxury, creativity and modern aesthetics.',
    tag: 'Interior',
    year: '2023',
  },
];

const more = [
  { image: '/project1.jpeg', title: 'Luxury Courtyard Villa', desc: 'Elegant tropical-style residence with open spaces and premium landscape planning.', tag: 'Villa', year: '2024' },
  { image: '/project2.jpeg', title: 'Modern Kerala Residence', desc: 'Contemporary architecture inspired by traditional Kerala roofing aesthetics.', tag: 'Residential', year: '2023' },
  { image: '/project3.jpeg', title: 'Contemporary Family Home', desc: 'Minimal modern elevation with luxurious outdoor and parking design.', tag: 'Residential', year: '2023' },
  { image: '/project4.jpeg', title: 'Urban Duplex Design', desc: 'Sophisticated duplex residence designed for functionality and elegance.', tag: 'Duplex', year: '2022' },
  { image: '/project5.jpeg', title: 'Premium Apartment Project', desc: 'Multi-floor residential project with modern structural detailing.', tag: 'Apartment', year: '2022' },
  { image: '/project6.jpeg', title: 'Luxury Landscape Design', desc: 'Beautiful outdoor paving and landscape concepts with modern aesthetics.', tag: 'Landscape', year: '2024' },
  { image: '/project7.jpeg', title: 'Architectural Visualization 1', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render', year: '2024' },
  { image: '/project8.jpeg', title: 'Architectural Visualization 2', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render', year: '2024' },
  { image: '/project9.jpeg', title: 'Architectural Visualization 3', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render', year: '2024' },
];

function TiltCard({ project, index, large = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 25 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      className="project-card-3d cursor-none group"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '900px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dynamic glow follow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(234,179,8,0.12) 0%, transparent 60%)`,
        }}
      />

      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className={`w-full ${large ? 'h-[420px]' : 'h-[280px] md:h-[340px]'} object-cover`}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />
        {/* Cinematic overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Tag badge on image */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
          {project.tag}
        </div>
        {/* Year */}
        <div className="absolute top-4 right-4 text-gray-400 text-[10px] tracking-widest">{project.year}</div>
      </div>

      {/* Info — pushed forward in Z */}
      <div className="p-5 pb-6" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-lg font-bold text-yellow-400 mt-1 leading-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{project.desc}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-5 h-[1px] bg-yellow-500/50" />
          <span className="text-yellow-600/70 text-[10px] tracking-[0.25em] uppercase">View Details</span>
        </div>
      </div>
    </motion.div>
  );
}

// Horizontal scroll strip for featured
function HorizontalStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <div ref={ref} className="overflow-hidden py-3">
      <motion.div
        className="flex gap-4 whitespace-nowrap text-[11vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
        style={{ x }}
      >
        {['RESIDENTIAL', 'VILLA', 'INTERIOR', 'LANDSCAPE', 'DUPLEX', 'COMMERCIAL'].map((t, i) => (
          <span key={i}>{t} &#10022; </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="py-28 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={headerRef}>
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl font-black"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Premium Architectural <span className="text-yellow-400">Designs</span>
            </motion.h2>
            <motion.div
              className="gold-line mx-auto mt-6"
              initial={{ width: 0 }}
              animate={inView ? { width: '6rem' } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>

          {/* Big asymmetric grid */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* Large featured first */}
            <div className="md:col-span-7">
              <TiltCard project={featured[0]} index={0} large />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <TiltCard project={featured[1]} index={1} />
              <TiltCard project={featured[2]} index={2} />
            </div>
            <div className="md:col-span-12">
              <TiltCard project={featured[3]} index={3} large />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling text strip */}
      <div className="bg-black overflow-hidden">
        <HorizontalStrip />
      </div>

      {/* More Projects */}
      <section className="bg-[#050505] py-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              More Creations
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              Explore More <span className="text-yellow-400">Projects</span>
            </motion.h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-500/0 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <TiltCard key={i} project={p} index={i % 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
