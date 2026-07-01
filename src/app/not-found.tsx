import Link from 'next/link';
import { Home, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { whatsappLink } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]" />

      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface/60 text-electric2">
        <Wrench size={26} />
      </span>

      <p className="mt-8 font-display text-7xl font-extrabold tracking-tight text-electric2 sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Esta página no existe (o la hemos formateado)</h1>
      <p className="mt-4 max-w-md text-muted">
        El enlace que buscas no está disponible. Vuelve al inicio o escríbenos y te ayudamos con lo que
        necesites.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button size="lg"><Home size={20} /> Volver al inicio</Button>
        </Link>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline">Escribir por WhatsApp</Button>
        </a>
      </div>
    </section>
  );
}
