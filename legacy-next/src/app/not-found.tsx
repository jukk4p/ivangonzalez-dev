'use client';

import Link from 'next/link';
import CanvasBackground from '@/components/ui/CanvasBackground';
import Reveal from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-bg-deep overflow-hidden">
      <CanvasBackground />
      
      <div className="z-10 text-center px-4">
        <Reveal>
          <h1 className="text-9xl md:text-[12rem] font-display font-bold text-white mb-4 tracking-tighter opacity-20">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-accent mb-6 uppercase tracking-widest">
              Página no encontrada
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-md mx-auto mb-12">
              Parece que te perdiste en la nube. La página que buscas no existe o ha sido movida.
            </p>
            
            <Link 
              href="/"
              className="px-10 py-4 font-bold uppercase tracking-wider bg-accent text-bg-deep rounded-lg 
              hover:bg-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(15,157,140,0.3)] hover:shadow-[0_0_30px_rgba(15,157,140,0.5)]"
            >
              Volver al inicio
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Grid decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>
    </main>
  );
}
