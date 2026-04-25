import { GitHubRepo, FormattedRepo } from '@/types/github';

const FALLBACK_PROJECTS: FormattedRepo[] = [
  // ... (keeping existing fallbacks)
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
    isFork: false
  },
  {
    id: 2,
    title: 'TuMejorTarifaLuz (Android)',
    desc: 'Aplicación nativa para comparar tarifas eléctricas. Desarrollada con Kotlin y Jetpack Compose.',
    url: 'https://github.com/jukk4p/TuMejorTarifaLuz_Kotlin',
    liveUrl: null,
    updated_at: new Date().toISOString(),
    language: 'Kotlin',
    topics: ['Android', 'Jetpack Compose', 'MVVM'],
    stars: 8,
    isFork: false
  },
  {
    id: 3,
    title: 'AuraContable',
    desc: 'Gestión financiera simplificada con reportes visuales claros y control de ingresos/gastos.',
    url: 'https://github.com/jukk4p/AuraContable',
    liveUrl: 'https://auracontable.ivangonzalez.cloud/',
    updated_at: new Date().toISOString(),
    language: 'TypeScript',
    topics: ['React', 'Tailwind CSS', 'Finance'],
    stars: 5,
    isFork: false
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
        'EspacioReiki',
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
          title: 'ConHdeHelena',
          desc: 'Página web completa dedicada a la exposición de regalos personalizados y artículos exclusivos. Un espacio digital de alta calidad diseñado para mostrar el diseño y la versatilidad de cada obra.',
          liveUrl: 'https://conhdehelena.es',
          slug: 'con-h-de-helena'
        }
      };


      const PINNED_REPOS = [
        'TuMejorTarifaLuz',
        'AuraContable',
        'CafeBarTiti',
        'HGNPinturas'
      ];


      return repos
        .filter(repo => !EXCLUDED_REPOS.includes(repo.name) && !repo.fork)
        .map((repo) => {
          const override = repoOverrides[repo.name] || {};
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
        })
        .sort((a, b) => {
          const aIndex = PINNED_REPOS.indexOf(a.name);
          const bIndex = PINNED_REPOS.indexOf(b.name);

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

