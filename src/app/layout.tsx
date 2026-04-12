import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-space-mono' });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: '--font-bricolage' });

import { SEO_DATA } from "@/config/seo";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = SEO_DATA.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iván González",
    "url": "https://www.ivangonzalez.cloud",
    "jobTitle": "Desarrollador Web Freelance",
    "knowsAbout": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Kotlin", "Firebase"],
    "sameAs": ["https://github.com/jukk4p", "https://www.linkedin.com/in/iván-gonzález-ufano-4ba3ab114"]
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${bricolage.variable} font-inter antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
