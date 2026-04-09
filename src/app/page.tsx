import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollObserverProvider from '@/components/layout/ScrollObserverProvider';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <ScrollObserverProvider>
        <Hero />
        <Portfolio limit={3} />
        <Services />
        <Contact />
      </ScrollObserverProvider>

      <Footer />
    </main>
  );
}
