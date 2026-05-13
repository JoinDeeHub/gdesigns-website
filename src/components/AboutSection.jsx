import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

            {/* Elegant signature badges instead of stats */}
            <motion.div
              className="flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {['Residential', 'Commercial', 'Interior', 'Landscape', 'Villa Design'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.25em] text-yellow-500 border border-yellow-500/20 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
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
            {/* Floating label */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-yellow-500 text-black px-5 py-3 rounded-xl text-xs font-bold tracking-widest uppercase shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 }}
            >
              South India
            </motion.div>
            <motion.div
              className="absolute -top-5 -right-5 border border-yellow-500/40 text-yellow-400 px-5 py-3 rounded-xl text-xs font-semibold tracking-widest uppercase bg-black/80 backdrop-blur-sm shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              Multi-City Projects
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
