import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { site, telLink } from '@/lib/site';
import { servicios } from '@/lib/servicios';
import { municipios } from '@/lib/municipios';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Soporte informático a domicilio en {site.city}, {site.province} y toda {site.region}.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-ink">
            <Star size={16} className="fill-electric2 text-electric2" />
            <span className="font-medium">{site.reviews.rating.toFixed(1)}</span>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              · {site.reviews.count} reseñas en Google
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/empresas" className="font-medium text-electric2 hover:text-ink">
                Mantenimiento para empresas
              </Link>
            </li>
            <li>
              <Link href="/gaming" className="font-medium text-electric2 hover:text-ink">
                PC Gaming a medida
              </Link>
            </li>
            <li>
              <Link href="/sobre-vmpz" className="text-muted hover:text-ink">
                Sobre VMPZ
              </Link>
            </li>
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-muted hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Zonas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {municipios.slice(0, 6).map((m) => (
              <li key={m.slug}>
                <Link href={`/zonas/${m.slug}`} className="text-muted hover:text-ink">
                  {m.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zonas" className="font-medium text-electric2 hover:text-ink">
                Ver todas las zonas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telLink} className="flex items-center gap-2 whitespace-nowrap text-muted hover:text-ink">
                <Phone size={15} /> {site.phoneIntl}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted hover:text-ink">
                <Mail size={15} /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-ink">
                <Instagram size={15} /> @{site.instagram}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted">
              <MapPin size={15} /> {site.city} · {site.serviceNote}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/aviso-legal" className="hover:text-ink">Aviso legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-ink">Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-ink">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Personaje de espaldas: decorativo, con resplandor azul a juego con el logo */}
      <div className="pointer-events-none absolute bottom-16 right-10 hidden select-none lg:block">
        <div className="absolute -inset-6 rounded-full bg-electric/25 blur-[70px]" />
        <Image
          src="/personaje/espaldas.png"
          alt=""
          aria-hidden="true"
          width={260}
          height={442}
          quality={95}
          className="relative h-80 w-auto object-contain opacity-70 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        />
      </div>
    </footer>
  );
}
