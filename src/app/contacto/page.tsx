import type { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle, Mail, Phone, Instagram, MapPin, Clock, Star } from 'lucide-react';

import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink, mailtoLink, telLink } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Contacto',
  description:
    'Contacta con VMPZ Informática por WhatsApp, correo o teléfono. Servicio informático a domicilio en Toledo y La Sagra, con presupuesto claro desde el principio.',
  path: '/contacto',
  image: '/personaje/contacto.png',
});

// Mensajes prellenados: el usuario solo tiene que darle a enviar.
const waMsg =
  'Hola, me gustaría consultaros un servicio informático. Os cuento: ';
const mailSubject = 'Consulta — VMPZ Informática';
const mailBody =
  'Hola,\n\nMe gustaría consultaros sobre un servicio informático.\n\n- Qué me pasa / qué necesito:\n- Municipio:\n- Cuándo os vendría bien:\n\nGracias.';

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Contacto', path: '/contacto' },
        ])}
      />

      <section className="container-page relative py-16">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />

        <div className="relative grid items-stretch gap-12 lg:grid-cols-[1fr_0.85fr]">
          {/* Columna izquierda: opciones de contacto */}
          <div>
            <Reveal className="max-w-xl">
              <span className="eyebrow">Contacto</span>
              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Hablamos y le ponemos solución
              </h1>
              <p className="mt-5 text-lg text-muted">
                La forma más rápida es WhatsApp: escríbenos qué le pasa a tu equipo y te decimos cómo lo
                resolvemos, con un precio claro desde el principio. Si lo prefieres, tienes también correo y
                teléfono.
              </p>
            </Reveal>

            {/* Dos vías destacadas: WhatsApp y correo prellenados */}
            <Reveal index={1} className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" className="glow-card group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-whatsapp/15 text-whatsapp">
                  <MessageCircle size={22} />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">WhatsApp</h2>
                <p className="mt-1 text-sm text-muted">
                  Respuesta rápida. Abre el chat con el mensaje ya empezado.
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-electric2">{site.phoneIntl}</span>
              </a>

              <a href={mailtoLink(mailSubject, mailBody)} className="glow-card group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric2">
                  <Mail size={22} />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">Correo</h2>
                <p className="mt-1 text-sm text-muted">
                  Abre tu correo con el asunto y las preguntas ya escritas.
                </p>
                <span className="mt-3 inline-block break-all text-sm font-medium text-electric2">{site.email}</span>
              </a>
            </Reveal>

            {/* Otras vías */}
            <Reveal index={2} className="mt-4 flex flex-wrap gap-3">
              <a href={telLink}>
                <Button variant="outline" className="whitespace-nowrap"><Phone size={18} /> {site.phoneIntl}</Button>
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost"><Instagram size={18} /> @{site.instagram}</Button>
              </a>
            </Reveal>

            {/* Datos de referencia */}
            <Reveal index={3} className="mt-8 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-electric2" /> {site.serviceNote} en {site.city}, {site.province} y toda {site.region}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="text-electric2" /> Coordinamos día y hora por WhatsApp según tu disponibilidad
              </p>
              <p className="flex items-center gap-2">
                <Star size={16} className="text-electric2" /> {site.reviews.rating}/5 en Google · {site.reviews.count} reseñas
              </p>
            </Reveal>
          </div>

          {/* Columna derecha: personaje grande con el mapa solapado sobre su parte inferior */}
          <div className="flex flex-col justify-center lg:h-full">
            <div className="relative mx-auto w-full max-w-[380px]">
              {/* Resplandor detrás del personaje */}
              <div className="pointer-events-none absolute inset-x-8 bottom-40 top-4 rounded-full bg-electric/20 blur-[75px]" />

              <Reveal className="relative z-0">
                <Image
                  src="/personaje/contacto.png"
                  alt="VMPZ Informática — atención al cliente"
                  width={420}
                  height={636}
                  quality={95}
                  priority
                  className="relative z-0 mx-auto block w-[85%] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
                />
              </Reveal>

              {/* Mapa: se superpone a la parte baja del personaje */}
              <Reveal index={1} className="relative z-10 -mt-24 overflow-hidden rounded-2xl border border-line shadow-card">
                <iframe
                  title={`Zona de servicio — ${site.city}, ${site.province}`}
                  src="https://www.google.com/maps?q=Mocej%C3%B3n%2C%20Toledo&z=11&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-52 w-full border-0 grayscale-[0.2]"
                />
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-surface/60 py-3 text-sm font-medium text-electric2 hover:text-ink"
                >
                  <MapPin size={16} /> Ver ficha en Google Maps
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
