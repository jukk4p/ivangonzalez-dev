import Reveal from '@/components/ui/Reveal';

export default function Services() {
  const services = [
    {
      title: "Sitios Web a Medida",
      desc: "Creación de páginas web modernas y visualmente atractivas, adaptadas para que se vean bien en cualquier dispositivo.",
      time: "2-4 semanas",
      price: "desde 250€",
      features: ["Optimización SEO", "Diseño Responsive", "Dominio & Hosting setup"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    },
    {
      title: "Landing Pages",
      desc: "Diseño de páginas de una sola sección enfocadas en presentar un producto o servicio de forma clara y profesional.",
      time: "1-2 semanas",
      price: "desde 150€",
      features: ["Alta Conversión", "Formulario Integrado", "Velocidad de carga extrema"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    },
    {
      title: "Mantenimiento",
      desc: "Ayuda con la actualización de contenidos, corrección de errores visuales y mejora de la velocidad de carga de tu web.",
      time: "Soporte mensual",
      price: "desde 25€/mes",
      features: ["Parches de seguridad", "Actualización de librerías", "Consultoría técnica"],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    {
      title: "Apps Móviles Nativa",
      desc: "Desarrollo de aplicaciones robustas para Android utilizando Kotlin y las últimas herramientas de arquitectura.",
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
          <h2 className="text-4xl md:text-5xl font-display font-bold inline-block relative text-white">
            Servicios
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
          </h2>
          <p className="mt-8 text-text-muted max-w-2xl mx-auto text-lg">
            Ofrezco soluciones tecnológicas profesionales con plazos y presupuestos realistas.
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
              <p className="text-text-muted text-sm mb-6 flex-grow">{srv.desc}</p>
              <ul className="space-y-2 mb-8 w-full">
                {srv.features.map(f => (
                  <li key={f} className="text-xs text-text-muted flex items-center gap-2">
                    <span className="text-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted italic">Sin compromiso. Primera consulta gratuita.</p>
        </div>
      </Reveal>
    </section>
  );
}
