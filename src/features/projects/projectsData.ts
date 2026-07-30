import portafolioarq from '../../assets/portafolioarq.png';
import royalairlines from '../../assets/royalairlines.png';
import WebAI from '../../assets/AIWeb.png';
import ShopE from '../../assets/SEsencial.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
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
    description: "Sistema de reservas de vuelos con gestión de pasajeros y panel de administración."
  },
  {
    id: 3,
    title: "AI Web",
    category: "Seguridad Digital",
    image: WebAI,
    tags: ["React Native", "SpringBoot", "Docker"],
    link: "#",
    status: "paused",
    description: "App móvil de seguridad digital orientada a la protección avanzada. Próximamente disponible."
  },
  {
    id: 4,
    title: "E-commerce",
    category: "E-commerce electrónico",
    image: ShopE,
    tags: ["NextJS", "Tailwind", "Node.js"],
    link: "#",
    status: "building",
    description: "Plataforma de comercio electrónico moderna y optimizada para la conversión. En desarrollo."
  }
];