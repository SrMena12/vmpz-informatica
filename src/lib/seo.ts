import type { Metadata } from 'next';
import { site } from './site';

type SeoInput = {
  title: string;
  description?: string;
  /** Ruta relativa, p. ej. "/servicios/instalacion-ssd". */
  path?: string;
  image?: string;
  noindex?: boolean;
};

/** Construye el objeto Metadata de Next con canonical, Open Graph y Twitter. */
export function buildMetadata({
  title,
  description = site.description,
  path = '/',
  image = '/personaje/hero.png',
  noindex = false,
}: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = `${title} · ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
