import { motion } from 'framer-motion';

const items = [
  'Residential', 'Commercial', 'Interior Design', 'Landscape',
  'Architectural Visualization', 'Floor Planning', 'Villa Design', '3D Rendering',
  'Kerala', 'Bengaluru', 'South India',
];

function MarqueeRow({ reverse = false, speed = 30 }) {
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm uppercase tracking-[0.3em] font-light"
            style={{ color: i % 2 === 0 ? '#eab308' : '#444' }}
          >
            {item} <span className="text-yellow-800 mx-3">&#10022;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0a0a0a] py-6 border-y border-yellow-500/10 overflow-hidden">
      <MarqueeRow speed={35} />
      <MarqueeRow reverse speed={28} />
    </section>
  );
}
