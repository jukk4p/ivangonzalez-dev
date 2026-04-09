'use client';

import { useState, useEffect } from 'react';

type Repo = {
  id: number;
  title: string;
  desc: string;
  url: string;
  liveUrl?: string;
  updated_at: string;
  language: string;
  topics: string[];
};

export default function Portfolio({ limit }: { limit?: number }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('/api/repos');
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        // Aplicamos el límite si viene por prop
        setRepos(limit ? data.slice(0, limit) : data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [limit]);

  return (
    <section id="proyectos" className="py-32 container mx-auto px-4 fade-in-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold inline-block relative">
          {limit ? 'Proyectos Destacados' : 'Todos los Proyectos'}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-neon-violet rounded-full"></span>
        </h2>
        <p className="mt-8 text-text-muted max-w-2xl mx-auto">
          {limit 
            ? 'Una selección de mis trabajos más impactantes extraídos de GitHub.' 
            : 'Explora mi ecosistema completo de soluciones digitales y repositorios privados.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && (
          Array.from({ length: (limit || 6) }).map((_, i) => (
            <div key={i} className="bg-bg-card rounded-xl overflow-hidden border border-white/5 h-[350px] animate-pulse">
              <div className="p-8 h-full flex flex-col">
                <div className="w-1/4 h-3 bg-white/10 rounded mb-6"></div>
                <div className="w-3/4 h-8 bg-white/10 rounded mb-4"></div>
                <div className="w-full h-4 bg-white/5 rounded mb-2"></div>
                <div className="w-full h-4 bg-white/5 rounded mb-6"></div>
                <div className="mt-auto flex gap-2">
                  <div className="w-8 h-8 bg-white/5 rounded"></div>
                  <div className="w-8 h-8 bg-white/5 rounded"></div>
                </div>
              </div>
            </div>
          ))
        )}

        {error && !loading && (
          <div className="col-span-full border border-red-500/20 bg-red-500/5 text-red-400 p-8 rounded-xl text-center">
            <h4 className="font-bold mb-2">Error de Sincronización</h4>
            <p className="text-sm opacity-80">No pudimos conectar con la API de GitHub.</p>
          </div>
        )}

        {!loading && !error && repos.map((repo, idx) => (
          <div 
            key={repo.id} 
            className="group relative bg-bg-card rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-neon-cyan/50 h-full flex flex-col"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                  <span className="text-[10px] font-space-mono uppercase tracking-widest text-neon-cyan">
                    {repo.language || 'Software'}
                  </span>
                </div>
                <time className="text-[10px] font-space-mono text-text-muted">
                    {new Date(repo.updated_at).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }).toUpperCase()}
                </time>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {repo.title}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-4 flex-grow">
                {repo.desc}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {repo.topics.length > 0 && repo.topics.map(topic => (
                      <span key={topic} className="text-[9px] font-bold uppercase tracking-tighter bg-white/5 border border-white/10 px-2 py-1 rounded text-text-muted hover:text-neon-violet hover:border-neon-violet/50 transition-all cursor-default">
                        {topic}
                      </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {repo.liveUrl && (
                    <a 
                      href={repo.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan px-3 py-2 rounded-lg hover:bg-neon-cyan hover:text-bg-deep transition-all duration-300"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Ver Web</span>
                    </a>
                  )}
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-20 text-center">
            <a 
              href="/proyectos" 
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-neon-violet/10 hover:border-neon-violet/50 transition-all group"
            >
              <span>Ver todos los proyectos</span>
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
        </div>
      )}
    </section>
  );
}
