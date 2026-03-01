import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const RevealText = ({ text, className = "", delay = 0 }: RevealTextProps) => {
  return (
    <div className={`overflow-hidden py-[0.1em] -my-[0.1em] ${className}`}>
      <motion.span
        initial={{ y: "105%" }} 
        whileInView={{ y: 0 }}
        viewport={{ 
          once: true, 
          // En móviles, un margen de -5% es perfecto para que el texto aparezca 
          // justo cuando el usuario lo tiene frente a sus ojos.
          margin: "0px 0px -5% 0px" 
        }}
        transition={{ 
          duration: 1.1, 
          ease: [0.16, 1, 0.3, 1], // Expo out: empieza rápido y termina muy suave
          delay: delay 
        }}
        // will-change-transform optimiza el renderizado en móviles (GPU)
        className="block will-change-transform"
      >
        {text}
      </motion.span>
    </div>
  );
};