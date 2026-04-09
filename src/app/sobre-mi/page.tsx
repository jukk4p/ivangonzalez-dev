import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollObserverProvider from '@/components/layout/ScrollObserverProvider';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <ScrollObserverProvider>
        <section className="pt-32 pb-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-12 relative inline-block">
              Sobre mí
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-neon-cyan rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mt-8">
              {/* Profile Image / Placeholder */}
              <div className="md:col-span-1">
                <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(0,245,212,0.1)]">
                   <img 
                    src="/ivan.jpg" 
                    alt="Iván González" 
                    className="w-full h-full object-cover object-[center_top_18%] scale-[1.5] transition-transform duration-700 group-hover:scale-[1.6]"
                   />
                   <div className="absolute inset-0 border-2 border-neon-cyan/20 rounded-2xl pointer-events-none"></div>
                </div>
              </div>

              <div className="md:col-span-2 text-text-muted space-y-6 text-lg leading-relaxed">
                <p>
                  ¡Hola! Soy <span className="text-white font-bold">Iván González</span>, un entusiasta del desarrollo web que disfruta convirtiendo ideas en código. Lo que empezó como una curiosidad se ha transformado en mi gran pasión, y hoy dedico mi tiempo a perfeccionar mis habilidades para dar el salto al mundo profesional.
                </p>
                <p>
                  Mi enfoque actual es construir <strong>sitios web y aplicaciones móviles</strong> que funcionen bien y aporten soluciones prácticas. Creo firmemente que la mejor forma de aprender es haciendo, por eso desarrollo proyectos propios donde exploro tecnologías modernas como <strong>Next.js, React y Kotlin</strong>.
                </p>
                <p>
                  Soy un desarrollador en constante formación, autodidacta y con muchas ganas de afrontar nuevos retos. Mi objetivo es seguir creciendo, aprender de cada línea de código y demostrar mi potencial a través de resultados tangibles y funcionales.
                </p>
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-bold mb-10 text-white">Mi Stack Tecnológico</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'Node.js', 'Kotlin', 'Android', 'Firebase', 'Git', 'UI Design'].map((skill) => (
                  <div key={skill} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group hover:border-neon-violet transition-all">
                    <span className="text-sm font-space-mono text-text-muted group-hover:text-neon-violet transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">¿Por qué trabajar conmigo?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-neon-cyan mb-4 text-2xl">⚡</div>
                  <h4 className="font-bold text-white mb-2">Compromiso</h4>
                  <p className="text-sm text-text-muted">Me tomo cada proyecto como un reto personal para dar lo mejor de mí.</p>
                </div>
                <div className="text-center">
                  <div className="text-neon-cyan mb-4 text-2xl">📚</div>
                  <h4 className="font-bold text-white mb-2">Aprendizaje</h4>
                  <p className="text-sm text-text-muted">Estoy en formación constante para aplicar las mejores prácticas.</p>
                </div>
                <div className="text-center">
                  <div className="text-neon-cyan mb-4 text-2xl">🤝</div>
                  <h4 className="font-bold text-white mb-2">Claridad</h4>
                  <p className="text-sm text-text-muted">Me gusta la comunicación directa y honesta en todo el proceso.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
               <a 
                href="/contacto" 
                className="inline-block px-12 py-4 bg-neon-violet/10 border-2 border-neon-violet text-neon-violet font-bold uppercase tracking-widest rounded-lg hover:bg-neon-violet hover:text-white transition-all shadow-[0_0_20px_rgba(157,78,221,0.2)]"
              >
                ¿Hablamos?
              </a>
            </div>
          </div>
        </section>
      </ScrollObserverProvider>

      <Footer />
    </main>
  );
}
