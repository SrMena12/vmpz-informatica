import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ServiceIcon } from '@/components/ServiceIcon';
import { servicios, formatPrecio } from '@/lib/servicios';

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section id="servicios" className="section container-page scroll-mt-20">
      {heading && (
        <Reveal className="mb-12 max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            Todo lo que tu ordenador necesita
          </h2>
          <p className="mt-4 text-muted">
            Del cambio de disco al montaje a medida. Precio claro antes de empezar y trabajo garantizado,
            en tu propia casa.
          </p>
        </Reveal>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s, i) => (
          <Reveal as="div" index={i} key={s.slug}>
            <Link href={`/servicios/${s.slug}`} className="glow-card group flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric2 transition-colors group-hover:bg-electric/20">
                  <ServiceIcon name={s.icon} size={22} />
                </span>
                <ArrowUpRight size={18} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:text-electric2" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{s.tagline}</p>
              <div className="mt-5 border-t border-line pt-4">
                <span className="text-xs uppercase tracking-wider text-muted">Precio</span>
                <p className="font-display text-lg font-bold text-electric2">{formatPrecio(s)}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
