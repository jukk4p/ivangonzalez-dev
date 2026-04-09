export default function Services() {
  const services = [
    {
      title: "Sitios Web a Medida",
      desc: "Creación de páginas web modernas y visualmente atractivas, adaptadas para que se vean bien en cualquier dispositivo.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    },
    {
      title: "Landing Pages de Impacto",
      desc: "Diseño de páginas de una sola sección enfocadas en presentar un producto o servicio de forma clara y profesional.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    },
    {
      title: "Mantenimiento y Soporte",
      desc: "Ayuda con la actualización de contenidos, corrección de errores visuales y mejora de la velocidad de carga de tu web.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    {
      title: "Desarrollo de Apps Básicas",
      desc: "Construcción de aplicaciones sencillas que resuelven problemas específicos utilizando las últimas herramientas.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    }
  ];

  return (
    <section id="servicios" className="py-32 container mx-auto px-4 fade-in-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold inline-block relative">
          Servicios
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-neon-violet rounded-full"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-gradient-to-br from-[#0f0f1a] to-[#080810] p-8 rounded-2xl text-center border border-white/5 hover:border-neon-violet hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 text-neon-violet">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {srv.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">{srv.title}</h3>
            <p className="text-text-muted text-sm">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
