import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import CanvasBackground from '@/components/ui/CanvasBackground';
import Reveal from '@/components/ui/Reveal';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: `${project.title} | Proyecto SEO de Iván González`,
    description: project.description,
    alternates: {
      canonical: `https://www.ivangonzalez.cloud/proyectos/${slug}`
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category === 'web' ? 'WebApplication' : 'MobileApplication',
    "operatingSystem": "Web, Android, iOS"
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="relative min-h-screen">
        <CanvasBackground />
        <Navbar />
        
        <section className="pt-40 pb-20 container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <span className="text-accent font-space-mono text-sm uppercase tracking-widest mb-4 block">
                Proyecto / {project.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-8">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent"></span> Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent"></span> Características
                </h3>
                <ul className="space-y-3">
                  {project.features.map(f => (
                    <li key={f} className="text-text-muted flex items-start gap-3 text-sm">
                      <span className="text-accent mt-1">▹</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-white/5">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-deep font-bold uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-all text-center whitespace-nowrap"
                >
                  Ver Proyecto en Vivo
                </a>
              )}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all text-center whitespace-nowrap"
              >
                Ver Código fuente
              </a>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
