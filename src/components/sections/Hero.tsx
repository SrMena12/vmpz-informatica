'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Particles } from '@/components/Particles';
import { site, whatsappLink } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Fondo: retícula + glows + partículas */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-electric/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-royal/20 blur-[120px]" />
      <Particles className="absolute inset-0 h-full w-full" />

      <div className="container-page relative grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Star size={13} className="fill-electric2 text-electric2" />
            {site.reviews.count} reseñas · {site.reviews.rating.toFixed(1)} en Google
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            ¿Tu ordenador va lento?
            <span className="mt-2 block bg-gradient-to-r from-electric2 to-electric bg-clip-text text-transparent">
              Nosotros lo dejamos como nuevo.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            Soporte informático a domicilio en {site.city}, {site.province} y toda {site.region}.
            Reparamos, mejoramos y ponemos a punto tu equipo con un precio claro desde el principio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto">
                <MessageCircle size={20} /> Escríbenos por WhatsApp
              </Button>
            </a>
            <Link href="/servicios">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver servicios <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[240px] sm:max-w-xs lg:max-w-sm"
        >
          <div className="absolute inset-x-6 bottom-6 top-10 rounded-full bg-electric/25 blur-[90px]" />
          <Image
            src="/personaje/hero.png"
            alt="Técnico de VMPZ Informática"
            width={520}
            height={860}
            quality={95}
            priority
            className="relative animate-float object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>

      <a
        href="#servicios"
        aria-label="Ver servicios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-electric2"
      >
        <ChevronDown size={26} className="animate-bounce" />
      </a>
    </section>
  );
}
