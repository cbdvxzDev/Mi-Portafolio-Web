import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Reveal } from '../../components/animations/reveal';
import { Button } from '../../components/ui/button';
import { Magnetic } from '../../components/animations/magnetic';
import { useMousePosition } from '../../hooks/useMousePosition';
import fotoPerfil from '../../assets/perfil2.png';

export const Hero = () => {
  const { x, y } = useMousePosition();
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const background = useMotionTemplate`radial-gradient(600px at ${x}px ${y}px, rgba(109,40,217,0.06), transparent 80%)`;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Efecto luz cursor — solo desktop */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 opacity-0 lg:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      <div className="relative z-40 w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-6 sm:gap-8 md:gap-12">

        {/* ── PERFIL ── */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-10"
        >
          <Reveal>
            {/* Foto — responsive fluido */}
            <div className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52 lg:w-48 lg:h-60 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl shrink-0">
              <img
                src={fotoPerfil}
                alt="Carolina Blanquicett"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-semibold">
                Cartagena, Colombia
              </p>
              {/* Badge disponibilidad */}
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-brand-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                Disponible para nuevos retos
              </div>
            </div>
          </Reveal>
        </motion.div>

        {/* ── TÍTULO GRANDE ── */}
        <motion.div style={{ y: yText, opacity }}>
          <Reveal delay={0.3}>
            {/* clamp fluido: 48px en móvil → 120px en desktop */}
            <h1 className="text-[clamp(2.8rem,11vw,8rem)] font-bold tracking-tighter leading-[0.88] text-black dark:text-white">
              System<br />
              <span className="text-zinc-400 dark:text-zinc-600">Engineer</span><br />
              <span className="italic font-light text-[0.75em] block sm:inline">Front-end & Data Analyst</span>
            </h1>
          </Reveal>
        </motion.div>

        {/* ── BAJADA + BOTONES ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mt-0 md:mt-2">
          <Reveal delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-light tracking-tight">
              Transformando{' '}
              <span className="text-black dark:text-white font-medium">datos</span>{' '}
              en experiencias visuales de alto{' '}
              <span className="text-brand-accent italic font-medium">performance</span>.
            </p>
          </Reveal>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Magnetic>
              <Button
                variant="primary"
                onClick={scrollToProjects}
                className="h-12 sm:h-14 md:h-16 px-7 md:px-10 text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
              >
                Ver Proyectos
              </Button>
            </Magnetic>

            <Magnetic>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full h-12 sm:h-14 md:h-16 px-7 md:px-10 text-[10px] md:text-[11px] font-bold uppercase tracking-widest border-2 border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  Descargar CV
                </Button>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* SCROLL indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 bottom-10 hidden xl:block"
      >
        <span className="text-[9px] uppercase tracking-[1em] rotate-90 inline-block origin-right font-bold text-zinc-400">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
};