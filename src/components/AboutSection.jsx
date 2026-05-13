import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '10+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '2', label: 'Locations Served' },
];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-extrabold text-yellow-400"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {value}
    </motion.span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <section id="about" className="bg-[#0b0b0b] py-28 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Text */}
          <div>
            <motion.p
              className="section-label mb-4"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              About Us
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Building Dreams.<br />
              <span className="text-yellow-400">Creating Reality.</span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-yellow-500 mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: '6rem' } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {[
              'G Designs Architects & Builders specializes in residential, commercial, and modern architectural projects. Our mission is to blend creativity with functionality to create inspiring spaces.',
              'From concept planning to final construction, we ensure quality, precision, and customer satisfaction at every stage of the journey.',
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-gray-400 text-lg leading-relaxed mb-6"
                custom={i + 2}
                variants={textVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Image with curtain reveal */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
          >
            <img
              src="/project6.jpeg"
              alt="Architecture"
              className="rounded-3xl shadow-2xl object-cover w-full h-[480px] border border-yellow-500/20"
            />
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-400 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-400 rounded-br-3xl" />
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20" data-stagger>
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <AnimatedNumber value={stat.number} />
              <p className="text-gray-400 text-sm mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
