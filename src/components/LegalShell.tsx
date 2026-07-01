import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

/**
 * Marco común para las páginas legales (aviso legal, privacidad, cookies).
 * Aplica un estilo de lectura sobrio y consistente sobre el contenido.
 */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page py-16">
      <Reveal className="mx-auto max-w-3xl">
        <span className="eyebrow">Información legal</span>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Última actualización: {updated}</p>

        <div
          className="mt-10 space-y-4 text-muted leading-relaxed
            [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink
            [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink
            [&_a]:text-electric2 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-ink
            [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5
            [&_strong]:text-ink"
        >
          {children}
        </div>
      </Reveal>
    </section>
  );
}
