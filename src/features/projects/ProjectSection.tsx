import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from './projectsData';
import type { Project } from './projectsData';

const easeOut = [0.16, 1, 0.3, 1] as const;

const buildFadeUp = (reduce: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0.2 : 0.8, ease: easeOut, delay: reduce ? 0 : i * 0.1 },
  }),
});

const statusMeta = {
  completed: { label: 'Completado', dot: 'bg-emerald-400' },
  building: { label: 'En construcción', dot: 'bg-amber-400' },
  paused: { label: 'En pausa', dot: 'bg-rose-400' },
} as const;

const imageOverlay =
  'linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.35) 38%, rgba(10,10,10,0) 72%)';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent';

const StatusPill = ({ status }: { status: NonNullable<Project['status']> }) => {
  const meta = statusMeta[status];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white">
        {meta.label}
      </span>
    </span>
  );
};

const TagRow = ({ tags, inverted = false }: { tags: string[]; inverted?: boolean }) => (
  <ul className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className={`rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] transition-colors ${
          inverted
            ? 'border-white/15 text-white/70 group-hover:border-white/30 group-hover:text-white'
            : 'border-zinc-200 text-zinc-500 group-hover:border-brand-accent/40 group-hover:text-brand-accent dark:border-zinc-800 dark:text-zinc-400'
        }`}
      >
        {tag}
      </li>
    ))}
  </ul>
);

const ArrowBadge = ({ muted = false }: { muted?: boolean }) => (
  <span
    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
      muted
        ? 'border-zinc-200 text-zinc-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white dark:border-zinc-800'
        : 'border-white/20 text-white group-hover:border-white group-hover:bg-white group-hover:text-black'
    }`}
  >
    <ArrowUpRight size={18} strokeWidth={2.25} />
  </span>
);

const ProjectLink = ({
  project,
  className,
  children,
  label,
}: {
  project: Project;
  className?: string;
  children: React.ReactNode;
  label: string;
}) => {
  if (!project.link) {
    return <div className={`group relative flex flex-col ${className}`}>{children}</div>;
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative flex flex-col ${focusRing} ${className}`}
    >
      {children}
    </a>
  );
};

export const ProjectSection = () => {
  const reduceMotion = useReducedMotion();
  const fadeUp = buildFadeUp(!!reduceMotion);
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const gridProjects = projects.filter((p) => p.id !== featuredProject?.id);
  const total = String(projects.length).padStart(2, '0');

  return (
    <section id="projects" className="py-14 md:py-24 bg-white dark:bg-black overflow-hidden px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative mb-12 md:mb-16">
          <span className="absolute -top-8 -left-2 text-[clamp(40px,12vw,140px)] font-black text-zinc-100 dark:text-zinc-900/20 select-none uppercase tracking-tighter z-0">
            Works
          </span>
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(2rem,7vw,5rem)] font-black tracking-tighter leading-[0.9] text-black dark:text-white">
              Proyectos <span className="text-zinc-300 dark:text-zinc-700 italic font-light">Seleccionados</span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 md:w-20 bg-zinc-300 dark:bg-zinc-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">
                {total} Proyectos
              </span>
            </div>
          </div>
        </div>

        {/* 1. PROYECTO DESTACADO (ANCHO COMPLETO) */}
        {featuredProject && (
          <div className="grid grid-cols-1 gap-5 mb-5">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <ProjectLink
                project={featuredProject}
                label={`Ver proyecto ${featuredProject.title}`}
                className="md:grid md:grid-cols-12 overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 transition-colors duration-500 hover:border-brand-accent/40"
              >
                <div className="relative md:col-span-7 overflow-hidden">
                  <img
                    src={featuredProject.image}
                    className="w-full h-[240px] sm:h-[320px] md:h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    alt={featuredProject.title}
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: imageOverlay }}
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-accent">
                      01
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
                      Destacado
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-5 font-black text-[64px] sm:text-[88px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)] select-none"
                  >
                    01
                  </span>
                </div>

                <div className="md:col-span-5 p-6 sm:p-8 lg:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent">
                      {featuredProject.category}
                    </span>
                    <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-black dark:text-white uppercase leading-[0.95]">
                      {featuredProject.title}
                    </h3>
                    {featuredProject.description && (
                      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {featuredProject.description}
                      </p>
                    )}
                    <div className="mt-6">
                      <TagRow tags={featuredProject.tags} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
                      {featuredProject.link ? 'Ver proyecto' : 'Próximamente'}
                    </span>
                    <ArrowBadge muted={!featuredProject.link} />
                  </div>
                </div>
              </ProjectLink>
            </motion.div>
          </div>
        )}

        {/* 2. GRID COMPLETO Y DINÁMICO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <ProjectLink
                project={project}
                label={`Ver proyecto ${project.title}`}
                className="h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:border-brand-accent/40 hover:shadow-2xl hover:shadow-brand-accent/5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    alt={project.title}
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: imageOverlay }}
                  />
                  {project.status && (
                    <span className="absolute left-4 top-4">
                      <StatusPill status={project.status} />
                    </span>
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-5 font-black text-[52px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] select-none"
                  >
                    {String(project.id).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-5 sm:p-7 flex flex-col grow gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[8px] font-black text-brand-accent uppercase tracking-[0.3em]">
                        {project.category}
                      </span>
                      <h3 className="mt-2 text-lg sm:text-xl font-black tracking-tighter text-black dark:text-white uppercase leading-none">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowBadge muted={!project.link} />
                  </div>

                  {project.description && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  <div className="mt-auto pt-2 flex flex-col gap-4">
                    <TagRow tags={project.tags} />
                    {!project.link && (
                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {project.status === 'paused' ? 'Sin enlace disponible' : 'Muy pronto'}
                      </span>
                    )}
                  </div>
                </div>
              </ProjectLink>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
