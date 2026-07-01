import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Trust } from '@/components/sections/Trust';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Reveal } from '@/components/Reveal';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { municipios } from '@/lib/municipios';
import { site } from '@/lib/site';

const homeFaq = [
  {
    q: '¿Dais servicio a domicilio?',
    a: `Sí. Vamos a tu casa o negocio en ${site.city}, ${site.province} y toda ${site.region}, así no tienes que mover el equipo ni esperar en una tienda.`,
  },
  {
    q: '¿Cómo sé cuánto me va a costar?',
    a: 'Los servicios habituales tienen un precio de referencia visible en la web. Para casos que dependen del equipo, valoramos primero y te damos un precio claro antes de empezar.',
  },
  {
    q: '¿Cuánto tardáis en atenderme?',
    a: 'Respondemos rápido por WhatsApp y coordinamos la visita cuanto antes. Muchas reparaciones habituales se resuelven el mismo día.',
  },
  {
    q: '¿Trabajáis con particulares y también con autónomos?',
    a: 'Con ambos. Ayudamos tanto a particulares como a autónomos y pequeñas oficinas con sus equipos, redes, copias de seguridad y seguridad.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />
      <Hero />
      <ServicesGrid />
      <Trust />

      {/* Zonas de servicio */}
      <section className="section container-page">
        <Reveal className="mb-8 max-w-2xl">
          <span className="eyebrow">
            <MapPin size={13} /> Zonas
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Dónde damos servicio</h2>
          <p className="mt-4 text-muted">
            Atención a domicilio en Toledo y los municipios de La Sagra. ¿No ves tu pueblo? Escríbenos igualmente.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {municipios.map((m) => (
            <Link
              key={m.slug}
              href={`/zonas/${m.slug}`}
              className="rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm text-muted transition-colors hover:border-electric2/60 hover:text-ink"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </section>

      <Faq items={homeFaq} />
      <ContactCTA />
    </>
  );
}
