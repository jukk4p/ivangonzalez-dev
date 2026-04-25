import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-space-mono' });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: '--font-bricolage' });

import { SEO_DATA } from "@/config/seo";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  ...SEO_DATA.home,
  alternates: {
    canonical: 'https://www.ivangonzalez.cloud',
    languages: {
      'es-ES': 'https://www.ivangonzalez.cloud',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-525XZN8J');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${bricolage.variable} font-inter antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-525XZN8J"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
