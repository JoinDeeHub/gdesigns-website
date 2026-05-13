import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-12 h-12 rounded-full border border-yellow-500/40 object-cover"
            />
            <div className="leading-tight">
              <p className="text-yellow-400 font-bold text-sm md:text-base tracking-wide">
                G DESIGNS
              </p>
              <p className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase">
                Architects & Builders
              </p>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            {links.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => handleLink(`#${link.toLowerCase()}`)}
                className="nav-link text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
                whileHover={{ color: '#eab308' }}
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] z-[110] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-yellow-400"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-yellow-400"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-yellow-400"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => handleLink(`#${link.toLowerCase()}`)}
                className="text-2xl uppercase tracking-[0.2em] text-white hover:text-yellow-400 transition-colors"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
