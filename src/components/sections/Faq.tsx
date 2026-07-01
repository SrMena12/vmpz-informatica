import { Plus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Faq({ items, title = 'Preguntas frecuentes' }: { items: { q: string; a: string }[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="section container-page">
      <Reveal className="mb-10 max-w-2xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-surface/40">
        {items.map((f, i) => (
          <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink">
              <span className="font-medium">{f.q}</span>
              <Plus
                size={20}
                className="shrink-0 text-electric2 transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
