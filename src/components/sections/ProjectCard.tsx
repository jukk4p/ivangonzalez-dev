import { FormattedRepo } from '@/types/github';

export default function ProjectCard({ repo }: { repo: FormattedRepo }) {
  return (
    <div className="group relative bg-bg-card rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 h-full flex flex-col">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] font-space-mono uppercase tracking-widest text-accent">
              {repo.language}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-space-mono text-text-muted">
            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{repo.stars}</span>
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors text-white">
          {repo.title}
        </h3>
        
        <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-4 flex-grow">
          {repo.desc}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {repo.topics.map(topic => (
                <span key={topic} className="text-[9px] font-bold uppercase tracking-tighter bg-white/5 border border-white/10 px-2 py-1 rounded text-text-muted hover:text-accent hover:border-accent/50 transition-all cursor-default">
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
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-accent/10 border border-accent/50 text-accent px-3 py-2 rounded-lg hover:bg-accent hover:text-bg-deep transition-all duration-300"
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
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-bg-card rounded-xl overflow-hidden border border-white/5 h-[350px] animate-pulse">
      <div className="p-8 h-full flex flex-col">
        <div className="w-1/4 h-3 bg-white/10 rounded mb-6"></div>
        <div className="w-3/4 h-8 bg-white/10 rounded mb-4"></div>
        <div className="w-full h-4 bg-white/5 rounded mb-2"></div>
        <div className="w-full h-4 bg-white/5 rounded mb-6"></div>
        <div className="mt-auto flex gap-2">
          <div className="w-16 h-8 bg-white/5 rounded"></div>
          <div className="w-16 h-8 bg-white/5 rounded"></div>
        </div>
      </div>
    </div>
  );
}
