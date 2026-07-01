import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

import { posts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Blog de informática práctica',
  description:
    'Consejos claros sobre rendimiento, seguridad y mantenimiento de ordenadores. Sin tecnicismos, escritos para que cualquiera los entienda.',
  path: '/blog',
});

/** Formatea una fecha ISO a texto legible en español. */
function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  // Más recientes primero.
  const ordenados = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      <section className="container-page pt-16">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Informática práctica, sin tecnicismos
          </h1>
          <p className="mt-5 text-lg text-muted">
            Consejos de andar por casa para que tu ordenador dure más y funcione mejor. Lo mismo que te
            contaríamos en una visita, pero por escrito.
          </p>
        </Reveal>
      </section>

      <section className="section container-page">
        <div className="grid gap-5 md:grid-cols-2">
          {ordenados.map((p, i) => (
            <Reveal key={p.slug} index={i % 2}>
              <Link href={`/blog/${p.slug}`} className="glow-card group flex h-full flex-col">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full border border-electric/30 bg-electric/10 px-2.5 py-1 font-medium text-electric2">
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {p.readingMinutes} min
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-ink transition-colors group-hover:text-electric2">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                  <span>{fmtDate(p.date)}</span>
                  <span className="flex items-center gap-1 font-medium text-electric2">
                    Leer <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
