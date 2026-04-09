'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full h-20 flex items-center z-50 transition-all duration-300 ${scrolled ? 'bg-bg-glass backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8 w-full flex justify-between items-center">
        <Link href="/" className="font-space-grotesk text-2xl font-extrabold tracking-tighter text-neon-cyan relative group">
          IG
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-violet scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
        </Link>
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
      </div>
    </nav>
  );
}
