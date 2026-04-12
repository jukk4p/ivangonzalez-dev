import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivangonzalez.cloud';
  
  // Lista de páginas estáticas
  const routes = [
    '',
    '/servicios',
    '/sobre-mi',
    '/proyectos',
    '/contacto',
    '/privacidad',
    '/cookies',
    '/aviso-legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
