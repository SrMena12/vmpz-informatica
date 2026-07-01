import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Check, ArrowRight } from 'lucide-react';

import { municipios, getMunicipio } from '@/lib/municipios';
import { servicios, formatPrecio } from '@/lib/servicios';
import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Reveal } from '@/components/Reveal';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

type Params = { municipio: string };

export function generateStaticParams(): Params[] {
  return municipios.map((m) => ({ municipio: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { municipio } = await params;
  const m = getMunicipio(municipio);
  if (!m) return {};
  return buildMetadata({
    title: `Informático a domicilio en ${m.name}`,
    description: `Servicio informático a domicilio en ${m.name} (${m.comarca}): SSD, montaje, formateo, virus y copias de seguridad. Precio claro y atención cercana.`,
    path: `/zonas/${m.slug}`,
  });
}

export default async function ZonaPage({ params }: { params: Promise<Params> }) {
  const { municipio } = await params;
  const m = getMunicipio(municipio);
  if (!m) notFound();

  const waMsg = `Hola, estoy en ${m.name} y me gustaría consultaros un servicio informático a domicilio.`;

  // Schema de servicio local acotado al municipio.
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${site.name} — ${m.name}`,
    description: `Soporte informático a domicilio en ${m.name}, ${m.comarca}.`,
    url: `${site.url}/zonas/${m.slug}`,
    telephone: site.phoneIntl,
    email: site.email,
    areaServed: { '@type': 'City', name: m.name },
    provider: { '@id': `${site.url}/#business` },
  };

  return (
    <>
      <JsonLd data={localSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Zonas', path: '/#zonas' },
          { name: m.name, path: `/zonas/${m.slug}` },
        ])}
      />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">{m.name}</li>
        </ol>
      </nav>

      {/* Cabecera */}
      <section className="container-page relative py-12">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative max-w-3xl">
          <span className="flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric2">
            <MapPin size={15} /> {m.comarca}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Informático a domicilio en {m.name}
          </h1>
          <p className="mt-5 text-lg text-muted">{m.intro}</p>
          <div className="mt-8">
            <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="whatsapp">Consultar por WhatsApp</Button>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Servicios disponibles en el municipio */}
      <section className="section container-page">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            Servicios disponibles en {m.name}
          </h2>
          <p className="mt-4 text-muted">
            Vamos a tu casa o negocio con todo lo necesario. Estos son los servicios que puedes reservar,
            todos con desplazamiento incluido dentro de la zona.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.slug} index={i % 3}>
              <Link href={`/servicios/${s.slug}`} className="glow-card group flex h-full flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric2">
                  <ServiceIcon name={s.icon} size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 text-sm text-muted">{s.tagline}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-display text-sm font-semibold text-electric2">{formatPrecio(s)}</span>
                  <ArrowRight
                    size={16}
                    className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-electric2"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Por qué VMPZ en esta zona */}
      <section className="section container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <span className="eyebrow">Cercanía</span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              Un informático de la zona, no un call center
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                `Conocemos ${m.comarca} y nos movemos rápido por la zona.`,
                'Precio cerrado antes de empezar: nada de sorpresas al final.',
                'Vamos nosotros a tu domicilio, tú no mueves el equipo.',
                'Trato directo y explicaciones sin tecnicismos.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric2">
                    <Check size={15} />
                  </span>
                  <span className="text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="relative mx-auto max-w-xs">
            <div className="absolute inset-x-8 bottom-6 top-8 rounded-full bg-electric/20 blur-[80px]" />
            <Image
              src="/personaje/contacto.png"
              alt={`Soporte informático en ${m.name}`}
              width={420}
                height={636}
              quality={95}
              className="relative object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Otras zonas */}
      <section className="container-page pb-4">
        <Reveal>
          <h2 className="font-display text-lg font-semibold text-ink">Otras zonas donde trabajamos</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {municipios
              .filter((o) => o.slug !== m.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/zonas/${o.slug}`}
                  className="rounded-full border border-line bg-surface/50 px-4 py-1.5 text-sm text-muted transition-colors hover:border-electric/40 hover:text-ink"
                >
                  {o.name}
                </Link>
              ))}
          </div>
        </Reveal>
      </section>

      <ContactCTA
        title={`¿Necesitas ayuda en ${m.name}?`}
        subtitle="Escríbenos por WhatsApp o correo y coordinamos una visita a domicilio con un precio claro desde el principio."
        whatsappMessage={waMsg}
      />
    </>
  );
}
