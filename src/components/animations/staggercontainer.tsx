import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = "", 
  delay = 0 
}: StaggerContainerProps) => {
  const reduceMotion = useReducedMotion();

  // Usamos 'type Variants' en la importación para cumplir con la regla 1484
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : delay,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};