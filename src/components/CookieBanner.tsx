'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const KEY = 'vmpz-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* localStorage no disponible */
    }
  }, []);

  const decide = (value: 'accept' | 'reject') => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-line bg-surface/95 p-5 shadow-card backdrop-blur-xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies propias necesarias para el funcionamiento del sitio. Puedes leer más en la{' '}
          <Link href="/politica-de-cookies" className="text-electric2 hover:underline">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button size="sm" variant="outline" onClick={() => decide('reject')}>
            Rechazar
          </Button>
          <Button size="sm" variant="primary" onClick={() => decide('accept')}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
