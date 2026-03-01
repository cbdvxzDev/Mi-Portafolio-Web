import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'py-3 sm:py-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800'
          : 'py-5 sm:py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="/"
          onClick={scrollToTop}
          className="relative group cursor-pointer z-110"
        >
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-black dark:text-white uppercase">
            CAROLINA<span className="text-brand-accent">.</span>DEV
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* Desktop & Tablet Menu (≥ 768px) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-10">
          <div className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
          {/* Separador vertical */}
          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />
          <ThemeToggle />
        </div>

        {/* Mobile Trigger (< 768px) */}
        <div className="md:hidden flex items-center gap-3 z-110">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay — cubre toda la pantalla */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-white dark:bg-black flex flex-col justify-center px-8 md:hidden"
              style={{ height: '100dvh' }}
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white hover:text-brand-accent transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};