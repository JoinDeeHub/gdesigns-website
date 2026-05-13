import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaEnvelope className="text-yellow-500 text-xl" />,
    label: 'gdesigns.ab@gmail.com',
    href: 'mailto:gdesigns.ab@gmail.com',
  },
  {
    icon: <FaPhoneAlt className="text-yellow-500 text-xl" />,
    label: '+91 9567169331',
    href: 'tel:+919567169331',
  },
  {
    icon: <FaInstagram className="text-yellow-500 text-xl" />,
    label: 'Follow on Instagram',
    href: 'https://www.instagram.com/gdesigns.ab?igsh=MWpqem01cTNsM2JwNA==',
    external: true,
  },
];

const locations = [
  'Palace Road Attingal, Kerala',
  'Bengaluru, Karnataka, India',
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="bg-black py-28 px-6 text-center overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto">

        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let's Build Something{' '}
          <span className="text-yellow-400">Amazing</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact G Designs Architects & Builders for premium architectural solutions
          and modern construction services.
        </motion.p>

        {/* Contact Items */}
        <div className="flex flex-col gap-4 mb-10">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="contact-item mx-auto w-full max-w-md"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Locations */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          {locations.map((loc, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>{loc}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="footer-glow mb-6" />
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          © 2026 G Designs Architects & Builders. All rights reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2 tracking-wide">
          Crafted with passion — Kerala & Bengaluru
        </p>
      </motion.div>
    </section>
  );
}
