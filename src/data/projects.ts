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
    title: "Cafe Bar Titi",
    description: "Menú digital interactivo con sistema de pedidos optimizado para hostelería.",
    longDescription: "Desarrollo de una Progressive Web App (PWA) para el Cafe Bar Titi, permitiendo a los clientes visualizar la carta mediante códigos QR, gestionar pedidos en tiempo real y mejorar la eficiencia del servicio. Implementado con un diseño minimalista y badge-based quantity system.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/jukk4p/CafeBarTiti",
    liveUrl: "https://bartiti.ivangonzalez.cloud",
    features: ["Menú QR dinámico", "Gestión de variantes (Lomo/Pollo)", "Carrito de pedidos offline-first", "Interfaz optimizada para móviles"],
    category: "web"
  },
  {
    slug: "tu-mejor-tarifa-luz",
    title: "TuMejorTarifaLuz Web",
    description: "Plataforma de análisis y comparación de tarifas eléctricas en tiempo real.",
    longDescription: "Herramienta web diseñada para ayudar a los usuarios a ahorrar en su factura de la luz mediante la monitorización de precios del mercado mayorista y el análisis de sus hábitos de consumo. Incluye visualizaciones avanzadas de periodos Punta, Llano y Valle.",
    tech: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/jukk4p/TuMejorTarifaLuz",
    liveUrl: "https://tumejortarifaluz.es",
    features: ["Comparador de tarifas", "Análisis de consumo por periodos", "Notificaciones de precios bajos", "Dashboard interactivo"],
    category: "web"
  },
  {
    slug: "tu-mejor-tarifa-luz-android",
    title: "TuMejorTarifaLuz Android",
    description: "Aplicación nativa Android para el control de gasto eléctrico con OCR.",
    longDescription: "Versión móvil nativa de la plataforma TuMejorTarifaLuz, desarrollada en Kotlin. Incluye funciones avanzadas como el escaneo de facturas mediante OCR y Gemini AI para extraer datos automáticamente y ofrecer recomendaciones de ahorro personalizadas.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Coroutines"],
    githubUrl: "https://github.com/jukk4p/TuMejorTarifaLuz_Kotlin",
    features: ["Escaneo de facturas con AI", "Notificaciones push en tiempo real", "Widgets de escritorio", "Modo oscuro nativo"],
    category: "mobile"
  },
  {
    slug: "aura-contable",
    title: "AuraContable",
    description: "Solución integral de gestión contable y facturación para PYMEs.",
    longDescription: "Software de gestión empresarial enfocado en la simplicidad y la potencia. Permite la generación de facturas, control de gastos, gestión de clientes y reportes financieros automáticos bajo una arquitectura escalable y segura.",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jukk4p/AuraContable",
    liveUrl: "https://auracontable.ivangonzalez.cloud",
    features: ["Facturación automatizada", "Gestión de inventario", "Reportes financieros mensuales", "Multi-usuario con roles"],
    category: "web"
  }
];
