'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const tasks = ["Web Developer", "App Developer", "Full-Stack Developer", "Entusiasta del Código"];
  
  useEffect(() => {
    let taskIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timerId: NodeJS.Timeout;

    const type = () => {
      const current = tasks[taskIdx];
      if (isDeleting) {
        setText(current.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setText(current.substring(0, charIdx + 1));
        charIdx++;
      }

      let typeSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        taskIdx = (taskIdx + 1) % tasks.length;
        typeSpeed = 500;
      }

      timerId = setTimeout(type, typeSpeed);
    };

    timerId = setTimeout(type, 150);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center relative px-4">
      <div className="z-10 relative">
        <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl mb-4 text-white drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">
          Iván González
        </h1>
        <div className="font-space-mono text-xl md:text-3xl text-neon-cyan h-[1.5em] mb-6">
          {text}<span className="animate-pulse">_</span>
        </div>
        <p className="text-text-muted max-w-2xl mx-auto text-lg mb-12">
          Desarrollador web enfocado en crear sitios y aplicaciones modernas, funcionales y atractivas. Aprendiendo día a día para construir proyectos que ayuden y conecten personas.
        </p>
        <a 
          href="#contacto" 
          className="inline-block px-10 py-4 font-bold uppercase tracking-wider text-neon-cyan border-2 border-neon-cyan rounded-md 
          hover:bg-neon-cyan hover:text-bg-deep transition-all duration-300 shadow-[0_0_10px_rgba(0,245,212,0.2)] hover:shadow-[0_0_30px_rgba(0,245,212,0.6)]"
        >
          Hablemos de tu idea
        </a>
      </div>
    </section>
  );
}
