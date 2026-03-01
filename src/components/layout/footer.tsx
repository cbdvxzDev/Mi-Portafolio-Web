import { motion } from 'framer-motion';
import { Magnetic } from '../animations/magnetic';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/carolina-blanquicett-devoz-523068379/' },
    { name: 'GitHub',   href: 'https://github.com/cbdvxzDev' },
    { name: 'Instagram',href: 'https://www.instagram.com/' },
    { name: 'CV',       href: '/CV.pdf' },
  ];

  return (
    <footer className="w-full py-10 sm:py-14 md:py-20 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        {/* Superior: Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-16 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] text-black dark:text-white"
            >
              CAROLINA<span className="text-brand-accent">.</span>DEV
            </motion.div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xs text-xs md:text-sm leading-relaxed font-light">
              Diseñando y desarrollando experiencias digitales con un enfoque
              en la simplicidad y el rendimiento.
            </p>
          </div>

          {/* Social links — flex-wrap para que no se desborden en pantallas estrechas */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 sm:gap-x-8 md:gap-x-10 gap-y-4">
            {socialLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white overflow-hidden block py-2"
                >
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute top-2 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-brand-accent">
                    {link.name}
                  </span>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Inferior: Créditos + Stack */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-zinc-100 dark:border-zinc-800
                        flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-8
                        text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {currentYear} — Hecho por Carolina</p>
            <span className="hidden sm:block w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
            <p>Cartagena, Colombia</p>
          </div>

          {/* Stack — se oculta en móviles muy pequeños para no saturar */}
          <div className="hidden xs:flex flex-wrap justify-center gap-x-4 gap-y-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
            {['React', 'TypeScript', 'Framer Motion', 'Tailwind'].map((tech) => (
              <span key={tech} className="hover:text-brand-accent transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};