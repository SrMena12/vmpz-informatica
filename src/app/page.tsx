import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, ArrowRight, Check, Gamepad2 } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Trust } from '@/components/sections/Trust';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Reveal } from '@/components/Reveal';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { municipios } from '@/lib/municipios';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Informático a domicilio en Toledo y La Sagra',
  description:
    'Informático a domicilio en Toledo y La Sagra. Reparación de ordenadores, instalación de SSD, formateo, virus, copias de seguridad y mantenimiento para empresas. Precio claro y atención cercana.',
  path: '/',
});

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

      {/* Para empresas */}
      <section className="section container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-electric2/40 bg-surface2/50 px-6 py-12 sm:px-12">
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-electric/20 blur-[110px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="eyebrow">
                <Building2 size={13} /> Para empresas
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                ¿Tienes un negocio? Nos ocupamos de tu informática
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Mantenimiento, copias de seguridad, seguridad y soporte prioritario para pymes y
                autónomos, con una cuota fija. Tu departamento de informática, sin contratar a nadie.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                {['Cuota fija sin sorpresas', 'Soporte prioritario', 'De la zona, respondemos rápido'].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Check size={15} className="text-electric2" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:justify-self-end">
              <Link href="/empresas">
                <span className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-electric px-8 font-medium text-white shadow-glow transition-all duration-300 hover:bg-electric2">
                  Ver planes para empresas
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VMPZ Gaming */}
      <section className="section container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-12 sm:px-12">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-electric/20 blur-[110px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:order-2">
              <span className="eyebrow">
                <Gamepad2 size={13} /> VMPZ Gaming
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                ¿Quieres un PC gaming a medida?
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Tres configuraciones (Basic, Standard y Ultra) con piezas actuales, montadas,
                optimizadas y probadas. Listas para jugar en 1080p, 1440p o 4K.
              </p>
            </div>
            <div className="lg:order-1 lg:justify-self-start">
              <Link href="/gaming">
                <span className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-electric2/60 bg-surface2/60 px-8 font-medium text-ink transition-all duration-300 hover:border-electric2 hover:shadow-glow-sm">
                  Ver configuraciones gaming
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Faq items={homeFaq} />
      <ContactCTA />
    </>
  );
}
