import portafolioarq from '../../assets/portafolioarq.webp';
import royalairlines from '../../assets/royalairlines.webp';
import WebAI from '../../assets/AIWeb.webp';
import ShopE from '../../assets/e-commerce.webp';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
  tags: string[];
  featured?: boolean;

  // Estado del proyecto
  status?: "completed" | "building" | "paused";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Arquitectura Minimalista",
    category: "Diseño & Desarrollo",
    image: portafolioarq,
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "https://portafolioarquitectura.netlify.app/",
    featured: true,
    description: "Portafolio visual para estudio de arquitectura con diseño minimalista y animaciones fluidas."
  },
  {
    id: 2,
    title: "Royal Airlines",
    category: "Sistema de Reservas",
    image: royalairlines,
    tags: ["React", "Spring Boot - Java", "MongoDB"],
    link: "https://royalairlines.netlify.app/",
    description: "Sistema de reservas de vuelos con gestión de pasajeros, disponibilidad de asientos y panel de administración. Frontend en React y API REST en Spring Boot con MongoDB."
  },
  {
    id: 3,
    title: "AI Web",
    category: "Seguridad Digital",
    image: WebAI,
    tags: ["React Native", "SpringBoot", "Docker"],
    status: "paused",
    description: "App móvil de seguridad digital orientada a la protección avanzada. Próximamente disponible."
  },
  {
    id: 4,
    title: "E-commerce",
    category: "Comercio electrónico",
    image: ShopE,
    tags: ["Next.js", "Spring Boot", "MongoDB", "Tailwind"],
    link: "https://github.com/cbdvxzDev/Practica-NextJs",
    status: "building",
    description:
      "Tienda de moda full stack: catálogo, carrito, checkout, pedidos y panel de administración en Next.js, con API propia en Spring Boot y MongoDB."
  }
];