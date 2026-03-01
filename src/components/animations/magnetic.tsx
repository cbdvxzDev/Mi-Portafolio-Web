import { motion } from 'framer-motion';
import { useRef, useState, useEffect, type ReactNode } from 'react';

export const Magnetic = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    // Verificamos si el dispositivo tiene un puntero preciso (mouse/trackpad)
    const checkHover = () => {
      const canHover = window.matchMedia("(hover: hover)").matches;
      setIsHoverable(canHover);
    };

    checkHover();
    window.addEventListener('resize', checkHover);
    return () => window.removeEventListener('resize', checkHover);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHoverable || !ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Centro del elemento
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distancia del mouse al centro
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Usamos un factor menor (0.3) para un movimiento más elegante y controlado
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const resetPosition = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={isHoverable ? { x: position.x, y: position.y } : { x: 0, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15, 
        mass: 0.1,
        restDelta: 0.001 
      }}
      // IMPORTANTE: En móvil necesitamos que sea block o flex para respetar el w-full
      style={{ 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className="w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
};