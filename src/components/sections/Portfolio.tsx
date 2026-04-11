import { getGitHubRepos } from '@/lib/github';
import ProjectCard from './ProjectCard';
import Reveal from '@/components/ui/Reveal';

export default async function Portfolio({ limit }: { limit?: number }) {
  const repos = await getGitHubRepos();
  const displayRepos = limit ? repos.slice(0, limit) : repos;

  return (
    <section 
      id="proyectos" 
      className="py-32 container mx-auto px-4"
    >
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold inline-block relative text-white">
            {limit ? 'Proyectos Destacados' : 'Todos los Proyectos'}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
          </h2>
          <p className="mt-8 text-text-muted max-w-2xl mx-auto text-lg">
            {limit 
              ? 'Una selección de mis trabajos más impactantes extraídos de GitHub.' 
              : 'Explora mi ecosistema completo de soluciones digitales y repositorios privados.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRepos.map((repo, index) => (
            <div 
              key={repo.id} 
              className={index === 3 ? 'hidden md:block lg:hidden' : ''}
            >
              <ProjectCard repo={repo} />
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-20 text-center">
              <a 
                href="/proyectos" 
                className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent/10 hover:border-accent/50 transition-all group text-white"
              >
                <span>Ver todos los proyectos</span>
                <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
          </div>
        )}
      </Reveal>
    </section>
  );
}
