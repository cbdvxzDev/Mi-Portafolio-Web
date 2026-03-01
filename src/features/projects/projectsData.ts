import portafolioarq from '../../assets/portafolioarq.png';
import restaurante from '../../assets/restaurante.png';
import royalairlines from '../../assets/royalairlines.png';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
  description?: string;
  wip?: boolean;
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
    title: "Sazón Latino",
    category: "Restaurante",
    image: restaurante,
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://sazonlatino.netlify.app/",
    featured: true,
    description: "Plataforma web para restaurante con menú interactivo y sistema de reservas."
  },
  {
    id: 3,
    title: "Royal Airlines",
    category: "Sistema de Reservas",
    image: royalairlines,
    tags: ["React", "Spring Boot", "MongoDB"],
    link: "#",
    description: "Sistema de reservas de vuelos con gestión de pasajeros y panel de administración."
  },
  {
    id: 4,
    title: "GiborSec",
    category: "Seguridad Digital",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Expo"],
    link: "#",
    featured: false,
    wip: true,
    description: "App móvil de seguridad digital. Próximamente disponible."
  }
];