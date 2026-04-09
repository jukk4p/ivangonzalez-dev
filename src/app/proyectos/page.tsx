import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/sections/Portfolio';
import Footer from '@/components/layout/Footer';
import ScrollObserverProvider from '@/components/layout/ScrollObserverProvider';

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <ScrollObserverProvider>
        <div className="pt-24 container mx-auto px-4">
             <a 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-space-mono text-neon-cyan hover:text-white transition-colors uppercase tracking-widest"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span>Volver al inicio</span>
            </a>
        </div>
        <Portfolio />
      </ScrollObserverProvider>

      <Footer />
    </main>
  );
}
