'use client';

import { useMemo, useState } from 'react';
import { MessageCircle, Mail, Check, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/components/ServiceIcon';
import { servicios } from '@/lib/servicios';
import { whatsappLink, mailtoLink } from '@/lib/site';
import { cn } from '@/lib/utils';

// =============================================================
//  Elementos presupuestables de la calculadora.
//  Combina los servicios del catálogo con "extras" de
//  microinformática que no tienen página propia.
//  EDITA AQUÍ para añadir opciones o cambiar precios.
// =============================================================
type BudgetItem = { id: string; name: string; icon: string; price: number | null; prefix?: string };

// Extras de microinformática (precios orientativos "desde").
const extras: BudgetItem[] = [
  { id: 'ampliacion-ram', name: 'Ampliación de memoria RAM', icon: 'MemoryStick', price: 25, prefix: 'desde' },
  { id: 'instalacion-programas', name: 'Instalación de programas y SO', icon: 'DownloadCloud', price: 30, prefix: 'desde' },
  { id: 'config-red-wifi', name: 'Configuración de red y WiFi', icon: 'Wifi', price: 30, prefix: 'desde' },
  { id: 'instalacion-impresora', name: 'Instalación de impresora', icon: 'Printer', price: 20 },
  { id: 'config-correo', name: 'Configuración de correo y cuentas', icon: 'AtSign', price: 20 },
  { id: 'equipo-nuevo', name: 'Puesta a punto de equipo nuevo', icon: 'Laptop', price: 40, prefix: 'desde' },
  { id: 'mantenimiento', name: 'Mantenimiento preventivo', icon: 'Wrench', price: 35, prefix: 'desde' },
  { id: 'recuperacion-datos', name: 'Recuperación de datos', icon: 'LifeBuoy', price: null },
];

// Catálogo + extras en una sola lista.
const items: BudgetItem[] = [
  ...servicios.map((s) => ({ id: s.slug, name: s.name, icon: s.icon, price: s.price, prefix: s.pricePrefix })),
  ...extras,
];

function fmt(item: BudgetItem): string {
  if (item.price === null) return 'A consultar';
  return `${item.prefix ? `${item.prefix} ` : ''}${item.price}€`;
}

export function BudgetCalculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const { total, toConsult, chosen } = useMemo(() => {
    const chosen = items.filter((s) => selected.has(s.id));
    const total = chosen.reduce((sum, s) => sum + (s.price ?? 0), 0);
    const toConsult = chosen.filter((s) => s.price === null).length;
    return { total, toConsult, chosen };
  }, [selected]);

  const message = useMemo(() => {
    if (chosen.length === 0) return 'Hola, me gustaría pedir un presupuesto.';
    const lines = chosen.map((s) => `• ${s.name}${s.price !== null ? ` (${fmt(s)})` : ' (a valorar)'}`);
    const estimate =
      total > 0 ? `\n\nEstimación orientativa: desde ${total}€${toConsult ? ` + ${toConsult} servicio(s) a valorar` : ''}.` : '';
    return `Hola, me gustaría pedir un presupuesto para:\n${lines.join('\n')}${estimate}`;
  }, [chosen, total, toConsult]);

  const hasSelection = chosen.length > 0;

  return (
    <section className="section container-page scroll-mt-20" id="presupuesto">
      {/* Encabezado a todo el ancho */}
      <div className="max-w-2xl">
        <span className="eyebrow">
          <Calculator size={13} /> Presupuesto en 30 segundos
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Calcula tu presupuesto</h2>
        <p className="mt-4 text-muted">
          Marca lo que necesitas y te preparamos el mensaje listo para enviar. Sin registros ni compromiso:
          la estimación es orientativa y la confirmamos al valorar tu equipo.
        </p>
      </div>

      {/* Servicios (izquierda) y resumen (derecha) alineados en paralelo */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((s) => {
            const active = selected.has(s.id);
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                aria-pressed={active}
                className={cn(
                  'flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200',
                  active
                    ? 'border-electric2 bg-electric/10 shadow-glow-sm'
                    : 'border-line bg-white/[0.02] hover:border-electric2/50'
                )}
              >
                <span
                  className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
                    active ? 'bg-electric text-white' : 'bg-electric/10 text-electric2'
                  )}
                >
                  {active ? <Check size={18} /> : <ServiceIcon name={s.icon} size={18} />}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-ink">{s.name}</span>
                  <span className="block text-xs text-muted">{fmt(s)}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Resumen */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="glow-card">
            <h3 className="font-display text-lg font-semibold">Tu presupuesto</h3>

            <div className="mt-5 max-h-64 min-h-[80px] space-y-2 overflow-y-auto pr-1">
              {hasSelection ? (
                chosen.map((s) => (
                  <div key={s.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="min-w-0 truncate text-muted">{s.name}</span>
                    <span className="shrink-0 font-medium text-ink">{fmt(s)}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted">Selecciona uno o varios servicios para ver la estimación.</p>
              )}
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <div className="flex items-end justify-between">
                <span className="text-sm text-muted">Estimación desde</span>
                <span className="font-display text-3xl font-extrabold text-electric2">{total}€</span>
              </div>
              {toConsult > 0 && (
                <p className="mt-2 text-xs text-muted">+ {toConsult} servicio(s) a valorar según tu caso.</p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle size={18} /> Pedir por WhatsApp
                </Button>
              </a>
              <a href={mailtoLink('Solicitud de presupuesto — VMPZ Informática', message)}>
                <Button variant="outline" className="w-full">
                  <Mail size={18} /> Enviar por correo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
