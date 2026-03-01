import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../../components/animations/reveal';
import { Magnetic } from '../../components/animations/magnetic';
import { Button } from '../../components/ui/button';
import { CheckCircle2, Send } from 'lucide-react';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const email = "carodeveloper02@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgeedkn", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 md:py-28 lg:py-32 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

        {/* INFORMACIÓN DE CONTACTO */}
        <div className="flex flex-col justify-center space-y-8 md:space-y-10">
          <div className="space-y-5">
            <Reveal>
              <h2 className="text-[clamp(2.2rem,8vw,5.5rem)] font-black tracking-tighter leading-[0.9] text-black dark:text-white uppercase">
                ¿Hablamos?<br />
                <span className="text-brand-accent italic font-light lowercase">Hagámoslo realidad.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-medium">
                Estoy buscando mi próxima oportunidad en el desarrollo{' '}
                <span className="text-black dark:text-white font-bold underline decoration-brand-accent/30">Front-End</span>.
                Mi bandeja de entrada siempre está abierta para nuevos retos.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.3}>
              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-black">Redes y contacto</p>
            </Reveal>
            {/* Links sociales — flex-wrap para que no se rompan en pantallas pequeñas */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/carolina-blanquicett-devoz-523068379/' },
                { name: 'GitHub', url: 'https://github.com/cbdvxzDev' },
                { name: 'Email', url: `mailto:${email}` }
              ].map((social, i) => (
                <Reveal key={social.name} delay={0.4 + i * 0.1}>
                  <Magnetic>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-accent transition-colors relative group"
                    >
                      {social.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
                    </a>
                  </Magnetic>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <Reveal width="100%" delay={0.5}>
          <div className="relative bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 transition-all shadow-xl">

            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="w-full space-y-4 sm:space-y-5 md:space-y-6"
                >
                  {/* Nombre + Email: apilados en móvil, lado a lado en sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black ml-1 text-zinc-400">Nombre</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all placeholder:text-zinc-400 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black ml-1 text-zinc-400">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="hola@tuemail.com"
                        className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all placeholder:text-zinc-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-black ml-1 text-zinc-400">Mensaje</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all resize-none placeholder:text-zinc-400 text-sm"
                    />
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full h-12 sm:h-14 shadow-lg shadow-brand-accent/10 text-[10px] uppercase font-black tracking-widest"
                    >
                      {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                      <Send size={14} className={`ml-2 transition-transform ${status === 'sending' ? 'translate-x-5 opacity-0' : ''}`} />
                    </Button>
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-[9px] uppercase font-black tracking-widest text-center"
                    >
                      Error al enviar. Intenta de nuevo.
                    </motion.p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full text-center py-10 space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-brand-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tighter uppercase">¡Recibido!</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm font-medium max-w-250px mx-auto leading-relaxed">
                      Tu mensaje ha aterrizado correctamente. Te responderé muy pronto.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[9px] uppercase tracking-[0.3em] font-black text-zinc-400 hover:text-brand-accent transition-colors"
                  >
                    ← Enviar otro
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
};