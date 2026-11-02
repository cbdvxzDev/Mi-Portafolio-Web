import portafolioarq from '../../assets/portafolioarq.webp';
import royalairlines from '../../assets/royalairlines.webp';
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
    status: "completed",
    description:
      "El estudio necesitaba presencia online que transmitiera su estética sin opacar el trabajo. Construí un portafolio de una sola página con transiciones suaves, modo oscuro y carga optimizada de imágenes, logrando un sitio responsivo que responde en menos de 2 segundos en móvil."
  },
  {
    id: 2,
    title: "Royal Airlines",
    category: "Sistema de Reservas",
    image: royalairlines,
    tags: ["React", "Spring Boot - Java", "MongoDB"],
    link: "https://royalairlines.netlify.app/",
    status: "completed",
    description:
      "Desarrollé un sistema de reservas de vuelos de extremo a extremo: gestión de pasajeros, disponibilidad de asientos en tiempo real y panel de administración. Frontend en React con una API REST en Spring Boot y MongoDB, aplicando arquitectura por capas y validación en ambos extremos."
  },
  {
    id: 3,
    title: "E-commerce Esencial",
    category: "Comercio electrónico",
    image: ShopE,
    tags: ["Next.js", "Spring Boot", "MongoDB", "TypeScript"],
    link: "https://github.com/cbdvxzDev/Practica-NextJs",
    status: "completed",
    description:
      "Tienda de moda full stack con catálogo, carrito, checkout, autenticación, wishlist y panel de administración completo. Next.js 16 (App Router, TypeScript strict) con estado en Zustand y una API REST propia en Spring Boot 4 con MongoDB, JWT y Swagger. Incluye 44 tests de integración en el front y 70 en el backend, CI en GitHub Actions y despliegue en Netlify y Render."
  }
];
