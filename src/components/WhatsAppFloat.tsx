'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_0_36px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={26} className="fill-black/10" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
