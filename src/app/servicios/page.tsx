import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Services from '@/components/sections/Services';
import Footer from '@/components/layout/Footer';
import ScrollObserverProvider from '@/components/layout/ScrollObserverProvider';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <ScrollObserverProvider>
        <div className="pt-32">
            <Services />
            
            <section className="py-20 container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-8">¿Listo para empezar tu próximo proyecto?</h3>
                <a 
                    href="/contacto"
                    className="inline-block px-10 py-4 font-bold uppercase tracking-wider text-neon-cyan border-2 border-neon-cyan rounded-md hover:bg-neon-cyan hover:text-bg-deep transition-all"
                >
                    Solicitar presupuesto
                </a>
            </section>
        </div>
      </ScrollObserverProvider>

      <Footer />
    </main>
  );
}
