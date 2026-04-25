import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ivangonzalez.cloud';
  
  const routes = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/servicios', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/proyectos', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/sobre-mi', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/aviso-legal', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...routes];
}
