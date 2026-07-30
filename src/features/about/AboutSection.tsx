import { Reveal } from '../../components/animations/reveal';
import { StaggerContainer } from '../../components/animations/staggercontainer';
import { Card } from '../../components/ui/cards'; 
import { MapPin, Code2, GraduationCap } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiGit, SiNextdotjs, SiHtml5, SiCss3, SiNetlify } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';


export const AboutSection = () => {
  const stack = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <span className="text-[#F7DF1E] font-black text-xs">JS</span> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Framer Motion", icon: <span className="font-black text-xs">FM</span> },
  { name: "REST APIs", icon: <TbApi className="text-[#009688] text-base" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-[#00C4B6]" /> },
  { name: "Zustand", icon: <span className="font-black text-xs">Z</span> },
  { name: "Spring Boot", icon: <span className="font-black text-[10px]">SB</span> },
  { name: "MongoDB", icon: <span className="font-black text-[10px]">DB</span> },
];

const softSkills = [
  { label: "Disciplinada", sub: "CONTINUOUS LEARNING" },
  { label: "Responsable", sub: "TEAMWORK" },
  { label: "Adaptable", sub: "PROBLEM SOLVING" },
];

  return (
    <section id="about" className="py-12 md:py-20 max-w-7xl mx-auto px-5">
      <Reveal>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-10 text-black dark:text-white leading-[0.85]">
          Detrás del <span className="text-zinc-400 dark:text-zinc-600 italic font-light">código</span>
        </h2>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* BIO PRINCIPAL */}
          <Card className="md:col-span-12 lg:col-span-8 p-0 flex flex-col justify-between relative overflow-hidden h-full border-l-4 border-l-brand-accent">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-brand-accent mb-4">
                <Code2 size={16} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  Frontend Developer
                </span>
              </div>

              Soy <em className="text-brand-accent not-italic font-black">
              Tecnóloga en Desarrollo de Software
              </em>, estudiante de Ingeniería de Sistemas y desarrolladora Frontend enfocada en crear aplicaciones modernas, rápidas y escalables con React, Next.js y TypeScript.
            </div>

            <br />

            Me caracterizo por ser una persona responsable, disciplinada y comprometida con el aprendizaje continuo. Disfruto construir interfaces limpias, accesibles y responsivas, siempre priorizando la experiencia del usuario y las buenas prácticas de desarrollo.

            <br />
            
            Mi discapacidad auditiva ha fortalecido habilidades como la concentración, la perseverancia y la atención al detalle, cualidades que aplico diariamente en cada proyecto.

            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          </Card>

        {/* UBICACIÓN */}
        <Card className="md:col-span-6 lg:col-span-4 bg-zinc-950 border-none p-0 flex flex-col justify-between min-h-[180px]">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Residencia</span>
          <div className="flex flex-col gap-3">
            <MapPin size={24} className="text-brand-accent" />
            <p className="text-[clamp(1.4rem,3vw,2.25rem)] text-white font-black tracking-tighter leading-none">
              Cartagena,<br />Colombia
            </p>
          </div>
        </Card>

        {/* TOOLKIT */}
        <Card className="md:col-span-6 lg:col-span-5 bg-zinc-50 dark:bg-zinc-900 p-0">
          <h3 className="font-black text-[9px] uppercase tracking-[0.3em] text-zinc-400 mb-4">Toolkit</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50">
                <span className="text-sm flex items-center justify-center">{tech.icon}</span>
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* FORMACIÓN */}
        <Card className="md:col-span-6 lg:col-span-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-0 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap size={16} className="text-brand-accent" />
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Educación</span>
          </div>
          <p className="text-xl md:text-2xl font-black text-black dark:text-white leading-tight tracking-tighter uppercase">Ingenieria de Sistemas  <br />8° Semestre </p>
          <p className="text-[8px] uppercase text-zinc-500 mt-2 font-bold leading-tight italic">F. Universitaria Tecnológico Comfenalco</p>
        </Card>

        {/* SOFT SKILLS */}
        <Card className="md:col-span-6 lg:col-span-4 bg-brand-accent border-none p-0 flex flex-col justify-between">
          <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Soft Skills</h3>
          <div className="flex flex-col gap-3 mt-4">
            {softSkills.map(({ label, sub }) => (
              <div key={label} className="border-t border-black/10 pt-2 last:pb-0">
                <p className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tighter leading-none">{label}</p>
                <p className="text-[8px] text-zinc-400 uppercase font-black italic">{sub}</p>
              </div>
            ))}
          </div>
        </Card>
      </StaggerContainer>
    </section>
  );
};