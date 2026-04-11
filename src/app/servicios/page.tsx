import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Services from '@/components/sections/Services';
import Footer from '@/components/layout/Footer';
import { SEO_DATA } from '@/config/seo';

export const metadata = SEO_DATA.services;

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <div className="pt-32">
          <Services />
          
          <section className="py-20 container mx-auto px-4 text-center">
              <h3 className="text-3xl font-display font-bold mb-8 text-white">¿Listo para empezar tu próximo proyecto?</h3>
              <a 
                  href="/contacto"
                  className="inline-block px-10 py-4 font-bold uppercase tracking-wider text-accent border-2 border-accent rounded-full hover:bg-accent hover:text-bg-deep transition-all shadow-lg shadow-accent/10"
              >
                  Solicitar presupuesto
              </a>
          </section>
      </div>

      <Footer />
    </main>
  );
}
