import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_PAT;
  if (!token) {
    return NextResponse.json({ error: 'GitHub PAT is not configured' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?visibility=private&sort=updated&per_page=6', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      // Optionally cache this if it's not updating constantly
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
        throw new Error('Failed to fetch from GitHub');
    }

    const repos = await response.json();

    const repoCustomData: Record<string, { desc: string, topics: string[], liveUrl?: string }> = {
      'CafeBarTiti': {
        desc: 'Menú digital sencillo y práctico para bares y cafeterías. Permite ver productos de forma cómoda en el móvil y gestionar pedidos básicos.',
        topics: ['Next.js', 'React Native', 'Frontend', 'UI Design'],
        liveUrl: 'https://bartiti.ivangonzalez.cloud/' 
      },
      'GestorDeTareasDAM': {
        desc: 'Aplicación de práctica para organizar tareas diarias. Desarrollada para aprender el manejo de bases de datos locales y persistencia en Android.',
        topics: ['Kotlin', 'Android', 'SQLite', 'Room']
      },
      'TuMejorTarifaLuz': {
        desc: 'Página web informativa para comparar precios de la luz. Enfocada en ser rápida, fácil de usar y con un diseño claro.',
        topics: ['Web Design', 'SEO', 'JavaScript', 'Firebase'],
        liveUrl: 'https://www.tumejortarifaluz.es/'
      },
      'AuraContable': {
        desc: 'Pequeña herramienta para llevar el registro de gastos e ingresos personales de forma organizada y sencilla.',
        topics: ['React', 'TypeScript', 'Finance', 'Hooks'],
        liveUrl: 'https://auracontable.ivangonzalez.cloud/'
      },
      'ConHdeHelena': {
        desc: 'Web personal creada para mostrar servicios y trabajos creativos con un estilo limpio y profesional.',
        topics: ['Portfolio', 'Design', 'Next.js', 'Vercel'],
        liveUrl: 'https://conhdehelena.es/'
      },
      'OroManager': {
        desc: 'Sistema básico para controlar el stock de productos y registrar movimientos de inventario de manera eficiente.',
        topics: ['Inventory', 'Dashboard', 'Admin', 'CRUD']
      }
    };

    const formattedRepos = repos.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      desc: repoCustomData[repo.name]?.desc || repo.description || 'Proyecto desarrollado con ganas de aprender y mejorar mis habilidades en programación.',
      url: repo.html_url,
      liveUrl: repoCustomData[repo.name]?.liveUrl || null,
      updated_at: repo.updated_at,
      language: repo.language,
      topics: repoCustomData[repo.name]?.topics || repo.topics || [],
    }));

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}
