import { Metadata } from 'next';

const siteConfig = {
  name: 'Iván González',
  url: 'https://www.ivangonzalez.cloud',
  ogImage: 'https://www.ivangonzalez.cloud/og-image.jpg',
  description: 'Desarrollador Web Freelance en Sevilla especializado en Next.js, React y TypeScript. Creación de sitios web a medida, landing pages y soluciones digitales.',
  links: {
    linkedin: 'https://www.linkedin.com/in/iván-gonzález-ufano-4ba3ab114',
    github: 'https://github.com/jukk4p',
  },
};

export function constructMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonicalUrl,
  keywords = [
    'desarrollador web freelance Sevilla',
    'Next.js React freelance España',
    'programador web Sevilla',
    'desarrollo web a medida',
    'creación de landing pages',
  ],
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Iván González' }],
    creator: 'Iván González',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: canonicalUrl,
      title,
      description,
      siteName: 'Iván González | Desarrollador Web Freelance',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@IvanGonzalezU',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export const SEO_DATA = {
  home: constructMetadata({
    title: 'Iván González | Desarrollador Web Freelance Sevilla',
    description: '¿Buscas un desarrollador web freelance en Sevilla? Especialista en Next.js y React. Proyectos a medida, rápidos y optimizados. ¡Hablemos de tu idea!',
    canonicalUrl: '/',
    keywords: ['desarrollador web freelance Sevilla', 'Next.js React freelance España', 'programador freelance', 'desarrollo web Sevilla'],
  }),
  about: constructMetadata({
    title: 'Sobre mí — Programador Freelance Next.js Sevilla',
    description: 'Conoce a Iván González, desarrollador web freelance en Sevilla. Especialista en crear soluciones escalables con Next.js, React y TypeScript.',
    canonicalUrl: '/sobre-mi',
    keywords: ['programador freelance Next.js Sevilla', 'desarrollador full stack Sevilla', 'sobre Iván González'],
  }),
  projects: constructMetadata({
    title: 'Proyectos — Portafolio de Desarrollo Web Next.js',
    description: 'Explora mis proyectos web y aplicaciones móviles. Soluciones a medida con Next.js, React y Kotlin para startups y empresas.',
    canonicalUrl: '/proyectos',
    keywords: ['proyectos web Next.js portfolio', 'ejemplos desarrollo react', 'apps móviles kotlin'],
  }),
  services: constructMetadata({
    title: 'Servicios de Desarrollo Web a Medida en Sevilla',
    description: 'Servicios profesionales de desarrollo web: Landing pages, sitios web a medida y mantenimiento. Optimización SEO y rendimiento extremo en Sevilla.',
    canonicalUrl: '/servicios',
    keywords: ['desarrollo web a medida Sevilla', 'landing page profesional', 'mantenimiento web Sevilla'],
  }),
  contact: constructMetadata({
    title: 'Contratar Desarrollador Web en Sevilla | Contacto',
    description: '¿Tienes un proyecto en mente? Contacta con Iván González para contratar desarrollo web profesional en Sevilla. Presupuesto sin compromiso.',
    canonicalUrl: '/contacto',
    keywords: ['contratar desarrollador web Sevilla', 'presupuesto desarrollo web', 'contacto programador freelance'],
  }),
  legal: constructMetadata({
    title: 'Aviso Legal — Iván González',
    description: 'Información legal sobre los servicios de desarrollo web de Iván González.',
    canonicalUrl: '/aviso-legal',
    noIndex: true,
  }),
  privacy: constructMetadata({
    title: 'Política de Privacidad — Iván González',
    description: 'Detalles sobre la protección de datos y privacidad en este sitio web.',
    canonicalUrl: '/privacidad',
    noIndex: true,
  }),
  cookies: constructMetadata({
    title: 'Política de Cookies — Iván González',
    description: 'Información sobre el uso de cookies en la plataforma de Iván González.',
    canonicalUrl: '/cookies',
    noIndex: true,
  }),
};
