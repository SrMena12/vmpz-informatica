import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { BudgetCalculator } from '@/components/sections/BudgetCalculator';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Reveal } from '@/components/Reveal';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Servicios de informática en Toledo y La Sagra',
  description:
    'Instalación de SSD, montaje de equipos, formateo, copias de seguridad, eliminación de virus, limpieza y asesoramiento. Precios claros y servicio a domicilio.',
  path: '/servicios',
});

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
        ])}
      />
      <section className="container-page pt-16">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Servicios</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Servicios de informática a domicilio
          </h1>
          <p className="mt-5 text-lg text-muted">
            Elige lo que necesitas. Cada servicio tiene su propia página con todo lo que incluye, el precio y las
            dudas más habituales resueltas.
          </p>
        </Reveal>
      </section>

      <ServicesGrid heading={false} />
      <BudgetCalculator />
      <ContactCTA />
    </>
  );
}
