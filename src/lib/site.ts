// =============================================================
//  CONFIGURACIÓN CENTRAL — EDITA AQUÍ los datos de la empresa
// =============================================================

export const site = {
  name: 'VMPZ Informática',
  legalName: 'VMPZ Informática',
  shortName: 'VMPZ',
  // La URL con la que se generan metadatos, sitemap y JSON-LD.
  // Se puede sobreescribir con la variable de entorno NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://informatica.vmpz.es',
  description:
    'Soporte informático a domicilio en Toledo y La Sagra. Instalación de SSD, montaje de equipos, formateo, copias de seguridad, eliminación de virus y asesoramiento tecnológico.',
  tagline: 'Tu tecnología, en buenas manos',

  // --- Contacto ---
  phone: '624905055',
  phoneIntl: '+34 624 905 055',
  phoneWa: '34624905055', // para enlaces wa.me
  email: 'informatica@vmpz.es',

  // --- Ubicación ---
  city: 'Mocejón',
  province: 'Toledo',
  region: 'La Sagra',
  country: 'ES',
  serviceNote: 'Servicio a domicilio',

  // --- Redes / mapa ---
  instagram: 'informatica_vmpz',
  instagramUrl: 'https://instagram.com/informatica_vmpz',
  mapsUrl: 'https://maps.app.goo.gl/bwn8cDv1H8W8htSs5',

  // --- Prueba social (Google) ---
  reviews: {
    count: 8,
    rating: 5,
  },
} as const;

/** Enlace a WhatsApp con mensaje prellenado. */
export function whatsappLink(message?: string): string {
  const text = message ?? 'Hola, me gustaría consultaros sobre un servicio informático.';
  return `https://wa.me/${site.phoneWa}?text=${encodeURIComponent(text)}`;
}

/** Enlace mailto con asunto y cuerpo prellenados. */
export function mailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ''}`;
}

/** Enlace de llamada. */
export const telLink = `tel:+${site.phoneWa}`;
