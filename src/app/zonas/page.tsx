import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react';

import { municipios } from '@/lib/municipios';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Zonas de servicio en Toledo y La Sagra',
  description:
    'Informático a domicilio en Toledo y los municipios de La Sagra: Mocejón, Illescas, Yuncos, Olías del Rey, Bargas, Magán y Cabañas de la Sagra. Elige tu zona.',
  path: '/zonas',
});

export default function ZonasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Zonas', path: '/zonas' },
        ])}
      />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">Zonas</li>
        </ol>
      </nav>

      {/* Cabecera */}
      <section className="container-page relative py-12">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative max-w-3xl">
          <span className="flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric2">
            <MapPin size={15} /> {site.region}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Informático a domicilio en Toledo y La Sagra
          </h1>
          <p className="mt-5 text-lg text-muted">
            Vamos a tu casa o negocio en {site.province} capital y en los municipios de {site.region}.
            Elige tu pueblo para ver los detalles, o escríbenos igualmente si no aparece.
          </p>
        </Reveal>
      </section>

      {/* Listado de zonas */}
      <section className="section container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {municipios.map((m, i) => (
            <Reveal key={m.slug} index={i % 3}>
              <Link href={`/zonas/${m.slug}`} className="glow-card group flex h-full flex-col">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-electric2">
                  <MapPin size={13} /> {m.comarca}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">{m.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{m.intro}</p>
                <span className="mt-4 flex items-center gap-1 border-t border-line pt-4 text-sm font-semibold text-electric2">
                  Ver zona
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA
        title="¿No ves tu pueblo?"
        subtitle="Damos servicio en toda La Sagra y alrededores. Escríbenos y te confirmamos al momento si llegamos a tu zona."
      />
    </>
  );
}
