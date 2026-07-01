'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

type RevealProps = {
  children: ReactNode;
  /** Retardo escalonado (índice). */
  index?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

/** Envuelve contenido para que aparezca con fade + blur + slide al entrar en pantalla. */
export function Reveal({ children, index = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  );
}
