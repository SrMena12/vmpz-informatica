import { Star, BadgeCheck, Clock, Shield, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

const pillars = [
  { icon: Sparkles, title: 'Soluciones personalizadas', text: 'Cada equipo y cada persona es distinta; adaptamos la solución.' },
  { icon: BadgeCheck, title: 'Experiencia y profesionalidad', text: 'Trabajo bien hecho, explicado en cristiano y sin sorpresas.' },
  { icon: Clock, title: 'Atención rápida y cercana', text: 'Respondemos pronto y vamos a tu domicilio cuando lo necesitas.' },
  { icon: Shield, title: 'Tu tecnología en buenas manos', text: 'Tus datos y tu equipo, tratados con el cuidado que merecen.' },
];

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
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">Clientes que repiten y recomiendan</h2>
        <p className="mt-4 text-muted">
          Nuestra mejor carta de presentación son las valoraciones de quienes ya confían en nosotros.{' '}
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-electric2 hover:underline">
            Léelas en Google
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal as="div" index={i} key={p.title} className="glow-card text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric2">
              <p.icon size={22} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
