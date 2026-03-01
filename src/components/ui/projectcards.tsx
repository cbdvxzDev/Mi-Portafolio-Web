interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  index?: number;
  wip?: boolean;
}

export const ProjectCard = ({ title, category, image, tags, link, index = 0, wip = false }: ProjectCardProps) => {
  const num = String(index + 1).padStart(2, '0');
  const isDisabled = link === '#';

  return (
    <a
      href={isDisabled ? undefined : link}
      target={isDisabled ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-disabled={isDisabled}
      className={`group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden h-full
                 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800
                 transition-all duration-500 shadow-sm
                 ${isDisabled ? 'cursor-default opacity-70' : 'hover:border-brand-accent/40 hover:shadow-xl'}`}
    >
      {/* Imagen con aspect ratio adaptable */}
      <div className="relative overflow-hidden aspect-16/10 sm:aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge número */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] font-black tracking-[0.4em]
                         text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {num}
        </span>

        {/* Badge WIP */}
        {wip && (
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[8px] font-black uppercase tracking-widest
                           bg-black/70 text-white px-3 py-1 rounded-full backdrop-blur-sm">
            En construcción
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col grow p-5 sm:p-6 md:p-8 lg:p-10">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent mb-2">
          {category}
        </span>

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-black dark:text-white mb-3 leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] md:text-[10px] uppercase font-bold px-2 py-1 rounded-md
                         bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400
                         border border-zinc-200 dark:border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer — siempre al fondo */}
        {!isDisabled && (
          <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50
                          flex items-center justify-between
                          text-[10px] md:text-xs font-bold text-black dark:text-white
                          group-hover:text-brand-accent transition-colors duration-300">
            <span className="uppercase tracking-widest">Ver proyecto completo</span>
            <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800
                            flex items-center justify-center
                            group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white
                            transition-all duration-300">
              <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        )}

        {isDisabled && (
          <p className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50
                        text-[9px] uppercase tracking-widest text-zinc-400 font-black">
            Próximamente disponible
          </p>
        )}
      </div>
    </a>
  );
};