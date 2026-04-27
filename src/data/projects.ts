export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  category: "web" | "mobile" | "api";
}

export const projects: Project[] = [
  {
    slug: "cafe-bar-titi",
    title: "Cafe Bar Titi - Hostelería Digital",
    description: "Sistema integral de carta digital con gestión de pedidos y alérgenos en tiempo real.",
    longDescription: "Transformación digital completa de la experiencia en sala. Esta PWA elimina la fricción en el pedido mediante una arquitectura de alto rendimiento que garantiza tiempos de carga instantáneos. Implementa un sistema inteligente de alérgenos y variantes dinámicas, permitiendo al staff actualizar la oferta al instante y reduciendo costes de impresión y errores manuales.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/jukk4p/CafeBarTiti",
    liveUrl: "https://bartiti.ivangonzalez.cloud",
    features: [
      "Sistema Inteligente de Alérgenos: Seguridad alimentaria integrada por plato.",
      "Gestión de Stock en Tiempo Real: Actualización inmediata de productos agotados.",
      "UX de Alta Conversión: Interfaz minimalista optimizada para procesos de pedido rápidos.",
      "Arquitectura Offline-First: Resiliencia total ante caídas de red en el local."
    ],
    category: "web"
  },
  {
    slug: "tumejortarifaluz",
    title: "TuMejorTarifaLuz Web",
    description: "Comparador independiente de energía con análisis predictivo de consumo.",
    longDescription: "Plataforma de asesoría energética diseñada para democratizar el ahorro eléctrico. Mediante el análisis masivo de datos del mercado mayorista (OMIE) y el procesamiento de facturas PDF, el sistema encuentra la tarifa óptima entre más de 100 comercializadoras. Foco absoluto en el rendimiento (100 Lighthouse) y optimización SEO masiva.",
    tech: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/jukk4p/TuMejorTarifaLuz",
    liveUrl: "https://tumejortarifaluz.es",
    features: [
      "Motor de Comparación Independiente: Algoritmo libre de sesgos comerciales.",
      "Análisis de Factura por IA: Extracción y simulación automática de ahorro.",
      "Visualización Avanzada de Consumo: Desglose por periodos Punta, Llano y Valle.",
      "Core Web Vitals Optimizados: Experiencia de usuario ultra-fluida y SEO-ready."
    ],
    category: "web"
  },
  {
    slug: "tumejortarifaluz-android",
    title: "TuMejorTarifaLuz Android",
    description: "Asistente energético nativo con IA para auditoría de facturas mediante OCR.",
    longDescription: "Versión móvil nativa que traslada la potencia del comparador al ecosistema Android. Desarrollada íntegramente con Kotlin y Jetpack Compose, destaca por su integración con Gemini AI para la extracción inteligente de datos de facturas físicas. El proyecto demuestra el uso de arquitecturas modernas y el procesamiento de datos en movilidad para ofrecer asesoría energética de forma inmediata.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Coroutines"],
    githubUrl: "https://github.com/jukk4p/TuMejorTarifaLuz_Kotlin",
    features: [
      "Auditoría Express vía IA: Procesamiento de facturas mediante Gemini AI para detección de ahorros.",
      "UI Declarativa Moderna: Interfaz fluida desarrollada con Jetpack Compose y adaptada a Material 3.",
      "Arquitectura MVVM: Implementación limpia y mantenible siguiendo los estándares modernos de Google.",
      "Visualización de Mercado: Acceso directo a los precios del pool energético para consulta rápida en movilidad."
    ],
    category: "mobile"
  },
  {
    slug: "auracontable",
    title: "AuraContable",
    description: "Solución integral de gestión contable y facturación para PYMEs.",
    longDescription: "Software de gestión empresarial enfocado en la simplicidad y la potencia. Permite la generación de facturas, control de gastos, gestión de clientes y reportes financieros automáticos bajo una arquitectura escalable y segura.",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jukk4p/AuraContable",
    liveUrl: "https://auracontable.ivangonzalez.cloud",
    features: ["Facturación automatizada", "Gestión de inventario", "Reportes financieros mensuales", "Multi-usuario con roles"],
    category: "web"
  },
  {
    slug: "con-h-de-helena",
    title: "ConhdeHelena",
    description: "Página web de regalos personalizados y artículos exclusivos.",
    longDescription: "Espacio digital dedicado a la exposición de artesanía y regalos personalizados. El proyecto se centra en la versatilidad del diseño y la presentación premium de productos únicos, optimizando la experiencia de navegación para resaltar cada obra.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/jukk4p/ConhdeHelena",
    liveUrl: "https://conhdehelena.es",
    features: ["Galería de productos premium", "Diseño responsive elegante", "Optimización de imágenes", "Navegación intuitiva"],
    category: "web"
  },
  {
    slug: "hgn-pinturas",
    title: "HGNPinturas",
    description: "Plataforma digital para servicios de pintura y reformas integrales.",
    longDescription: "Solución integral para la gestión y exposición de proyectos de pintura profesional. Permite a comunidades y edificios visualizar presupuestos, ver galerías de trabajos realizados y contactar directamente para servicios de reformas.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jukk4p/HGNPinturas",
    liveUrl: "https://hgnpinturas.ivangonzalez.cloud",
    features: ["Portafolio de proyectos", "Gestión de presupuestos", "Optimización SEO local", "Interfaz administrativa"],
    category: "web"
  },
  {
    slug: "pulso-odds",
    title: "PulsoOdds - Sports Analytics",
    description: "Plataforma avanzada de análisis de apuestas deportivas y seguimiento de cuotas en tiempo real.",
    longDescription: "Sistema integral de inteligencia deportiva que combina el análisis de datos masivos con una interfaz de usuario de alto rendimiento. PulsoOdds integra un pipeline de automatización robusto con n8n, scraping avanzado de fuentes como Flashscore y una base de datos distribuida en Supabase para ofrecer cuotas, estadísticas y seguimiento de picks en tiempo real con precisión milimétrica.",
    tech: ["Next.js 16", "Supabase", "n8n", "TypeScript", "Tailwind CSS 4"],
    githubUrl: "https://github.com/jukk4p/PulsoOdds",
    liveUrl: "https://pulsoodds.ivangonzalez.cloud/",
    features: [
      "Pipeline de Datos Automatizado: Sincronización batch de cuotas mediante n8n.",
      "Diccionario Maestro de Equipos: Sistema de mapeo inteligente para normalizar nombres y logos de múltiples fuentes.",
      "Cálculo de ROI y Yield en Tiempo Real: Dashboard estadístico para el seguimiento profesional de beneficios.",
      "Arquitectura Serverless: Escalabilidad total con Next.js y Supabase."
    ],
    category: "web"
  }
];
