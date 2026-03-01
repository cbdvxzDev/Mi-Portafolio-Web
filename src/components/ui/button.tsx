import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = "",
  type = "button",
  disabled = false 
}: ButtonProps) => {
  
  // Estilos base: py-3.5 para móvil, py-4 para desktop para mejor área de toque
  const baseStyles = "px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed select-none touch-manipulation";
  
  const variants = {
    primary: "bg-black text-white border-2 border-black dark:bg-white dark:text-black dark:border-white hover:opacity-90 shadow-lg active:shadow-sm",
    outline: "bg-transparent border-2 border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-sm",
    ghost: "bg-transparent text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      // El hover solo debe activarse en dispositivos que tengan puntero (mouse)
      whileHover={!disabled ? { 
        y: -3,
        transition: { duration: 0.2 } 
      } : {}}
      // El tap (click/toque) es universal y da feedback instantáneo
      whileTap={!disabled ? { scale: 0.96 } : {}}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};