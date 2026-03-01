import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      // Estructura semántica para accesibilidad
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}   
      exit={{ opacity: 0, y: -10 }}    
      transition={{ 
        duration: 0.6, // Un poco más rápido mejora la sensación de carga en móviles
        ease: [0.22, 1, 0.36, 1], 
      }}
      // 'overflow-x-clip' es mejor que 'hidden' en algunos navegadores modernos para permitir 'sticky'
      className="relative flex flex-col min-h-screen w-full overflow-x-clip bg-white dark:bg-black"
    >
      {/* Añadimos un contenedor de contenido para asegurar que el padding 
          no afecte el ancho total en monitores muy grandes 
      */}
      <div className="grow w-full">
        {children}
      </div>
    </motion.main>
  );
};