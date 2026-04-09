'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 container mx-auto px-4 fade-in-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h3 className="text-4xl font-space-grotesk font-bold mb-6 leading-tight">
            ¿Tienes una idea? <br/>
            <span className="text-neon-violet">Hagámosla realidad.</span>
          </h3>
          <p className="text-text-muted mb-8 text-lg">
            Estoy disponible para proyectos freelance, integraciones cloud o para unirte a revolucionar arquitecturas web.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://github.com/jukk4p" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-text-muted hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/iván-gonzález-ufano-4ba3ab114" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-text-muted hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href="https://x.com/IvanGonzalezU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-text-muted hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/></svg>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100008256915180" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-text-muted hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all"
              aria-label="Facebook"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a 
              href="mailto:hola@ivangonzalez.cloud" 
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-text-muted hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-bg-card p-10 rounded-2xl border border-white/5">
          <div className="mb-6">
            <label className="block text-sm text-text-muted mb-2">Nombre Completo</label>
            <input 
              type="text" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-neon-violet focus:bg-white/10 transition-colors"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-text-muted mb-2">Email Profesional</label>
            <input 
              type="email" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-neon-violet focus:bg-white/10 transition-colors"
              placeholder="juan@empresa.com"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm text-text-muted mb-2">Tu Mensaje</label>
            <textarea 
              rows={4} 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-neon-violet focus:bg-white/10 transition-colors"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className={`w-full py-4 rounded-md font-bold transition-all duration-300 ${
              status === 'success' ? 'bg-[#00ca9d] text-white' : 'bg-neon-violet text-white hover:bg-[#b279ff] hover:shadow-[0_0_20px_#9B5DE5]'
            }`}
          >
            {status === 'idle' && 'Enviar Mensaje'}
            {status === 'loading' && 'Enviando...'}
            {status === 'success' && '¡Mensaje Enviado!'}
          </button>
        </form>
      </div>
    </section>
  );
}
