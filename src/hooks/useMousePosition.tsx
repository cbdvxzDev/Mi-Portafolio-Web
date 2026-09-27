// src/hooks/useMousePosition.ts
import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Con movimiento reducido no seguimos al mouse: evita animaciones continuas
    if (reduceMotion) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [reduceMotion]);

  return mousePosition;
};