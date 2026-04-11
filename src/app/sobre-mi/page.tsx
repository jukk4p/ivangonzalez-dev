import Image from 'next/image';
import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { SEO_DATA } from '@/config/seo';

export const metadata = SEO_DATA.about;

export default function AboutPage() {
  const differentiators = [
    {
      icon: "⚡",
      title: "Respuesta rápida",
      text: "Respuesta garantizada en menos de 24h para que tu proyecto no se detenga."
    },
    {
      icon: "🚀",
      title: "Stack moderno",
      text: "Next.js 16, Tailwind 4 y TypeScript. Código limpio, rápido y fácil de mantener."
    },
    {
      icon: "📄",
      title: "Documentación",
      text: "Entrega con documentación técnica básica incluida para tu total tranquilidad."
    }
  ];

  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <Reveal>
        <section className="pt-32 pb-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 relative inline-block">
              Sobre mí
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-accent rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mt-8">
              <div className="md:col-span-1">
                <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(15,157,140,0.1)]">
                   <img 
                    src="/ivan.jpg" 
                    alt="Iván González" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                   />
                   <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl pointer-events-none"></div>
                </div>
              </div>

              <div className="md:col-span-2 text-text-muted space-y-6 text-lg leading-relaxed">
                <p>
                  Soy <span className="text-white font-bold">Iván González</span>, desarrollador web freelance enfocado en crear soluciones digitales que impulsan negocios. Mi objetivo es simple: transformar tus ideas en productos tecnológicos <span className="text-white font-bold">robustos, escalables y visualmente impactantes</span>.
                </p>
                <p>
                  No solo escribo código; me involucro en la arquitectura y la experiencia de usuario para asegurar que cada sitio o app que entrego aporte un valor real. Me especializo en el ecosistema de <strong>Next.js, React y Kotlin</strong>, herramientas que me permiten ofrecer resultados de alto nivel en plazos competitivos.
                </p>
                <p>
                  Trabajar conmigo significa tener comunicación directa, transparencia en los procesos y un compromiso absoluto con la calidad del resultado final. Estoy listo para ayudarte a dar el siguiente gran paso tecnológico.
                </p>
                
                <div className="pt-4">
                  <a 
                    href="/proyectos" 
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
                  >
                    Ver mis proyectos <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-display font-bold mb-10 text-white">Mi Stack Tecnológico</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'Node.js', 'Kotlin', 'Android', 'Firebase', 'Git', 'UI Design'].map((skill) => (
                  <div key={skill} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group hover:border-accent transition-all">
                    <span className="text-sm font-space-mono text-text-muted group-hover:text-accent transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-display font-bold mb-6 text-white text-center">¿Por qué trabajar conmigo?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {differentiators.map((diff) => (
                  <div key={diff.title} className="text-center">
                    <div className="text-accent mb-4 text-2xl">{diff.icon}</div>
                    <h4 className="font-bold text-white mb-2">{diff.title}</h4>
                    <p className="text-sm text-text-muted">{diff.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
               <a 
                href="/contacto" 
                className="inline-block px-12 py-4 bg-accent text-bg-deep font-bold uppercase tracking-widest rounded-lg hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(15,157,140,0.2)]"
              >
                ¿Hablamos?
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
}
