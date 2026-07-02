import { site } from '@/lib/site';
import { municipios } from '@/lib/municipios';

/** Inserta un bloque JSON-LD en la página. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es controlado por nosotros (no viene del usuario).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Datos del negocio local, reutilizables en varias páginas. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: `${site.url}/personaje/hero.png`,
    logo: `${site.url}/brand/logo.png`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.province,
      addressCountry: site.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    // Todas las zonas de servicio + comarca y provincia.
    areaServed: [
      ...municipios.map((m) => ({ '@type': 'City', name: m.name })),
      { '@type': 'AdministrativeArea', name: site.region },
      { '@type': 'AdministrativeArea', name: `${site.province} (provincia)` },
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [site.instagramUrl, site.mapsUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
      bestRating: 5,
    },
  };
}

/** Breadcrumb schema a partir de una lista de {name, path}. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).toString(),
    })),
  };
}

/** FAQ schema a partir de pares pregunta/respuesta. */
export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
