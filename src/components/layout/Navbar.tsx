'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full h-20 flex items-center z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-bg-glass backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="container mx-auto px-8 w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group z-50">
            <img 
              src="/logo.png" 
              alt="Iván González Logo" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden md:block text-base font-space-grotesk font-bold tracking-tight text-white/90 group-hover:text-neon-cyan transition-colors">
              Iván González
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path}
                  className="text-sm font-medium uppercase tracking-wider hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 text-white hover:text-neon-cyan transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-space-grotesk font-bold uppercase tracking-widest text-white hover:text-neon-cyan transition-all hover:scale-110 active:scale-95"
          >
            {link.name}
          </Link>
        ))}
        {/* Adorno neón inferior */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
      </div>
    </>
  );
}
