import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollObserverProvider from '@/components/layout/ScrollObserverProvider';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <ScrollObserverProvider>
        <div className="pt-24 min-h-[80vh] flex items-center">
            <Contact />
        </div>
      </ScrollObserverProvider>

      <Footer />
    </main>
  );
}
