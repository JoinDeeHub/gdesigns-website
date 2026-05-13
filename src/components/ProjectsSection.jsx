import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';

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
  { image: '/project1.jpeg', title: 'Luxury Courtyard Villa',       desc: 'Elegant tropical-style residence with open spaces and premium landscape planning.',   tag: 'Villa',        year: '2024' },
  { image: '/project2.jpeg', title: 'Modern Kerala Residence',       desc: 'Contemporary architecture inspired by traditional Kerala roofing aesthetics.',         tag: 'Residential',  year: '2023' },
  { image: '/project3.jpeg', title: 'Contemporary Family Home',      desc: 'Minimal modern elevation with luxurious outdoor and parking design.',                   tag: 'Residential',  year: '2023' },
  { image: '/project4.jpeg', title: 'Urban Duplex Design',           desc: 'Sophisticated duplex residence designed for functionality and elegance.',               tag: 'Duplex',       year: '2022' },
  { image: '/project5.jpeg', title: 'Premium Apartment Project',     desc: 'Multi-floor residential project with modern structural detailing.',                    tag: 'Apartment',    year: '2022' },
  { image: '/project6.jpeg', title: 'Luxury Landscape Design',       desc: 'Beautiful outdoor paving and landscape concepts with modern aesthetics.',              tag: 'Landscape',    year: '2024' },
  { image: '/project7.jpeg', title: 'Architectural Visualization 1', desc: 'High-quality architectural concept render with detailed planning.',                   tag: '3D Render',    year: '2024' },
  { image: '/project8.jpeg', title: 'Architectural Visualization 2', desc: 'High-quality architectural concept render with detailed planning.',                   tag: '3D Render',    year: '2024' },
  { image: '/project9.jpeg', title: 'Architectural Visualization 3', desc: 'High-quality architectural concept render with detailed planning.',                   tag: '3D Render',    year: '2024' },
];

/* ─────────────────────────────────────────────
   Cinematic 3-D Tilt Card
   — fixed height per variant, object-cover
   — cursor-following glow
   — image zoom + reveal overlay on hover
───────────────────────────────────────────── */
function TiltCard({ project, index, imgH = 'h-[340px]' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  // 3-D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 25 });

  // Glow follow
  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); setHovered(false); };

  return (
    <motion.div
      ref={ref}
      className="project-card-3d cursor-none group w-full"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '900px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setHovered(true)}
      initial={{ opacity: 0, y: 80, rotateX: 12 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cursor-reactive glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(234,179,8,0.13) 0%, transparent 60%)`,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Image container — fixed height, no overflow crop */}
      <div className={`relative overflow-hidden rounded-t-2xl ${imgH} w-full`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />

        {/* Cinematic dark gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Hover overlay — slides up from bottom */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }}
            >
              <span className="text-[10px] text-yellow-400 tracking-widest uppercase mb-1">{project.tag} · {project.year}</span>
              <p className="text-white text-sm leading-snug font-medium">{project.title}</p>
              <p className="text-gray-300 text-xs mt-1 leading-relaxed line-clamp-2">{project.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <motion.div
                  className="h-[1px] bg-yellow-500"
                  initial={{ width: 0 }}
                  animate={{ width: '2rem' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                <span className="text-yellow-500/70 text-[10px] tracking-widest uppercase">View</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tag badge — top left */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-yellow-500/25 text-yellow-400 text-[9px] tracking-widest uppercase px-3 py-1 rounded-full z-20">
          {project.tag}
        </div>
        {/* Year — top right */}
        <div className="absolute top-3 right-3 text-gray-400/70 text-[9px] tracking-widest z-20">{project.year}</div>
      </div>

      {/* Below-image info — always visible */}
      <div className="p-4 pb-5" style={{ transform: 'translateZ(16px)' }}>
        <h3 className="text-base font-bold text-yellow-400 leading-tight">{project.title}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{project.desc}</p>
      </div>
    </motion.div>
  );
}

/* Parallax text watermark strip */
function HorizontalStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  return (
    <div ref={ref} className="overflow-hidden py-2 bg-black">
      <motion.div
        className="flex gap-4 whitespace-nowrap text-[10vw] font-black text-white/[0.025] select-none pointer-events-none leading-none"
        style={{ x }}
      >
        {['RESIDENTIAL', 'VILLA', 'INTERIOR', 'LANDSCAPE', 'DUPLEX', 'COMMERCIAL', 'RESIDENTIAL'].map((t, i) => (
          <span key={i}>{t}&nbsp;&#10022;&nbsp;</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const inView    = useInView(headerRef, { once: true });

  return (
    <>
      {/* ── FEATURED ── */}
      <section id="projects" className="py-28 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
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

          {/*
            ASYMMETRIC GRID
            Row 1 : large left (col-7) + two stacked right (col-5)
            Row 2 : two equal cards side-by-side (col-6 each)
            All cards use a fixed image height so nothing crops oddly.
          */}
          <div className="grid md:grid-cols-12 gap-6">

            {/* Large hero card */}
            <div className="md:col-span-7 flex flex-col">
              <TiltCard project={featured[0]} index={0} imgH="h-[420px]" />
            </div>

            {/* Two stacked cards, equal height */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <TiltCard project={featured[1]} index={1} imgH="h-[196px]" />
              <TiltCard project={featured[2]} index={2} imgH="h-[196px]" />
            </div>

            {/* Full-width bottom card */}
            <div className="md:col-span-12">
              <TiltCard project={featured[3]} index={3} imgH="h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling watermark strip */}
      <HorizontalStrip />

      {/* ── MORE PROJECTS ── */}
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
            <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-6" />
          </div>

          {/* Equal 3-col grid — uniform image height */}
          <div className="grid md:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <TiltCard key={i} project={p} index={i % 3} imgH="h-[260px]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
