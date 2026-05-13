import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const featured = [
  {
    image: '/house1.jpeg',
    title: 'Modern Luxury Residence',
    desc: 'Elegant contemporary architecture with premium elevation and spacious planning.',
    tag: 'Residential',
  },
  {
    image: '/house2.jpeg',
    title: 'Contemporary Villa Design',
    desc: 'Premium residential architecture with timeless aesthetics and elegance.',
    tag: 'Villa',
  },
  {
    image: '/stairs1.jpeg',
    title: 'Premium Interior Staircase',
    desc: 'Luxury floating staircase concept with elegant detailing and interiors.',
    tag: 'Interior',
  },
  {
    image: '/stairs2.jpeg',
    title: 'Modern Interior Architecture',
    desc: 'Interior concepts designed with luxury, creativity and modern aesthetics.',
    tag: 'Interior',
  },
];

const more = [
  { image: '/project1.jpeg', title: 'Luxury Courtyard Villa', desc: 'Elegant tropical-style residence with open spaces and premium landscape planning.', tag: 'Villa' },
  { image: '/project2.jpeg', title: 'Modern Kerala Residence', desc: 'Contemporary architecture inspired by traditional Kerala roofing aesthetics.', tag: 'Residential' },
  { image: '/project3.jpeg', title: 'Contemporary Family Home', desc: 'Minimal modern elevation with luxurious outdoor and parking design.', tag: 'Residential' },
  { image: '/project4.jpeg', title: 'Urban Duplex Design', desc: 'Sophisticated duplex residence designed for functionality and elegance.', tag: 'Duplex' },
  { image: '/project5.jpeg', title: 'Premium Apartment Project', desc: 'Multi-floor residential project with modern structural detailing.', tag: 'Apartment' },
  { image: '/project6.jpeg', title: 'Luxury Landscape Design', desc: 'Beautiful outdoor paving and landscape concepts with modern aesthetics.', tag: 'Landscape' },
  { image: '/project7.jpeg', title: 'Architectural Visualization 1', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render' },
  { image: '/project8.jpeg', title: 'Architectural Visualization 2', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render' },
  { image: '/project9.jpeg', title: 'Architectural Visualization 3', desc: 'High-quality architectural concept render with detailed planning.', tag: '3D Render' },
];

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="project-card cursor-none"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ z: 20 }}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[320px] md:h-[380px] object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="overlay" />
      <div className="card-info">
        <span className="text-xs text-yellow-500 uppercase tracking-widest">{project.tag}</span>
        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-1 leading-relaxed">{project.desc}</p>
      </div>
      {/* Always-visible info below image */}
      <div className="p-5">
        <span className="text-[10px] text-yellow-500 uppercase tracking-widest">{project.tag}</span>
        <h3 className="text-lg font-semibold text-yellow-400 mt-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{project.desc}</p>
      </div>
    </motion.div>
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
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Premium Architectural Designs
            </motion.h2>
            <motion.div
              className="gold-line mx-auto mt-6"
              initial={{ width: 0 }}
              animate={inView ? { width: '6rem' } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((p, i) => (
              <TiltCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="bg-[#050505] py-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-anim>
            <p className="section-label mb-4">More Creations</p>
            <h2 className="text-4xl md:text-5xl font-bold">Explore More Projects</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {more.map((p, i) => (
              <TiltCard key={i} project={p} index={i % 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
