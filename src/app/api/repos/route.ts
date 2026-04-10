import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_PAT;
  if (!token) {
    return NextResponse.json({ error: 'GitHub PAT is not configured' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?visibility=all&sort=updated&per_page=50', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from GitHub');
    }

    const repos = await response.json();

    const repoCustomData: Record<string, { desc: string, topics: string[], liveUrl?: string, customTitle?: string }> = {
      'TuMejorTarifaLuz': {
        desc: 'Plataforma de análisis de tarifas eléctricas que ayuda a usuarios en España a optimizar su factura. Desarrollada con un fuerte enfoque en SEO y rendimiento.',
        topics: ['Next.js', 'Firebase', 'Data Analysis', 'SEO Optimization'],
        liveUrl: 'https://tumejortarifaluz.es/'
      },
      'ConHdeHelena': {
        desc: 'Tienda online de regalos únicos y detalles artesanales personalizados. Un espacio donde el diseño y la magia se encuentran en cada detalle.',
        topics: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'E-commerce'],
        liveUrl: 'https://conhdehelena.es'
      },
      'TuMejorTarifaLuz_Kotlin': {
        desc: 'Aplicación nativa Android para la comparación de tarifas eléctricas en España. Desarrollada con Kotlin y Jetpack Compose bajo arquitectura MVVM.',
        topics: ['Kotlin', 'Android', 'Jetpack Compose', 'MVVM']
      },
      'hgnpintus': {
        desc: 'Sitio web profesional para empresa de pintura y trabajos verticales en Sevilla. Optimizado para SEO y conversión con una estética limpia y moderna.',
        topics: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Professional'],
        liveUrl: 'https://hgnpinturas.ivangonzalez.cloud/',
        customTitle: 'HGNPinturas'
      },
      'AuraContable': {
        desc: 'Solución de gestión financiera orientada a la simplicidad. Permite llevar un control riguroso de ingresos y gastos con reportes visuales claros.',
        topics: ['React', 'TypeScript', 'Tailwind CSS', 'Finance UI'],
        liveUrl: 'https://auracontable.ivangonzalez.cloud/'
      },
      'CafeBarTiti': {
        desc: 'Sistema de carta digital interactiva para hostelería. Diseñado para mejorar la experiencia del cliente y agilizar la visualización de carta en dispositivos móviles.',
        topics: ['React', 'Interactive UI', 'Next.js', 'User Experience'],
        liveUrl: 'https://bartiti.ivangonzalez.cloud/'
      }
    };

    // Orden específico solicitado por el usuario
    const order = ['TuMejorTarifaLuz', 'ConHdeHelena', 'AuraContable', 'TuMejorTarifaLuz_Kotlin', 'hgnpintus', 'CafeBarTiti'];

    const formattedRepos = repos
      .filter((repo: any) => order.includes(repo.name) && repoCustomData[repo.name])
      .map((repo: any) => ({
        id: repo.id,
        title: repoCustomData[repo.name].customTitle || repo.name,
        desc: repoCustomData[repo.name].desc,
        url: repo.html_url,
        liveUrl: repoCustomData[repo.name].liveUrl || null,
        updated_at: repo.updated_at,
        language: repo.language,
        topics: repoCustomData[repo.name].topics,
      }))
      .sort((a: any, b: any) => {
        const titleA = repos.find((r: any) => r.id === a.id)?.name;
        const titleB = repos.find((r: any) => r.id === b.id)?.name;
        return order.indexOf(titleA) - order.indexOf(titleB);
      });

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}
