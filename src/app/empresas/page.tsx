import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, MessageCircle, Mail, Building2, ArrowRight } from 'lucide-react';

import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink, mailtoLink } from '@/lib/site';
import {
  empresasHero,
  dolores,
  incluye,
  planes,
  razones,
  sectores,
  renovacion,
  empresasFaq,
  empresasKeywords,
} from '@/lib/empresas';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Mantenimiento informático para empresas y autónomos',
  description:
    'Mantenimiento informático para pymes, comercios y autónomos en Toledo y La Sagra. Copias de seguridad, seguridad, soporte prioritario y gestión de equipos con cuota fija.',
  path: '/empresas',
  image: '/personaje/asesoramiento.png',
});

const waMsg =
  'Hola, tengo un negocio y me gustaría información sobre el mantenimiento informático para empresas.';
const mailBody =
  'Hola,\n\nMe gustaría información sobre el mantenimiento informático para empresas.\n\n- Nombre del negocio:\n- Nº de equipos aproximado:\n- Municipio:\n- Qué necesitáis:\n\nGracias.';

function planPrecio(p: (typeof planes)[number]): string {
  return p.price === null ? 'A medida' : `${p.price}€`;
}

export default function EmpresasPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mantenimiento informático para empresas y autónomos',
    description: empresasHero.subtitle,
    serviceType: 'Mantenimiento informático',
    provider: { '@id': `${site.url}/#business` },
    areaServed: [site.city, site.province, site.region],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planes de mantenimiento',
      itemListElement: planes.map((p) => ({
        '@type': 'Offer',
        name: `Plan ${p.name}`,
        ...(p.price !== null
          ? { price: p.price, priceCurrency: 'EUR', description: `Cuota mensual — ${p.ideal}` }
          : { description: `Presupuesto a medida — ${p.ideal}` }),
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Empresas', path: '/empresas' },
        ])}
      />
      <JsonLd data={faqSchema(empresasFaq)} />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">Empresas</li>
        </ol>
      </nav>

      {/* Cabecera */}
      <section className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative">
          <span className="flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric2">
            <Building2 size={15} /> {empresasHero.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {empresasHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{empresasHero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="whatsapp">
                <MessageCircle size={20} /> Solicita información
              </Button>
            </a>
            <a href={mailtoLink('Mantenimiento para empresas — VMPZ Informática', mailBody)}>
              <Button size="lg" variant="outline">
                <Mail size={18} /> Escríbenos por correo
              </Button>
            </a>
          </div>
        </Reveal>

        <Reveal index={1} className="relative mx-auto max-w-sm">
          <div className="absolute inset-x-8 bottom-6 top-8 rounded-full bg-electric/20 blur-[80px]" />
          <Image
            src="/personaje/asesoramiento.png"
            alt="Mantenimiento informático para empresas — VMPZ Informática"
            width={480}
            height={640}
            quality={95}
            className="relative rounded-2xl object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          />
        </Reveal>
      </section>

      {/* Dolores: ¿te suena? */}
      <section className="section container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">¿Te suena?</span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              La informática no debería ser tu problema
            </h2>
            <p className="mt-4 text-muted">
              Cuando nadie se ocupa de los equipos, el fallo llega en el peor momento. Nosotros nos
              adelantamos para que tú te dediques a tu negocio.
            </p>
          </Reveal>
          <Reveal index={1}>
            <ul className="space-y-4">
              {dolores.map((d) => (
                <li key={d} className="glow-card flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric2 font-display text-sm">
                    ✕
                  </span>
                  <span className="text-muted">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section container-page">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Qué incluye</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            Todo lo que tu negocio necesita, cubierto
          </h2>
          <p className="mt-4 text-muted">
            Un único responsable de tu tecnología, con visitas programadas y soporte entre medias.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {incluye.map((item, i) => (
            <Reveal key={item.title} index={i % 3}>
              <div className="glow-card h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric2">
                  <ServiceIcon name={item.icon} size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section className="section container-page">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Planes</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            Una cuota fija, sin sorpresas
          </h2>
          <p className="mt-4 text-muted">
            Elige el punto de partida; siempre lo ajustamos a tu negocio tras una primera revisión sin
            compromiso.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {planes.map((p, i) => (
            <Reveal key={p.name} index={i}>
              <div
                className={
                  p.highlight
                    ? 'relative flex h-full flex-col rounded-2xl border border-electric2/60 bg-surface2/70 p-7 shadow-glow-sm'
                    : 'relative flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-7 shadow-card'
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-electric px-3 py-1 text-xs font-semibold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.ideal}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-electric2">
                    {planPrecio(p)}
                  </span>
                  {p.price !== null && <span className="mb-1 text-sm text-muted">/mes</span>}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-electric2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hola, me interesa el plan ${p.name} de mantenimiento para empresas. ¿Me contáis más?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7"
                >
                  <Button
                    variant={p.highlight ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {p.price === null ? 'Pedir presupuesto' : 'Lo quiero'}
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted">
          Precios orientativos. El plan final se cierra tras una revisión gratuita de tus equipos.
        </p>
      </section>

      {/* Por qué VMPZ */}
      <section className="section container-page">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Por qué VMPZ</span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              Un informático de confianza para tu empresa
            </h2>
            <p className="mt-4 text-muted">
              Tratamos tu negocio como si fuera el nuestro: cerca, con criterio y sin venderte lo que no
              necesitas.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {sectores.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-sm text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {razones.map((r) => (
                <div key={r.title} className="glow-card">
                  <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Renovación de equipos */}
      <section className="section container-page">
        <div className="rounded-3xl border border-line bg-surface/50 p-6 sm:p-10">
          <Reveal className="mb-8 max-w-2xl">
            <span className="eyebrow">{renovacion.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">{renovacion.title}</h2>
            <p className="mt-4 text-muted">{renovacion.text}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {renovacion.opciones.map((op, i) => (
              <Reveal key={op.title} index={i}>
                <div className="glow-card h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric2">
                    <ServiceIcon name={op.icon} size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{op.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{op.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <a
              href={whatsappLink(
                'Hola, me interesa renovar los equipos de mi oficina. ¿Me asesoráis?'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <MessageCircle size={18} /> Pídenos presupuesto de renovación
              </Button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Cómo empezamos */}
      <section className="section container-page">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Cómo empezamos</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">En 3 pasos, sin líos</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: '01', t: 'Revisión gratuita', d: 'Vemos el estado de tus equipos, copias y seguridad. Sin compromiso.' },
            { n: '02', t: 'Plan a tu medida', d: 'Te proponemos el plan que encaja con tu negocio y su presupuesto.' },
            { n: '03', t: 'Nos ocupamos', d: 'Tú a lo tuyo; nosotros mantenemos todo funcionando y respondemos cuando surge algo.' },
          ].map((step, i) => (
            <Reveal key={step.n} index={i}>
              <div className="glow-card h-full">
                <span className="font-display text-2xl font-extrabold text-electric2/60">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.t}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Faq items={empresasFaq} title="Dudas de empresas y autónomos" />

      <ContactCTA
        title="¿Hablamos de tu negocio?"
        subtitle="Cuéntanos cuántos equipos tenéis y qué necesitáis. Empezamos con una revisión gratuita y un precio claro desde el principio."
        whatsappMessage={waMsg}
      />

      {/* Enlace de vuelta a particulares (SEO interno) */}
      <div className="container-page pb-16 text-center text-sm text-muted">
        ¿Buscas ayuda para tu ordenador de casa?{' '}
        <Link href="/servicios" className="inline-flex items-center gap-1 text-electric2 hover:underline">
          Ver servicios para particulares <ArrowRight size={14} />
        </Link>
      </div>

      {/* Keywords SEO ocultas semánticamente ya cubiertas por el contenido */}
      <span className="sr-only">{empresasKeywords.join(', ')}</span>
    </>
  );
}
