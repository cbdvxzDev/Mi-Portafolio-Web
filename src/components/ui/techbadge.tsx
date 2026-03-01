import { motion } from 'framer-motion';

export const TechBadge = ({ name }: { name: string }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
      // El hover solo es agradable con mouse; en móviles puede "pegarse" el color
      whileHover={{ 
        y: -4,
        scale: 1.05,
        backgroundColor: "var(--brand-accent, #000)", // Cambié a brand-accent para coherencia
        color: "#fff",
      }}
      className="
        px-3 md:px-4 py-1.5 md:py-2 
        bg-white dark:bg-zinc-900 
        text-black dark:text-zinc-300
        border border-zinc-100 dark:border-zinc-800 
        rounded-full 
        text-[8px] md:text-[10px] 
        font-black
        uppercase 
        tracking-[0.15em]
        shadow-sm 
        cursor-default 
        inline-flex 
        items-center 
        justify-center
        whitespace-nowrap
        transition-all duration-300
        select-none
      "
    >
      {name}
    </motion.span>
  );
};