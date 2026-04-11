import { Metadata } from 'next';

const siteConfig = {
  name: 'Iván González',
  url: 'https://www.ivangonzalez.cloud',
  ogImage: 'https://www.ivangonzalez.cloud/og-image.jpg', // Placeholder - user should update
  description: 'Desarrollo webs y apps a medida con Next.js, React y Kotlin. Freelance disponible.',
  links: {
    linkedin: 'https://www.linkedin.com/in/iván-gonzález-ufano-4ba3ab114',
    github: 'https://github.com/jukk4p',
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonicalUrl = siteConfig.url,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Kotlin',
      'Firebase',
      'Desarrollador Web Freelance',
      'Frontend Developer',
      'Fullstack Developer',
    ],
    authors: [{ name: 'Iván González' }],
    creator: 'Iván González',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: canonicalUrl,
      title,
      description,
      siteName: title,
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
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const SEO_DATA = {
  home: constructMetadata({
    title: 'Iván González | Desarrollador Web Next.js y React · Freelance',
    description: 'Desarrollo webs y apps a medida con Next.js, React y Kotlin. Freelance disponible. Solicita presupuesto sin compromiso.',
    canonicalUrl: siteConfig.url,
  }),
  about: constructMetadata({
    title: 'Sobre mí — Iván González, Desarrollador Web Freelance',
    description: 'Desarrollador web freelance especializado en Next.js, React y Tailwind. Stack moderno, entrega puntual y comunicación directa.',
    canonicalUrl: `${siteConfig.url}/sobre-mi`,
  }),
  projects: constructMetadata({
    title: 'Proyectos — Iván González',
    description: 'Proyectos web y móviles con Next.js, React y Kotlin Android.',
    canonicalUrl: `${siteConfig.url}/proyectos`,
  }),
  services: constructMetadata({
    title: 'Servicios Web Freelance — Iván González',
    description: 'Webs a medida, landing pages, mantenimiento y apps. Precios claros y plazos definidos.',
    canonicalUrl: `${siteConfig.url}/servicios`,
  }),
  contact: constructMetadata({
    title: 'Contacto — Iván González',
    description: 'Escríbeme para tu próximo proyecto web. Respondo en menos de 24 horas.',
    canonicalUrl: `${siteConfig.url}/contacto`,
  }),
  legal: constructMetadata({
    title: 'Aviso Legal — Iván González',
    description: 'Información legal y términos de uso del sitio web.',
    canonicalUrl: `${siteConfig.url}/aviso-legal`,
    noIndex: true,
  }),
  privacy: constructMetadata({
    title: 'Privacidad — Iván González',
    description: 'Política de privacidad y protección de datos.',
    canonicalUrl: `${siteConfig.url}/privacidad`,
    noIndex: true,
  }),
  cookies: constructMetadata({
    title: 'Cookies — Iván González',
    description: 'Política de cookies del sitio web.',
    canonicalUrl: `${siteConfig.url}/cookies`,
    noIndex: true,
  }),
};
