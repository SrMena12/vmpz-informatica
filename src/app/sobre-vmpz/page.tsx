import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, HandCoins, Home, Heart, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre VMPZ — Tu informático de confianza en Toledo y La Sagra',
  description:
    'Quién hay detrás de VMPZ Informática: un técnico cercano de Mocejón que da servicio a domicilio en Toledo y La Sagra, con trato claro, precio cerrado y trabajo bien hecho.',
  path: '/sobre-vmpz',
});

// ✍️ EDITA AQUÍ tu historia. Es un borrador: ajústalo a tu voz cuando quieras.
const razones = [
  {
    icon: Heart,
    title: 'Trato cercano y en cristiano',
    text: 'Te explico lo que le pasa a tu equipo sin tecnicismos ni humos, para que entiendas qué se hace y por qué.',
  },
  {
    icon: HandCoins,
    title: 'Precio claro antes de empezar',
    text: 'Nada de sorpresas al final. Te digo lo que cuesta desde el principio y solo hago lo que acordamos.',
  },
  {
    icon: Home,
    title: 'A domicilio, sin que te muevas',
    text: 'Voy a tu casa o negocio en Toledo y La Sagra. Tú sigues con lo tuyo mientras yo me encargo.',
  },
  {
    icon: ShieldCheck,
    title: 'Tus datos, con cuidado',
    text: 'Trato tu información con el respeto que merece: copias antes de tocar nada y confidencialidad siempre.',
  },
];

export default function SobreVmpzPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Sobre VMPZ', path: '/sobre-vmpz' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre VMPZ Informática',
          url: `${site.url}/sobre-vmpz`,
          about: { '@id': `${site.url}/#business` },
        }}
      />

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li className="text-ink">Sobre VMPZ</li>
        </ol>
      </nav>

      {/* Cabecera */}
      <section className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative">
          <span className="eyebrow">Sobre VMPZ</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Quién hay detrás de VMPZ
          </h1>
          {/* ✍️ EDITA tu historia aquí */}
          <p className="mt-5 text-lg text-muted">
            Soy Víctor, el informático detrás de VMPZ. Soy de Mocejón y doy servicio a domicilio en
            Toledo y toda La Sagra. VMPZ no es una gran cadena ni un call center: soy yo, una persona
            de la zona a la que puedes llamar y que va a tu casa a resolverte el problema.
          </p>
          <p className="mt-4 text-muted">
            La informática me ha gustado desde siempre: empecé trasteando y arreglando equipos a
            gente cercana, y de ahí nació la idea de convertirlo en un servicio serio, cercano y
            honesto para mi comarca. Lo que más me importa es que te quedes tranquilo: que entiendas
            qué se hace, que sepas lo que cuesta y que tu equipo salga funcionando como debe.
          </p>
        </Reveal>

        <Reveal index={1} className="relative mx-auto max-w-sm">
          <div className="absolute inset-x-8 bottom-6 top-8 rounded-full bg-electric/20 blur-[80px]" />
          <Image
            src="/personaje/espaldas.png"
            alt="VMPZ Informática — tu técnico de confianza en Toledo y La Sagra"
            width={460}
            height={620}
            quality={95}
            className="relative mx-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          />
        </Reveal>
      </section>

      {/* Por qué fiarte */}
      <section className="section container-page">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Por qué fiarte de mí</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            Cómo trabajo
          </h2>
          <p className="mt-4 text-muted">
            Sin letra pequeña. Estas son las cuatro cosas que no negocio en ningún trabajo.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {razones.map((r, i) => (
            <Reveal key={r.title} index={i % 2}>
              <div className="glow-card h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric2">
                  <r.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prueba social */}
      <section className="section container-page">
        <Reveal className="glow-card flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={18} className="fill-electric2 text-electric2" />
              ))}
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold text-ink">
              {site.reviews.rating.toFixed(1)} de 5 en Google, con {site.reviews.count} reseñas
            </h2>
            <p className="mt-1 text-sm text-muted">
              La mejor forma de saber cómo trabajo es que te lo cuenten mis clientes.
            </p>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-electric2 hover:underline"
          >
            Leer las reseñas →
          </a>
        </Reveal>
      </section>

      <ContactCTA
        title="¿Te ayudo con tu equipo?"
        subtitle="Escríbeme y lo vemos. Trato directo conmigo, respuesta rápida y un precio claro desde el principio."
      />
    </>
  );
}
