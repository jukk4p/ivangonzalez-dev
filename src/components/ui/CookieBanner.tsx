'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-fade-in-up">
      <div className="bg-bg-deep/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden relative group">
        {/* Accent glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[60px] rounded-full group-hover:bg-accent/20 transition-all duration-700"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-white">Privacidad</h3>
          </div>
          
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Utilizo cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. 
            Al navegar, aceptas el uso de cookies esenciales. 
            Consulta nuestra <a href="/cookies" className="text-accent underline hover:text-accent-hover">Política de Cookies</a>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={acceptCookies}
              className="px-6 py-2.5 bg-accent text-bg-deep font-bold rounded-lg text-sm hover:bg-accent-hover transition-all flex-grow"
            >
              Aceptar todas
            </button>
            <button 
              onClick={declineCookies}
              className="px-6 py-2.5 bg-white/5 text-white border border-white/10 font-bold rounded-lg text-sm hover:bg-white/10 transition-all"
            >
              Configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
