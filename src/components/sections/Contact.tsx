'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    if (formData.name.trim() === '') return 'El nombre es requerido';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'El email no es válido';
    if (formData.message.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      // Chance of error for demonstration
      if (Math.random() < 0.05) {
        setStatus('error');
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
      
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 container mx-auto px-4">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
              ¿Tienes una idea? <br/>
              <span className="text-accent">Hagámosla realidad.</span>
            </h3>
            <p className="text-text-muted mb-8 text-lg">
              Cuéntame qué necesitas. Respondo en menos de 24 horas. Estoy disponible para proyectos freelance, consultoría técnica o integraciones cloud.
            </p>
            
            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-space-mono">Email directo</p>
                  <a href="mailto:hola@ivangonzalez.cloud" className="text-white font-bold">hola@ivangonzalez.cloud</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-space-mono">Ubicación</p>
                  <p className="text-white font-bold">Sevilla, España (Remoto)</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-bg-card p-10 rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl">
            {status === 'success' && (
              <div className="absolute inset-0 bg-accent flex flex-col items-center justify-center text-bg-deep z-20 animate-fade-in p-10 text-center">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h4 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h4>
                <p className="font-medium">Te respondo en menos de 24h.</p>
                <button 
                  type="button" 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-bold uppercase tracking-widest border-b border-bg-deep"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="block text-sm text-text-muted mb-2">Tu nombre</label>
              <input 
                id="name"
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
                className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-accent focus:bg-white/10 transition-colors outline-none"
                placeholder="Juan Pérez"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm text-text-muted mb-2">Tu email</label>
              <input 
                id="email"
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
                className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-accent focus:bg-white/10 transition-colors outline-none"
                placeholder="juan@ejemplo.com"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm text-text-muted mb-2">¿En qué te puedo ayudar?</label>
              <textarea 
                id="message"
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
                className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-accent focus:bg-white/10 transition-colors outline-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className={`w-full py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                status === 'loading' ? 'bg-accent/50 cursor-not-allowed' : 'bg-accent text-bg-deep hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(15,157,140,0.4)]'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-bg-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : 'Enviar Mensaje'}
            </button>
            
            {status === 'error' && (
              <p className="mt-4 text-red-400 text-sm text-center">
                Algo salió mal. Escríbeme a <a href="mailto:hola@ivangonzalez.cloud" className="underline">hola@ivangonzalez.cloud</a>
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}
