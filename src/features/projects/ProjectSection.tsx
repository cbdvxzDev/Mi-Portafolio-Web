import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { projects } from './projectsData';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export const ProjectSection = () => {
  // Filtramos dinámicamente para no depender de posiciones fijas del array
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const gridProjects = projects.filter(p => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="py-14 md:py-24 bg-white dark:bg-black overflow-hidden px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="relative mb-12 md:mb-20">
          <span className="absolute -top-8 -left-2 text-[clamp(40px,12vw,140px)] font-black text-zinc-100 dark:text-zinc-900/20 select-none uppercase tracking-tighter z-0">
            Works
          </span>
          <div className="relative z-10">
            <h2 className="text-[clamp(2rem,7vw,5rem)] font-black tracking-tighter leading-[0.9] text-black dark:text-white">
              Proyectos <span className="text-zinc-300 dark:text-zinc-700 italic font-light">Seleccionados</span>
            </h2>
          </div>
        </div>

        {/* 1. PROYECTO DESTACADO (ANCHO COMPLETO) */}
        {featuredProject && (
          <div className="grid grid-cols-1 gap-5 mb-5">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:border-brand-accent/30"
              >
                <div className="w-full md:w-[60%] h-[220px] sm:h-[280px] md:h-[420px] lg:h-[460px]">
                  <img
                    src={featuredProject.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={featuredProject.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-8 md:p-10 lg:p-12 w-full md:w-[40%] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black text-brand-accent tracking-widest uppercase mb-3 block">01 / Destacado</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-black dark:text-white uppercase mb-3 leading-tight">
                      {featuredProject.title}
                    </h3>
                    {featuredProject.description && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">{featuredProject.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase px-2 py-1 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-6 sm:mt-8 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-brand-accent transition-colors">
                    Ver Proyecto <span className="text-base">→</span>
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        )}

        {/* 2. GRID COMPLETO Y DINÁMICO (Soporta infinitos proyectos en pares/bento) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {gridProjects.map((project, i) => (
            <motion.div 
              key={project.id} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              custom={i + 1}
              className={project.status ? "opacity-80 hover:opacity-100 transition-opacity" : ""}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 h-full transition-all hover:border-brand-accent/30"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={project.title}
                    loading="lazy"
                  />
                  {project.status && (
                    <span
                      className={`absolute top-3 right-3 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm text-white
                        ${
                          project.status === "paused"
                            ? "bg-red-500/90"
                            : project.status === "building"
                            ? "bg-amber-500/90"
                            : "bg-emerald-500/90"
                        }`}
                    >
                      {project.status === "paused"
                        ? "En pausa"
                        : project.status === "building"
                        ? "En construcción"
                        : "Completado"}
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6 flex flex-col grow">
                  <span className="text-[8px] font-black text-brand-accent uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-black dark:text-white uppercase leading-none mb-2">{project.title}</h3>
                  {project.description && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed">{project.description}</p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[7px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};