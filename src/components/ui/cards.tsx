import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ children, className = "", delay = 0 }: CardProps) => {
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const checkHover = () => {
      setIsHoverable(window.matchMedia("(hover: hover)").matches);
    };
    checkHover();
    window.addEventListener('resize', checkHover);
    return () => window.removeEventListener('resize', checkHover);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isHoverable ? { y: -8 } : {}}
      className={`
        relative flex flex-col h-full w-full
        bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl
        border border-zinc-100 dark:border-zinc-800/50
        rounded-2xl md:rounded-3xl
        shadow-sm hover:shadow-2xl hover:border-zinc-200 dark:hover:border-zinc-700
        transition-all duration-500
        ${className}
      `}
    >
      {/* Padding interno adaptable por breakpoint */}
      <div className="relative z-10 h-full p-5 sm:p-6 md:p-8 lg:p-10">
        {children}
      </div>
    </motion.div>
  );
};