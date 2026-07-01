import type { ReactNode } from 'react';

// =============================================================
//  BLOG — EDITA AQUÍ los artículos.
//  Para añadir uno nuevo: copia un objeto del array, cambia
//  slug/título/contenido y listo. Aparece solo en /blog.
// =============================================================

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** Formato ISO: 'YYYY-MM-DD'. */
  date: string;
  readingMinutes: number;
  keywords: string[];
  /** Índice de contenidos: encabezados de las secciones. */
  toc: { id: string; label: string }[];
  faq: { q: string; a: string }[];
  content: ReactNode;
};

const H = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-28 font-display text-2xl font-bold text-ink">
    {children}
  </h2>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-muted leading-relaxed">{children}</p>
);

export const posts: Post[] = [
  {
    slug: 'senales-de-que-tu-ordenador-necesita-un-ssd',
    title: 'Señales de que tu ordenador necesita un SSD',
    excerpt:
      'Si tu equipo tarda una eternidad en encender o los programas se abren con cuentagotas, el disco suele ser el culpable. Te contamos cómo detectarlo.',
    category: 'Rendimiento',
    author: 'VMPZ Informática',
    date: '2026-06-20',
    readingMinutes: 4,
    keywords: ['ordenador lento', 'instalar SSD', 'mejorar rendimiento PC'],
    toc: [
      { id: 'sintomas', label: 'Síntomas de un disco lento' },
      { id: 'por-que', label: 'Por qué un SSD lo cambia todo' },
      { id: 'merece-la-pena', label: '¿Merece la pena en mi equipo?' },
    ],
    faq: [
      { q: '¿Un SSD hace más rápido cualquier ordenador?', a: 'En equipos con disco mecánico (HDD), la mejora es enorme. Si ya tienes SSD, la ganancia viene por otras vías como más memoria RAM.' },
      { q: '¿Puedo instalar un SSD yo mismo?', a: 'Es posible, pero el clonado del sistema tiene truco. Si no quieres arriesgarte a perder datos, mejor que lo haga un profesional.' },
    ],
    content: (
      <div className="space-y-5">
        <P>
          Uno de los motivos más habituales por los que un ordenador parece &laquo;viejo&raquo; no es el
          procesador ni la memoria: es el disco duro. Si el tuyo es mecánico, cada vez que enciendes o
          abres un programa el equipo está esperando a una pieza con partes que giran físicamente. Y eso
          se nota.
        </P>
        <H id="sintomas">Síntomas de un disco lento</H>
        <P>
          Hay señales que se repiten en casi todos los casos: el ordenador tarda varios minutos en estar
          usable después de encenderlo, el disco &laquo;trabaja&raquo; con un ruidito constante, los
          programas tardan en abrir y, cuando abres varios a la vez, todo se atasca. Si te suena, el disco
          es el principal sospechoso.
        </P>
        <H id="por-que">Por qué un SSD lo cambia todo</H>
        <P>
          Un SSD no tiene partes móviles: accede a los datos de forma electrónica, muchísimo más rápido.
          El resultado es un arranque de segundos en lugar de minutos y una sensación general de equipo
          nuevo. Es, con diferencia, la mejora con mejor relación entre lo que cuesta y lo que se nota.
        </P>
        <H id="merece-la-pena">¿Merece la pena en mi equipo?</H>
        <P>
          Casi siempre sí, salvo que el ordenador sea muy antiguo o tenga otras averías de peso. Lo mejor
          es una valoración rápida: revisamos el equipo, te decimos con sinceridad si compensa y, si es
          que sí, clonamos tu sistema para que no pierdas nada.
        </P>
      </div>
    ),
  },
  {
    slug: 'cada-cuanto-hacer-copias-de-seguridad',
    title: 'Cada cuánto deberías hacer copias de seguridad (y cómo no olvidarte)',
    excerpt:
      'La mejor copia de seguridad es la que se hace sola. Te explicamos con qué frecuencia conviene y cómo automatizarla para no depender de tu memoria.',
    category: 'Seguridad',
    author: 'VMPZ Informática',
    date: '2026-06-10',
    readingMinutes: 5,
    keywords: ['copias de seguridad', 'backup', 'proteger datos'],
    toc: [
      { id: 'frecuencia', label: 'Con qué frecuencia' },
      { id: 'regla-321', label: 'La regla 3-2-1' },
      { id: 'automatizar', label: 'Automatizarlo todo' },
    ],
    faq: [
      { q: '¿Es suficiente con guardar mis fotos en el móvil?', a: 'El móvil es un punto de partida, pero un solo sitio no es una copia de seguridad. Si se pierde o se rompe, se va todo con él.' },
      { q: '¿La nube es segura para mis datos?', a: 'Una nube seria es muy fiable y protege frente a robos o averías físicas. Lo ideal es combinarla con una copia local.' },
    ],
    content: (
      <div className="space-y-5">
        <P>
          Casi todo el mundo entiende la importancia de las copias de seguridad justo el día que pierde
          algo importante. La buena noticia es que evitarlo es más fácil de lo que parece si lo dejas bien
          montado una sola vez.
        </P>
        <H id="frecuencia">Con qué frecuencia</H>
        <P>
          Depende de cuánto cambian tus datos. Si trabajas a diario con documentos, una copia diaria tiene
          todo el sentido. Para fotos y archivos personales, semanal suele ser suficiente. La regla de oro
          es sencilla: piensa cuánto trabajo estarías dispuesto a perder y esa es tu frecuencia.
        </P>
        <H id="regla-321">La regla 3-2-1</H>
        <P>
          Es el estándar de referencia: tres copias de tus datos, en dos tipos de soporte distintos, y una
          de ellas fuera de casa (por ejemplo, en la nube). Así, ni un fallo de disco, ni un robo, ni un
          susto doméstico se lleva por delante tus recuerdos.
        </P>
        <H id="automatizar">Automatizarlo todo</H>
        <P>
          El punto clave es que no dependa de tu memoria. Configuramos las copias para que se hagan solas
          en segundo plano y probamos la restauración, porque una copia que no se puede recuperar no sirve
          de nada. Una vez montado, te olvidas.
        </P>
      </div>
    ),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));
