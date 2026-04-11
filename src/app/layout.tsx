import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-space-mono' });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: '--font-bricolage' });

export const metadata: Metadata = {
  title: 'Iván González | Desarrollador Web Next.js y React · Freelance',
  description: 'Desarrollo webs y apps a medida con Next.js, React y Kotlin. Freelance disponible. Solicita presupuesto sin compromiso.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Kotlin', 'Firebase', 'Freelance'],
  authors: [{ name: 'Iván González' }],
  metadataBase: new URL('https://www.ivangonzalez.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iván González | Desarrollador Web Next.js y React · Freelance',
    description: 'Desarrollo webs y apps a medida con Next.js, React y Kotlin. Freelance disponible.',
    type: 'website',
    url: 'https://www.ivangonzalez.cloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iván González | Desarrollador Web Freelance',
    description: 'Soluciones web modernas con Next.js y Kotlin.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

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
      </body>
    </html>
  );
}
