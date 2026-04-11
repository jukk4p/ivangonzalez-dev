'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/jukk4p', 
      icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/iván-gonzález-ufano-4ba3ab114', 
      icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> 
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full h-20 flex items-center z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-bg-card/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="container mx-auto px-8 w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group z-50 focus:outline-none">
            <div className={`w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-bg-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              IG
            </div>
            <span className="hidden lg:block text-lg font-display font-bold tracking-tight text-white group-hover:text-accent transition-colors">
              Iván González
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-all relative group py-2 
                    ${pathname === link.path ? 'text-accent' : 'text-text-muted hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left 
                    ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              </li>
            ))}
            <li className="ml-4 h-6 w-[1px] bg-white/10"></li>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 p-2 text-white hover:text-accent transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center gap-10 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-display font-bold uppercase tracking-widest transition-all hover:scale-110 active:scale-95
              ${pathname === link.path ? 'text-accent' : 'text-white'}`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="flex gap-8 mt-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label={social.name}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
