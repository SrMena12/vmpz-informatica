import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { site, telLink, whatsappLink, mailtoLink } from '@/lib/site';

export function ContactCTA({
  title = '¿Hablamos de tu equipo?',
  subtitle = 'Cuéntanos qué le pasa a tu ordenador y te decimos cómo lo solucionamos, con un precio claro desde el principio.',
  whatsappMessage,
}: {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="section container-page">
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-royal/20 blur-[110px]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-muted">{subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto">
                <MessageCircle size={20} /> WhatsApp
              </Button>
            </a>
            <a href={mailtoLink('Consulta — VMPZ Informática')}>
              <Button size="lg" variant="outline" className="w-full whitespace-nowrap sm:w-auto">
                <Mail size={18} /> {site.email}
              </Button>
            </a>
            <a href={telLink}>
              <Button size="lg" variant="ghost" className="w-full whitespace-nowrap sm:w-auto">
                <Phone size={18} /> {site.phoneIntl}
              </Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
