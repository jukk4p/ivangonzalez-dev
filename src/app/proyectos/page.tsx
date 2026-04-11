import { Suspense } from 'react';
import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/sections/Portfolio';
import { ProjectCardSkeleton } from '@/components/sections/ProjectCard';
import Footer from '@/components/layout/Footer';
import { SEO_DATA } from '@/config/seo';

export const metadata = SEO_DATA.projects;

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <Suspense fallback={
        <div className="py-32 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)}
        </div>
      }>
        <Portfolio />
      </Suspense>

      <Footer />
    </main>
  );
}
