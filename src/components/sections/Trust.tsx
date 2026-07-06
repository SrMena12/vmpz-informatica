import { Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';
import { testimonios } from '@/lib/testimonios';

export function Trust() {
  return (
    <section className="section container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-4 py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-electric2 text-electric2" />
          ))}
          <span className="ml-2 text-sm text-ink">
            {site.reviews.rating.toFixed(1)} · {site.reviews.count} reseñas en Google
          </span>
        </div>
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">Lo que dicen mis clientes</h2>
        <p className="mt-4 text-muted">
          Estas son reseñas reales de clientes en Google.{' '}
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric2 hover:underline"
          >
            Léelas todas aquí
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonios.map((t, i) => (
          <Reveal as="div" index={i % 3} key={t.author} className="glow-card flex h-full flex-col">
            <div className="flex gap-1" aria-label={`${t.rating} de 5 estrellas`}>
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} size={16} className="fill-electric2 text-electric2" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">“{t.text}”</p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electric/15 font-display text-sm font-semibold text-electric2">
                {t.author.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block font-medium text-ink">{t.author}</span>
                <span className="text-xs text-muted">Reseña en {t.source}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
