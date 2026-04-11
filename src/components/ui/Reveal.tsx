'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export default function Reveal({ children, className = '', threshold = 0, delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safety fallback: if it doesn't reveal in 2s, force it
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(timer);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Se activa un poquito antes de llegar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative z-10 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}
