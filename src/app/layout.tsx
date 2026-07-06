import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { CookieBanner } from '@/components/CookieBanner';
import { JsonLd, localBusinessSchema } from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/next';
import { site } from '@/lib/site';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'informático Toledo',
    'técnico informático Toledo',
    'reparación ordenadores Toledo',
    'instalación SSD Toledo',
    'soporte informático La Sagra',
    'mantenimiento informático empresas Toledo',
    'informático para autónomos La Sagra',
    `informático ${site.city}`,
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.name,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#05070E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <SmoothScroll />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
