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
    description: "Aplicación nativa Android para el control de gasto eléctrico con OCR.",
    longDescription: "Versión móvil nativa de la plataforma TuMejorTarifaLuz, desarrollada en Kotlin. Incluye funciones avanzadas como el escaneo de facturas mediante OCR y Gemini AI para extraer datos automáticamente y ofrecer recomendaciones de ahorro personalizadas.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Coroutines"],
    githubUrl: "https://github.com/jukk4p/TuMejorTarifaLuz_Kotlin",
    features: ["Escaneo de facturas con AI", "Notificaciones push en tiempo real", "Widgets de escritorio", "Modo oscuro nativo"],
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
  }
];
