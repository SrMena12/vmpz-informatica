import { cn } from '@/lib/utils';
import Link from 'next/link';

/**
 * Logotipo tipográfico VMPZ (VM en blanco, PZ en azul eléctrico).
 * "INFORMÁTICA" va centrada entre dos líneas que se estiran hasta el
 * ancho exacto de "VMPZ", igual que el logo original.
 */
export function Logo({ className, withSub = true }: { className?: string; withSub?: boolean }) {
  return (
    <Link href="/" aria-label="VMPZ Informática — Inicio" className={cn('inline-flex flex-col leading-none', className)}>
      <span className="text-center font-display text-2xl font-extrabold tracking-tight">
        <span className="text-ink">VM</span>
        <span className="text-electric [text-shadow:0_0_18px_rgba(31,91,255,0.55)]">PZ</span>
      </span>
      {withSub && (
        <span className="mt-1 flex items-center gap-2 text-[9px] font-medium text-electric2">
          <span className="h-px flex-1 bg-electric" />
          <span className="tracking-[0.3em] [margin-right:-0.3em]">INFORMÁTICA</span>
          <span className="h-px flex-1 bg-electric" />
        </span>
      )}
    </Link>
  );
}
