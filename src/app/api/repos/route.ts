import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_PAT;
  if (!token) {
    return NextResponse.json({ error: 'GitHub PAT is not configured' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?visibility=private&sort=updated&per_page=15', {
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

    const repoCustomData: Record<string, { desc: string, topics: string[], liveUrl?: string }> = {
      'TuMejorTarifaLuz': {
        desc: 'Plataforma de análisis de tarifas eléctricas que ayuda a usuarios en España a optimizar su factura. Desarrollada con un fuerte enfoque en SEO y rendimiento.',
        topics: ['Next.js', 'Firebase', 'Data Analysis', 'SEO Optimization'],
        liveUrl: 'https://v2.tumejortarifaluz.es/'
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
    const order = ['TuMejorTarifaLuz', 'AuraContable', 'CafeBarTiti'];

    const formattedRepos = repos
      .filter((repo: any) => order.includes(repo.name))
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        desc: repoCustomData[repo.name].desc,
        url: repo.html_url,
        liveUrl: repoCustomData[repo.name].liveUrl || null,
        updated_at: repo.updated_at,
        language: repo.language,
        topics: repoCustomData[repo.name].topics,
      }))
      .sort((a: any, b: any) => order.indexOf(a.title) - order.indexOf(b.title));

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}
