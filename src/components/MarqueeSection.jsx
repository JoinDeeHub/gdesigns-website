import { motion } from 'framer-motion';

const items = [
  'Residential', 'Commercial', 'Interior Design', 'Landscape',
  'Architectural Visualization', 'Floor Planning', 'Villa Design', '3D Rendering',
];

function MarqueeRow({ reverse = false }) {
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm uppercase tracking-[0.3em] font-light"
            style={{ color: i % 2 === 0 ? '#eab308' : '#555' }}
          >
            {item} <span className="text-yellow-700 mx-3">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0a0a0a] py-6 border-y border-yellow-500/10 overflow-hidden">
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}
