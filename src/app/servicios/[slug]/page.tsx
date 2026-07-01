import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ChevronRight, MessageCircle } from 'lucide-react';

import { servicios, getServicio, formatPrecio } from '@/lib/servicios';
import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.name} en Toledo`,
    description: `${s.tagline} ${s.intro.slice(0, 110)}`,
    path: `/servicios/${s.slug}`,
    image: s.image,
  });
}

export default async function ServicioPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) notFound();

  const waMsg = `Hola, me interesa el servicio de ${s.name}. ¿Me podéis dar más información?`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.intro,
    serviceType: s.name,
    provider: { '@id': `${site.url}/#business` },
    areaServed: [site.city, site.province, site.region],
    ...(s.price !== null
      ? { offers: { '@type': 'Offer', price: s.price, priceCurrency: 'EUR', availability: 'https://schema.org/InStock' } }
      : {}),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
          { name: s.name, path: `/servicios/${s.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(s.faq)} />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li><Link href="/servicios" className="hover:text-ink">Servicios</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">{s.name}</li>
        </ol>
      </nav>

      {/* Cabecera del servicio */}
      <section className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative">
          <span className="flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric2">
            <ServiceIcon name={s.icon} size={15} /> {s.shortName}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{s.name}</h1>
          <p className="mt-3 text-lg text-electric2">{s.tagline}</p>
          <p className="mt-5 max-w-xl text-muted">{s.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted">Precio</span>
              <p className="font-display text-3xl font-extrabold text-electric2">{formatPrecio(s)}</p>
            </div>
            <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="whatsapp">
                <MessageCircle size={20} /> Consultar por WhatsApp
              </Button>
            </a>
          </div>
        </Reveal>

        <Reveal index={1} className="relative mx-auto max-w-sm">
          <div className="absolute inset-x-8 bottom-6 top-8 rounded-full bg-electric/20 blur-[80px]" />
          <Image
            src={s.image}
            alt={`${s.name} — VMPZ Informática`}
            width={480}
            height={640}
            quality={95}
            className="relative rounded-2xl object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          />
        </Reveal>
      </section>

      {/* Qué incluye */}
      <section className="section container-page">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Qué incluye</h2>
            <ul className="mt-6 space-y-4">
              {s.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric2">
                    <Check size={15} />
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1}>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Por qué te interesa</h2>
            <div className="mt-6 space-y-4">
              {s.benefits.map((b) => (
                <div key={b.title} className="glow-card">
                  <h3 className="font-display text-base font-semibold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Faq items={s.faq} title="Dudas sobre este servicio" />
      <ContactCTA
        title={`¿Reservamos tu ${s.shortName.toLowerCase()}?`}
        subtitle="Escríbenos y coordinamos una visita a domicilio con un precio claro desde el principio."
        whatsappMessage={waMsg}
      />
    </>
  );
}
