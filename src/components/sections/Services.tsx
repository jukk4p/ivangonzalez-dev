import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Sitios Web a Medida",
      desc: "Desarrollo de sitios web exclusivos diseñados desde cero para potenciar tu marca. Utilizo Next.js y React para garantizar una experiencia de usuario fluida, rápida y con un rendimiento SEO superior. Este servicio está dirigido a empresas y profesionales en Sevilla que buscan diferenciarse con un diseño único y código limpio. Al elegir un desarrollo a medida, obtienes total escalabilidad, integración de APIs y una estructura preparada para convertir visitas en clientes reales.",
      time: "2-4 semanas",
      price: "desde 250€",
      features: ["Optimización SEO Avanzada", "Diseño Responsive Premium", "Dominio & Hosting incluido"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    },
    {
      title: "Landing Pages",
      desc: "Diseño y desarrollo de páginas de aterrizaje de alto impacto, enfocadas 100% en la conversión directa. Ideales para campañas de AdWords, mis landing pages profesionales en Sevilla combinan velocidad de carga extrema con un copy persuasivo y formularios integrados. Utilizo Tailwind CSS para un diseño moderno y minimalista que guía al usuario hacia la acción. Si buscas lanzar un producto o servicio específico con una presentación impecable, esta es la solución técnica perfecta.",
      time: "1-2 semanas",
      price: "desde 150€",
      features: ["Alta Tasa de Conversión", "Formulario de Contacto Pro", "Velocidad LCP Optimizada"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    },
    {
      title: "Mantenimiento & Soporte",
      desc: "Tu presencia online siempre a punto. Ofrezco un servicio integral de mantenimiento web en Sevilla para corregir errores, actualizar librerías y mejorar la seguridad de tu sitio. El soporte técnico mensual incluye optimización de bases de datos, auditorías de rendimiento y actualizaciones periódicas. Dirigido a dueños de negocios que no quieren preocuparse por fallos técnicos y prefieren delegar la estabilidad de su plataforma en un experto.",
      time: "Soporte mensual",
      price: "desde 25€/mes",
      features: ["Parches de Seguridad", "Actualización de Librerías", "Consultoría Técnica Continua"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    {
      title: "Apps Móviles Nativa",
      desc: "Desarrollo aplicaciones móviles nativas para Android utilizando Kotlin y Jetpack Compose. Como freelancer en Sevilla, creo apps robustas que se integran perfectamente con servicios en la nube, ofreciendo una experiencia de usuario superior a las soluciones híbridas. Ideal para startups que necesitan una aplicación estable, escalable y publicada en la Google Play Store con todas las garantías técnicas actuales.",
      time: "4-8 semanas",
      price: "desde 400€",
      features: ["Kotlin & Jetpack Compose", "Arquitectura MVVM", "Publicación en Play Store"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-32 container mx-auto px-4"
    >
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold inline-block relative text-white">
            Servicios de Desarrollo Web en Sevilla
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
          </h1>
          <p className="mt-8 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrezco soluciones tecnológicas profesionales, desde sitios web a medida hasta aplicaciones móviles nativas, con plazos y presupuestos realistas para tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx} 
              className={`bg-gradient-to-br from-[#0f0f1a] to-[#080810] p-8 rounded-2xl border border-white/5 hover:border-accent transition-all duration-300 flex flex-col items-start text-left ${
                idx === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="w-12 h-12 mb-6 text-accent">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {srv.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{srv.title}</h3>
              <div className="flex gap-4 mb-4 text-[10px] uppercase tracking-widest font-space-mono text-accent">
                <span>{srv.time}</span>
                <span className="text-white/20">|</span>
                <span>{srv.price}</span>
              </div>
              <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed">{srv.desc}</p>
              <ul className="space-y-2 mb-8 w-full">
                {srv.features.map(f => (
                  <li key={f} className="text-xs text-text-muted flex items-center gap-2">
                    <span className="text-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contacto"
                className="w-full text-center py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-bg-deep transition-all"
              >
                Solicitar Información
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted italic">Consultoría gratuita sin compromiso. Presupuestos cerrados por proyecto.</p>
        </div>
      </Reveal>
    </section>
  );
}
