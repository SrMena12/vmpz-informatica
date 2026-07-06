import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Gamepad2,
  Check,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Wrench,
  Cpu,
  MonitorPlay,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Plug,
  Fan,
  Box,
  type LucideIcon,
} from 'lucide-react';

import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink } from '@/lib/site';
import {
  gamingHero,
  gamingBuilds,
  gamingIncluye,
  gamingFaq,
  gamingKeywords,
} from '@/lib/gaming';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Montaje de PC Gaming a medida en Toledo',
  description:
    'Montamos tu PC gaming a medida en Toledo y La Sagra. Tres configuraciones (Basic, Standard y Ultra) con piezas actuales, montaje profesional, Windows y pruebas incluidas.',
  path: '/gaming',
});

const compIcon: Record<string, LucideIcon> = {
  Cpu,
  MonitorPlay,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Plug,
  Fan,
  Box,
};

const waMsg = 'Hola, me interesa que me montéis un PC gaming. ¿Me asesoráis?';

export default function GamingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Montaje de PC gaming a medida',
    description: gamingHero.subtitle,
    serviceType: 'Montaje de ordenadores gaming',
    provider: { '@id': `${site.url}/#business` },
    areaServed: [site.city, site.province, site.region],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Configuraciones VMPZ Gaming',
      itemListElement: gamingBuilds.map((b) => ({
        '@type': 'Offer',
        name: `PC Gaming ${b.name}`,
        price: b.precio,
        priceCurrency: 'EUR',
        description: `${b.tagline} — desde ${b.precio}€, montaje incluido`,
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'VMPZ Gaming', path: '/gaming' },
        ])}
      />
      <JsonLd data={faqSchema(gamingFaq)} />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">VMPZ Gaming</li>
        </ol>
      </nav>

      {/* Cabecera */}
      <section className="container-page relative py-12 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" />
        <Reveal className="relative mx-auto max-w-3xl">
          <span className="rgb-frame relative mx-auto flex w-fit items-center gap-2 rounded-full bg-surface2/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink">
            <span className="rgb-gradient rgb-dot h-2 w-2 rounded-full" aria-hidden="true" />
            <Gamepad2 size={15} /> {gamingHero.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            {gamingHero.title}
          </h1>
          <div className="rgb-strip mx-auto mt-6 w-44" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{gamingHero.subtitle}</p>
        </Reveal>
      </section>

      {/* Configuraciones */}
      <section className="container-page pb-4">
        <div className="grid items-start gap-5 lg:grid-cols-3">
          {gamingBuilds.map((b, i) => (
            <Reveal key={b.slug} index={i}>
              <div
                className={
                  b.highlight
                    ? 'rgb-frame group relative flex h-full flex-col rounded-2xl border border-electric2/50 bg-surface2/70 p-7 shadow-glow-sm'
                    : 'group relative flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-7 shadow-card'
                }
              >
                {b.highlight && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-electric px-3 py-1 text-xs font-semibold text-white">
                    Más recomendado
                  </span>
                )}

                {/* Tira LED superior: encendida en la destacada, se enciende al pasar el ratón en el resto */}
                <div
                  className={
                    b.highlight
                      ? 'rgb-strip mb-6'
                      : 'rgb-strip mb-6 opacity-40 transition-opacity duration-300 group-hover:opacity-100'
                  }
                  aria-hidden="true"
                />

                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rgb-gradient rgb-dot h-2.5 w-2.5 rounded-full" aria-hidden="true" />
                    <h2 className="font-display text-2xl font-extrabold text-ink">{b.name}</h2>
                  </div>
                  <span className="rounded-md border border-line px-2 py-0.5 text-xs font-medium text-electric2">
                    {b.resolucion}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{b.tagline}</p>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-sm text-muted">desde</span>
                  <span className="font-display text-4xl font-extrabold text-electric2">
                    {b.precio}€
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">Montaje y Windows incluidos</p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {b.componentes.map((c) => {
                    const Icon = compIcon[c.icon] ?? Cpu;
                    return (
                      <li key={c.cat} className="flex gap-3">
                        <Icon size={18} className="mt-0.5 shrink-0 text-electric2" aria-hidden="true" />
                        <span className="text-sm">
                          <span className="block text-[0.7rem] uppercase tracking-wide text-muted">
                            {c.cat}
                          </span>
                          <span className="text-ink">{c.part}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-5 text-sm text-muted">{b.uso}</p>

                <a
                  href={whatsappLink(
                    `Hola, me interesa el PC gaming ${b.name} (${b.resolucion}). ¿Me pasáis presupuesto?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <Button variant={b.highlight ? 'primary' : 'outline'} className="w-full">
                    <MessageCircle size={18} /> Lo quiero
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted">
          Precios orientativos con IVA y montaje incluidos. La RAM, los SSD y las gráficas están
          subiendo por la demanda de IA: te confirmamos el precio final antes de comprar nada.
        </p>
      </section>

      {/* Personalizar */}
      <section className="section container-page">
        <Reveal className="glow-card">
          <div className="rgb-strip mb-5 w-24" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                ¿Quieres una configuración distinta?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Te montamos el equipo exacto que necesitas, para tu presupuesto y tus juegos.
              </p>
            </div>
            <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">
                <MessageCircle size={18} /> PC a medida
              </Button>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Qué incluye siempre */}
      <section className="section container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">
              <Wrench size={13} /> Siempre incluido
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              No es solo montar piezas
            </h2>
            <p className="mt-4 text-muted">
              Cada equipo sale probado, optimizado y listo para funcionar como el primer día. Ese es
              el trabajo por el que merece la pena que te lo monte un profesional.
            </p>
            <div className="rgb-strip mt-6 w-24" aria-hidden="true" />
          </Reveal>
          <Reveal index={1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {gamingIncluye.map((item) => (
                <li key={item} className="glow-card flex gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-electric2" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq items={gamingFaq} title="Dudas sobre tu PC gaming" />

      <ContactCTA
        title="¿Montamos tu PC gaming?"
        subtitle="Cuéntanos a qué juegas y con qué presupuesto, y te preparamos la configuración perfecta, montada y probada."
        whatsappMessage={waMsg}
      />

      {/* Enlace interno */}
      <div className="container-page pb-16 text-center text-sm text-muted">
        ¿Prefieres otros servicios?{' '}
        <Link href="/servicios" className="inline-flex items-center gap-1 text-electric2 hover:underline">
          Ver todos los servicios <ArrowRight size={14} />
        </Link>
      </div>

      <span className="sr-only">{gamingKeywords.join(', ')}</span>
    </>
  );
}
