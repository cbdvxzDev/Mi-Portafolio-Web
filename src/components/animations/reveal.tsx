import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: Props) => {
  const ref = useRef(null);
  
  // Ajuste de margen para diferentes dispositivos
  // En móviles usamos un margen menor para que la animación no se sienta "trabada"
  const isInView = useInView(ref, { 
    once: true, 
    // "0px -10%": activa la animación cuando el elemento está al 10% de entrar al viewport
    margin: "0px 0px -10% 0px" 
  });
  
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-visible`}
      style={{ 
        width: width === "100%" ? "100%" : "auto",
        display: width === "fit-content" ? "inline-block" : "block"
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 }, // Reducimos y a 30 para evitar saltos bruscos en móviles
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.6, // Un poco más rápido mejora la sensación de performance
          ease: [0.22, 1, 0.36, 1], // EaseOutQuint: Muy suave para monitores y tablets
          delay: delay 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};