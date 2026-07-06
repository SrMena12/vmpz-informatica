'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import { whatsappLink } from '@/lib/site';
import { cn } from '@/lib/utils';

const links = [
  { href: '/servicios', label: 'Servicios', emphasis: true },
  { href: '/empresas', label: 'Empresas' },
  { href: '/gaming', label: 'Gaming', rgb: true },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre-vmpz', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm transition-colors',
                l.emphasis &&
                  'rounded-full border border-electric/40 bg-electric/10 px-3.5 py-1.5 font-semibold text-electric2 hover:bg-electric/20',
                l.rgb && 'font-semibold text-ink hover:text-white',
                !l.emphasis && !l.rgb && 'text-muted hover:text-ink'
              )}
            >
              {l.rgb ? <span className="relative rgb-underline">{l.label}</span> : l.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="primary">
              <MessageCircle size={16} /> WhatsApp
            </Button>
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-3',
                  l.emphasis && 'bg-electric/10 font-semibold text-electric2',
                  l.rgb && 'font-semibold text-ink',
                  !l.emphasis && !l.rgb && 'text-ink hover:bg-white/[0.05]'
                )}
              >
                {l.rgb ? (
                  <span className="relative rgb-underline inline-block">{l.label}</span>
                ) : (
                  l.label
                )}
              </Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button className="w-full" variant="primary">
                <MessageCircle size={18} /> Escríbenos por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
