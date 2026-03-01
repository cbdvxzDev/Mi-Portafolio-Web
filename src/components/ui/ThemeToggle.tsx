import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center 
        cursor-pointer transition-all duration-300 border
        ${isDark 
          ? 'bg-zinc-900 border-zinc-800 text-yellow-400' 
          : 'bg-white border-zinc-200 text-zinc-600 shadow-sm'
        }
      `}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "circOut" }}
          className="absolute flex items-center justify-center"
        >
          {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};