import { Reveal } from '../../components/animations/reveal';
import { StaggerContainer } from '../../components/animations/staggercontainer';
import { Card } from '../../components/ui/cards'; 
import { MapPin, FileSpreadsheet, BarChart3, EarOff, GraduationCap } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiGit, SiMongodb, SiPython, SiMysql, SiJavascript } from 'react-icons/si';

export const AboutSection = () => {
  const stack = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "JS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Power BI", icon: <BarChart3 className="text-[#F2C811]" /> },
    { name: "Excel", icon: <FileSpreadsheet className="text-[#217346]" /> },
  ];

  const softSkills = [
    { label: "Adaptable",  sub: "AGILE MINDSET" },
    { label: "Creativa",   sub: "UI/UX FOCUS"   },
    { label: "Resolutiva", sub: "CLEAN CODE"    },
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
              <EarOff size={16} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Ingeniería sin barreras</span>
            </div>
            {/* Título bio: fluido de móvil a desktop */}
            <p className="text-[clamp(1.1rem,3vw,2.25rem)] text-black dark:text-white leading-[1.15] font-bold tracking-tighter max-w-[95%]">
              Soy una <em className="text-brand-accent not-italic font-black">System Engineer</em> con discapacidad auditiva certificada, enfocada en soluciones visuales precisas y funcionales.
            </p>
          </div>
          <p className="mt-5 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl relative z-10 font-medium">
            Mi perfil combina la disciplina de la ingeniería con una gran capacidad de adaptación. Cuento con <strong className="text-black dark:text-white">Certificado de Discapacidad</strong>, lo que respalda mi resiliencia y mi compromiso por construir tecnología inclusiva y de alto impacto.
          </p>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
        </Card>

        {/* UBICACIÓN */}
        <Card className="md:col-span-6 lg:col-span-4 bg-zinc-950 border-none p-0 flex flex-col justify-between min-h-180px">
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
                <span className="text-sm">{tech.icon}</span>
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
          <p className="text-xl md:text-2xl font-black text-black dark:text-white leading-tight tracking-tighter uppercase">System<br />Engineer</p>
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