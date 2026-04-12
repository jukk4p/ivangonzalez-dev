'use client';

export default function Hero() {
  return (
    <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center relative px-4 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="z-10 relative">
        <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 text-white tracking-tight animate-fade-in">
          Iván <span className="text-accent">González</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-10">
          <p className="font-space-mono text-lg md:text-xl text-accent mb-6 tracking-wide uppercase">
            Desarrollador Web | TypeScript, Next.js & React
          </p>
          <p className="text-text-muted text-xl md:text-2xl leading-relaxed">
            Construyo webs y apps con <span className="text-white font-bold">Next.js, React y Kotlin</span>. 
            Proyectos limpios, bien documentados y entregados en plazo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contacto" 
            className="px-10 py-4 font-bold uppercase tracking-wider bg-accent text-bg-deep rounded-lg 
            hover:bg-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(15,157,140,0.3)] hover:shadow-[0_0_30px_rgba(15,157,140,0.5)]"
          >
            Hablemos de tu idea
          </a>
          <a 
            href="/servicios" 
            className="px-10 py-4 font-bold uppercase tracking-wider text-white border-2 border-white/10 rounded-lg 
            hover:bg-white/5 hover:border-accent transition-all duration-300"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
