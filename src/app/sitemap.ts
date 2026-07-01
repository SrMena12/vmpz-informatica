import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { servicios } from '@/lib/servicios';
import { municipios } from '@/lib/municipios';
import { posts } from '@/lib/blog';

/**
 * Sitemap generado automáticamente a partir de los catálogos.
 * Al añadir un servicio, municipio o artículo, aparece aquí solo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const estaticas: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const paginasServicios: MetadataRoute.Sitemap = servicios.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const paginasZonas: MetadataRoute.Sitemap = municipios.map((m) => ({
    url: `${base}/zonas/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const paginasBlog: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  const legales: MetadataRoute.Sitemap = [
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/politica-de-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/politica-de-cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  return [...estaticas, ...paginasServicios, ...paginasZonas, ...paginasBlog, ...legales];
}
