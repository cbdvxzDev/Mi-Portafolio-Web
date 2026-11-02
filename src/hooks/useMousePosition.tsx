import { useEffect } from 'react';
import { useMotionValue, useReducedMotion, type MotionValue } from 'framer-motion';

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const useMousePosition = (): MousePosition => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Con movimiento reducido no seguimos al mouse: evita animaciones continuas
    if (reduceMotion) return;

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [reduceMotion, x, y]);

  return { x, y };
};
