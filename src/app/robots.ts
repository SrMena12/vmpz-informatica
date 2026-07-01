import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Las páginas legales llevan noindex; no hace falta bloquearlas aquí.
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
