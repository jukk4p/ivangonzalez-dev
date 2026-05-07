import { GitHubRepo, FormattedRepo } from '@/types/github';

const FALLBACK_PROJECTS: FormattedRepo[] = [
  {
    id: 1,
    title: 'TuMejorTarifaLuz',
    desc: 'Plataforma de análisis de tarifas eléctricas en España. Optimizada para SEO y rendimiento con Next.js.',
    url: 'https://github.com/jukk4p/TuMejorTarifaLuz_Web',
    liveUrl: 'https://tumejortarifaluz.es/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Next.js', 'Firebase', 'SEO'],
    stars: 10,
    isFork: false,
    name: 'TuMejorTarifaLuz'
  },
  {
    id: 2,
    title: 'PulsoOdds - Sports Analytics',
    desc: 'Plataforma avanzada de análisis de pronósticos deportivos y seguimiento de cuotas en tiempo real.',
    url: 'https://github.com/jukk4p/PulsoOdds',
    liveUrl: 'https://pulsoodds.ivangonzalez.cloud/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Next.js', 'Supabase', 'Analytics'],
    stars: 15,
    isFork: false,
    name: 'PulsoOdds',
    slug: 'pulso-odds'
  },
  {
    id: 3,
    title: 'AuraContable',
    desc: 'Software de gestión contable para autónomos y PYMES. Dashboard financiero con métricas clave.',
    url: 'https://github.com/jukk4p/AuraContable',
    liveUrl: 'https://auracontable.ivangonzalez.cloud/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['React', 'Tailwind CSS', 'Finance'],
    stars: 5,
    isFork: false,
    name: 'AuraContable',
    slug: 'auracontable'
  },
  {
    id: 4,
    title: 'Cafe Bar Titi - Hostelería Digital',
    desc: 'Solución web integral para el sector de la hostelería con carta interactiva y gestión de alérgenos.',
    url: 'https://github.com/jukk4p/CafeBarTiti',
    liveUrl: 'https://bartiti.ivangonzalez.cloud',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Next.js', 'Tailwind', 'PWA'],
    stars: 7,
    isFork: false,
    name: 'CafeBarTiti',
    slug: 'cafe-bar-titi'
  },
  {
    id: 5,
    title: 'La Abacería - Gourmet Experience',
    desc: 'Plataforma digital para el sector gourmet que fusiona tradición y modernidad.',
    url: 'https://github.com/jukk4p/laabaceria',
    liveUrl: 'https://laabaceria.ivangonzalez.cloud/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Astro', 'GSAP', 'Tailwind'],
    stars: 8,
    isFork: false,
    name: 'laabaceria',
    slug: 'la-abaceria'
  },
  {
    id: 6,
    title: 'Espacio Reiki - Bienestar Holístico',
    desc: 'Sitio web dedicado a la salud y el bienestar con un diseño sereno y minimalista.',
    url: 'https://github.com/jukk4p/EspacioReiki',
    liveUrl: 'https://espacioreiki.ivangonzalez.cloud/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Next.js', 'Framer Motion', 'Wellness'],
    stars: 4,
    isFork: false,
    name: 'EspacioReiki',
    slug: 'espacio-reiki'
  },
  {
    id: 7,
    title: 'HGNPinturas - Pintura Profesional',
    desc: 'Solución digital para el sector de la pintura y reformas integrales.',
    url: 'https://github.com/jukk4p/HGNPinturas',
    liveUrl: 'https://hgnpinturas.ivangonzalez.cloud',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['Next.js', 'Tailwind', 'SEO'],
    stars: 6,
    isFork: false,
    name: 'HGNPinturas',
    slug: 'hgn-pinturas'
  }
];

export async function getGitHubRepos(): Promise<FormattedRepo[]> {
    const GITHUB_USERNAME = 'jukk4p';
    const endpoint = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        }
      });

      if (!response.ok) {
        console.error(`GitHub API returned ${response.status} for ${endpoint}`);
        return FALLBACK_PROJECTS;
      }

      const repos: GitHubRepo[] = await response.json();

      const EXCLUDED_REPOS = [
        'GestordeTareasDAM',
        'OroManager',
        'ivangonzalezufano',
        'ivangonzalez-dev',
        'ivangonzalez.cloud'
      ];

      const repoOverrides: Record<string, Partial<FormattedRepo>> = {
        'TuMejorTarifaLuz': { 
          title: 'TuMejorTarifaLuz',
          desc: 'Solución enfocada en el análisis de facturas eléctricas. Permite comparar precios entre las principales comercializadoras para optimizar el ahorro doméstico.',
          liveUrl: 'https://tumejortarifaluz.es',
          slug: 'tumejortarifaluz'
        },
        'TuMejorTarifaLuz_Kotlin': {
          title: 'TuMejorTarifaLuz (Android)',
          desc: 'Versión nativa para Android adaptada de la plataforma web. Desarrollada en Kotlin con Jetpack Compose, permite llevar el comparador y el escaneo de facturas por IA a cualquier lugar.',
          slug: 'tumejortarifaluz-android'
        },
        'CafeBarTiti': {
          title: 'Cafe Bar Titi - Hostelería Digital',
          desc: 'Solución web integral para el sector de la hostelería. Integra una carta interactiva con gestión de alérgenos y categorías dinámicas, optimizada para ofrecer una experiencia premium en sala.',
          liveUrl: 'https://bartiti.ivangonzalez.cloud',
          slug: 'cafe-bar-titi'
        },
        'HGNPinturas': { 
          title: 'HGNPinturas - Pintura Profesional',
          desc: 'Solución digital para el sector de la pintura y reformas integrales. Especializada en servicios para edificios y comunidades, con una gestión visual de proyectos y presupuestos.',
          liveUrl: 'https://hgnpinturas.ivangonzalez.cloud',
          slug: 'hgn-pinturas'
        },
        'AuraContable': {
          desc: 'Software de gestión contable para autónomos y PYMES. Dashboard financiero con métricas clave, control de IVA y balances de situación automáticos.',
          liveUrl: 'https://auracontable.ivangonzalez.cloud',
          slug: 'auracontable'
        },
        'ConHdeHelena': {
          title: 'ConhdeHelena',
          desc: 'Página web completa dedicada a la exposición de regalos personalizados y artículos exclusivos. Un espacio digital de alta calidad diseñado para mostrar el diseño y la versatilidad de cada obra.',
          liveUrl: 'https://conhdehelena.es',
          slug: 'con-h-de-helena'
        },
        'PulsoOdds': {
          title: 'PulsoOdds - Sports Analytics',
          desc: 'Plataforma avanzada de análisis de pronósticos deportivos y seguimiento de cuotas en tiempo real. Integra un pipeline de datos con n8n y Supabase para el procesamiento de picks y estadísticas.',
          liveUrl: 'https://pulsoodds.ivangonzalez.cloud/',
          slug: 'pulso-odds'
        },
        'laabaceria': {
          title: 'La Abacería - Gourmet Experience',
          desc: 'Plataforma digital para el sector gourmet. Un espacio que fusiona la tradición de la abacería clásica con una experiencia de usuario moderna y elegante, optimizada para la visualización de productos selectos.',
          liveUrl: 'https://laabaceria.ivangonzalez.cloud/',
          slug: 'la-abaceria'
        },
        'EspacioReiki': {
          title: 'Espacio Reiki - Bienestar Holístico',
          desc: 'Sitio web dedicado a la salud y el bienestar. Un diseño limpio y sereno que refleja la armonía de la práctica del Reiki, facilitando el acceso a información sobre terapias y formación.',
          liveUrl: 'https://espacioreiki.ivangonzalez.cloud/',
          slug: 'espacio-reiki'
        }
      };


      const PINNED_REPOS = [
        'TuMejorTarifaLuz',
        'AuraContable',
        'CafeBarTiti',
        'PulsoOdds',
        'laabaceria',
        'EspacioReiki',
        'HGNPinturas'
      ];


      const finalRepos = repos
        .filter(repo => {
          const isExcluded = EXCLUDED_REPOS.some(ex => ex.toLowerCase() === repo.name.toLowerCase());
          const isPinned = PINNED_REPOS.some(p => p.toLowerCase() === repo.name.toLowerCase());
          return !isExcluded && (!repo.fork || isPinned);
        })
        .map((repo) => {
          const overrideKey = Object.keys(repoOverrides).find(
            key => key.toLowerCase() === repo.name.toLowerCase()
          );
          const override = overrideKey ? repoOverrides[overrideKey] : {};
          return {
            id: repo.id,
            name: repo.name,
            title: override.title || repo.name,
            desc: override.desc || repo.description || 'Sin descripción disponible',
            url: repo.html_url,
            liveUrl: override.liveUrl || repo.homepage || null,
            updated_at: repo.updated_at,
            language: repo.language || 'Software',
            topics: repo.topics || [],
            stars: repo.stargazers_count,
            isFork: repo.fork,
            slug: override.slug
          };
        });

      // Inyectar proyectos pineados que falten (ej. si son privados en GitHub)
      PINNED_REPOS.forEach(pinnedName => {
        const alreadyExists = finalRepos.some(r => r.name?.toLowerCase() === pinnedName.toLowerCase());
        if (!alreadyExists) {
          const fallback = FALLBACK_PROJECTS.find(f => f.name?.toLowerCase() === pinnedName.toLowerCase());
          if (fallback) {
            finalRepos.push(fallback);
          }
        }
      });

      return finalRepos.sort((a, b) => {
          const aIndex = PINNED_REPOS.findIndex(p => p.toLowerCase() === (a.name || '').toLowerCase());
          const bIndex = PINNED_REPOS.findIndex(p => p.toLowerCase() === (b.name || '').toLowerCase());

          if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          return b.stars - a.stars;
        });
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      return FALLBACK_PROJECTS;
    }
}

