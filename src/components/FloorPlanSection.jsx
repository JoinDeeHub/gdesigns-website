import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FloorPlanSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 px-6 bg-[#0b0b0b] overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-4">Floor Plan</p>
          <h2 className="text-4xl md:text-5xl font-bold">Detailed Architectural Planning</h2>
        </motion.div>

        {/* Animated Blueprint SVG decoration */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <svg width="320" height="80" viewBox="0 0 320 80" fill="none">
            <motion.rect
              x="10" y="10" width="100" height="60"
              stroke="#eab308" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.rect
              x="130" y="25" width="60" height="30"
              stroke="#eab308" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 1.2, delay: 0.9 }}
            />
            <motion.rect
              x="210" y="10" width="100" height="60"
              stroke="#eab308" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.line x1="110" y1="40" x2="130" y2="40"
              stroke="#eab308" strokeWidth="1" strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            />
            <motion.line x1="190" y1="40" x2="210" y2="40"
              stroke="#eab308" strokeWidth="1" strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
            />
          </svg>
        </motion.div>

        <motion.a
          href="/final floor plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-yellow-500/20 rounded-2xl p-10 hover:bg-yellow-500/8 transition-all duration-400 bg-[#111] text-center group glow-pulse"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          whileHover={{ scale: 1.02, borderColor: 'rgba(234,179,8,0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-14 h-14 mx-auto mb-5 border border-yellow-500/40 rounded-2xl flex items-center justify-center"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-2xl">📐</span>
          </motion.div>
          <h3 className="text-2xl text-yellow-400 font-semibold mb-3 group-hover:text-yellow-300 transition-colors">
            View Floor Plan PDF
          </h3>
          <p className="text-gray-400">
            Click here to explore detailed architectural floor plans and planning documentation.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-yellow-500 text-sm tracking-widest uppercase">
            Open PDF
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
