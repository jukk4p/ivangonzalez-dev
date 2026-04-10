import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Iván González | Desarrollador Web y Apps',
  description: 'Portfolio profesional de Iván González, desarrollador enfocado en soluciones web y aplicaciones móviles modernas. Disponible en ivangonzalez.cloud',
  keywords: ['Desarrollo Web', 'App Developer', 'Iván González', 'Next.js', 'Kotlin'],
  authors: [{ name: 'Iván González' }],
  metadataBase: new URL('https://ivangonzalez.cloud'),
  openGraph: {
    title: 'Iván González | Desarrollador Web y Apps',
    description: 'Creación de sitios web modernos y aplicaciones móviles funcionales.',
    type: 'website',
    url: 'https://ivangonzalez.cloud',
  },
  icons: {
    icon: '/logo.png?v=1',
    apple: '/logo.png?v=1',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
