import { Navbar } from './components/layout/navbar'; 
import { Footer } from './components/layout/footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { Hero } from './features/hero/Hero';
import { ProjectSection } from './features/projects/ProjectSection';
import { AboutSection } from './features/about/AboutSection';
import { ContactSection } from './features/contact/ContactSection';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-500">

        {/* Fondo decorativo con patrón de puntos */}
        <div
          className="fixed inset-0 -z-10 h-full w-full opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <Navbar />

        <AnimatePresence mode="wait">
          <PageWrapper>
            <main className="flex flex-col w-full relative z-10">

              {/* Cada sección gestiona su propio padding interno */}
              <Hero />

              <div className="border-t border-zinc-100 dark:border-zinc-900">
                <ProjectSection />
              </div>

              <div className="bg-zinc-50/50 dark:bg-zinc-900/20">
                <AboutSection />
              </div>

              <ContactSection />

            </main>
            <Footer />
          </PageWrapper>
        </AnimatePresence>

      </div>
    </ThemeProvider>
  );
}

export default App;