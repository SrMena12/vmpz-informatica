import type { ReactNode } from 'react';
import Link from 'next/link';

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
  {
    slug: 'windows-10-fin-de-soporte-que-hacer',
    title: 'Windows 10 se quedó sin soporte: qué hacer con tu ordenador',
    excerpt:
      'Desde octubre de 2025 Windows 10 ya no recibe actualizaciones de seguridad. Si tu equipo o el de tu negocio sigue con Windows 10, esto es lo que te conviene hacer.',
    category: 'Actualidad',
    author: 'VMPZ Informática',
    date: '2026-07-01',
    readingMinutes: 5,
    keywords: [
      'fin de soporte Windows 10',
      'actualizar a Windows 11 Toledo',
      'instalar Windows 11 La Sagra',
      'ordenador sin soporte',
      'migrar Windows 11 pyme',
    ],
    toc: [
      { id: 'que-paso', label: 'Qué ha pasado' },
      { id: 'riesgos', label: 'Por qué es un problema' },
      { id: 'opciones', label: 'Tus opciones' },
      { id: 'empresas', label: 'Si tienes un negocio' },
    ],
    faq: [
      { q: '¿Mi ordenador dejará de funcionar?', a: 'No. Windows 10 sigue arrancando y ejecutando tus programas. Lo que ya no recibe son parches de seguridad, así que con el tiempo queda más expuesto a virus y a incompatibilidades.' },
      { q: '¿Pasar a Windows 11 es gratis?', a: 'Si tu equipo cumple los requisitos, la actualización a Windows 11 es gratuita desde Windows Update. El problema suele ser que muchos equipos de hace unos años no son compatibles.' },
      { q: '¿Y si mi equipo no es compatible con Windows 11?', a: 'Depende del caso: a veces basta con una mejora de hardware, otras compensa más un equipo nuevo o reacondicionado. Te lo valoramos con sinceridad antes de que gastes de más.' },
      { q: '¿Esto afecta a mi negocio?', a: 'Sí. Un equipo sin parches de seguridad es un riesgo para tus datos y los de tus clientes. En negocios conviene planificar la migración con tiempo y sin parar la actividad.' },
    ],
    content: (
      <div className="space-y-5">
        <P>
          Si tienes un ordenador con unos años, es muy probable que siga usando Windows 10. Y desde hace
          unos meses eso ha cambiado de golpe: Microsoft dejó de darle soporte. Te explicamos qué significa
          de verdad y qué te conviene hacer, seas particular en Mocejón o tengas un negocio en Illescas,
          Yuncos o Toledo.
        </P>
        <H id="que-paso">Qué ha pasado</H>
        <P>
          El 14 de octubre de 2025 Windows 10 llegó al fin de su soporte oficial. A partir de esa fecha,
          Microsoft dejó de publicar actualizaciones de seguridad y correcciones para este sistema. Ojo con
          el malentendido más habitual: tu ordenador no se apaga ni deja de funcionar. Sigue encendiendo y
          abriendo tus programas de siempre. Lo que desaparece son los parches que tapan los agujeros de
          seguridad según van apareciendo.
        </P>
        <H id="riesgos">Por qué es un problema</H>
        <P>
          Un sistema sin parches es un sistema que se va quedando desprotegido. Cada mes que pasa aparecen
          nuevas vulnerabilidades que en Windows 10 ya nadie va a corregir, lo que lo convierte en un blanco
          más fácil para virus y ataques. A eso se suma que, con el tiempo, navegadores, drivers y programas
          nuevos irán dejando de ser compatibles. No es una urgencia de hoy para mañana, pero sí algo que no
          conviene dejar aparcado.
        </P>
        <H id="opciones">Tus opciones</H>
        <P>
          Básicamente tienes tres caminos. El primero, si tu equipo cumple los requisitos, es actualizar
          gratis a Windows 11: es la opción más lógica y la que recomendamos. El segundo, si necesitas ganar
          tiempo, es el programa de actualizaciones de seguridad extendidas (ESU); en Europa los particulares
          pueden conseguir un año más de parches críticos vinculando una cuenta de Microsoft, pero es solo un
          parche temporal, no una solución. Y el tercero, cuando el equipo ya va justo o no es compatible, es
          renovarlo por uno con Windows 11, ya sea nuevo o reacondicionado.
        </P>
        <P>
          En VMPZ te lo dejamos resuelto: comprobamos si tu equipo es compatible, y si lo es, nos encargamos
          del{' '}
          <Link href="/servicios/formateo-y-puesta-a-punto" className="text-electric2 hover:underline">
            formateo y la puesta a punto con Windows 11
          </Link>
          , incluida la copia de tus datos para que no pierdas nada. Y si no compensa, te asesoramos sin
          presión sobre qué equipo te encaja de verdad.
        </P>
        <H id="empresas">Si tienes un negocio</H>
        <P>
          En una empresa el tema es más serio: un equipo sin soporte es un riesgo de seguridad y, según el
          sector, hasta de cumplimiento. Lo suyo es hacer un inventario de qué equipos siguen con Windows 10,
          comprobar que tus programas funcionarán en Windows 11 y migrar por fases, sin parar la actividad.
          Es justo el tipo de cosa que cubrimos con el{' '}
          <Link href="/empresas" className="text-electric2 hover:underline">
            mantenimiento y la renovación de equipos para empresas
          </Link>
          . Si tienes un negocio en Toledo o La Sagra y no sabes por dónde empezar, te hacemos una revisión
          sin compromiso.
        </P>
      </div>
    ),
  },
  {
    slug: 'por-que-suben-los-precios-de-los-ordenadores-2026',
    title: 'Por qué están subiendo los precios de los ordenadores en 2026',
    excerpt:
      'La demanda de hardware para inteligencia artificial ha disparado el precio de la RAM, los SSD y las tarjetas gráficas. Te explicamos qué pasa y qué hacer si necesitas un equipo.',
    category: 'Actualidad',
    author: 'VMPZ Informática',
    date: '2026-07-03',
    readingMinutes: 4,
    keywords: [
      'precio ordenadores 2026',
      'sube precio RAM SSD',
      'montar PC Toledo',
      'comprar ordenador La Sagra',
      'precio tarjetas gráficas 2026',
    ],
    toc: [
      { id: 'que-pasa', label: 'Qué está pasando' },
      { id: 'que-sube', label: 'Qué componentes suben' },
      { id: 'que-hacer', label: 'Qué te conviene hacer' },
    ],
    faq: [
      { q: '¿Es mal momento para comprar un ordenador?', a: 'Si lo necesitas ya, no esperes a que baje: nadie sabe cuándo pasará y trabajar con un equipo que va mal también cuesta dinero. Si no te corre prisa, puedes esperar y vigilar los precios.' },
      { q: '¿Merece la pena un equipo reacondicionado?', a: 'Ahora mismo, más que nunca. Un equipo profesional reacondicionado te da muy buen rendimiento por bastante menos, y esquiva parte de la subida de las piezas nuevas.' },
      { q: '¿Me ayudáis a elegir sin gastar de más?', a: 'Para eso estamos. Te decimos qué necesitas de verdad para lo que vas a hacer, sin venderte piezas de más ni de menos.' },
    ],
    content: (
      <div className="space-y-5">
        <P>
          Si últimamente has mirado precios de ordenadores o de piezas y te ha dado un vuelco, no eres el
          único. Los precios están subiendo, y hay un motivo concreto detrás. Te lo contamos claro y, sobre
          todo, te decimos qué hacer si necesitas un equipo estos meses.
        </P>
        <H id="que-pasa">Qué está pasando</H>
        <P>
          El boom de la inteligencia artificial ha disparado la demanda mundial de un tipo de hardware que,
          resulta, es el mismo que llevan nuestros ordenadores. Los grandes centros de datos están comprando
          memoria y almacenamiento a un ritmo enorme, y cuando la demanda se dispara y la fabricación no da
          abasto, los precios suben para todos. Es pura oferta y demanda, pero nos toca de lleno.
        </P>
        <H id="que-sube">Qué componentes suben</H>
        <P>
          Lo que más se está notando es la memoria RAM y los discos SSD, que llevan meses encareciéndose, y
          también las tarjetas gráficas, sobre todo las de más capacidad. Son, precisamente, tres de las
          piezas clave tanto de un equipo de trabajo como de un PC para jugar. Por eso verás que montar o
          renovar un ordenador cuesta hoy más que hace un año, y todo apunta a que la cosa seguirá tensa una
          temporada.
        </P>
        <H id="que-hacer">Qué te conviene hacer</H>
        <P>
          La regla sencilla: si necesitas el equipo ya, cómpralo ya. Esperar a que bajen los precios es una
          apuesta incierta, y mientras tanto trabajar con un ordenador lento también te cuesta tiempo y
          dinero. Si no te corre prisa, puedes esperar y vigilar. En cualquier caso, hay dos formas de suavizar
          el golpe: no pasarte de potencia (comprar lo que de verdad necesitas para lo que haces) y considerar
          equipos reacondicionados de calidad, que ahora están más interesantes que nunca.
        </P>
        <P>
          Si estás pensando en un equipo, en VMPZ te ayudamos a acertar: te damos{' '}
          <Link href="/servicios/asesoramiento-tecnologico" className="text-electric2 hover:underline">
            asesoramiento sin compromiso
          </Link>{' '}
          para elegir bien, y si buscas un PC para jugar te preparamos un{' '}
          <Link href="/gaming" className="text-electric2 hover:underline">
            montaje a medida
          </Link>{' '}
          ajustado a tu presupuesto y con el precio confirmado antes de comprar nada.
        </P>
      </div>
    ),
  },
  {
    slug: 'ciberseguridad-para-pymes-y-autonomos',
    title: 'Ciberseguridad para pymes y autónomos: 5 fallos que se pagan caro',
    excerpt:
      'La mayoría de los ataques a pequeños negocios no son sofisticados: aprovechan descuidos básicos. Estos son los cinco fallos más comunes y cómo evitarlos sin complicarte.',
    category: 'Seguridad',
    author: 'VMPZ Informática',
    date: '2026-07-05',
    readingMinutes: 5,
    keywords: [
      'ciberseguridad pymes Toledo',
      'proteger negocio informática La Sagra',
      'copias de seguridad empresa',
      'seguridad autónomos',
      'evitar ataques informáticos negocio',
    ],
    toc: [
      { id: 'objetivo', label: 'Por qué van a por los pequeños' },
      { id: 'fallos', label: 'Los 5 fallos más comunes' },
      { id: 'proteger', label: 'Cómo protegerte sin agobios' },
    ],
    faq: [
      { q: '¿Un negocio pequeño es objetivo de verdad?', a: 'Sí, y cada vez más. Precisamente porque los pequeños suelen estar menos protegidos, son un blanco fácil. La mayoría de ataques no son dirigidos: son automáticos y caen sobre quien tiene la puerta abierta.' },
      { q: '¿No basta con tener un antivirus?', a: 'Ayuda, pero no es suficiente. La mayoría de los sustos entran por un correo engañoso o una contraseña débil, no por un virus clásico. Hace falta un poco de todo: copias, actualizaciones, contraseñas y sentido común.' },
      { q: '¿Vosotros me lo gestionáis?', a: 'Sí. Con el mantenimiento para empresas nos encargamos de las copias, la seguridad y las actualizaciones para que tú no tengas que estar pendiente.' },
    ],
    content: (
      <div className="space-y-5">
        <P>
          Cuando se habla de ciberseguridad, mucha gente piensa en grandes empresas y hackers de película.
          La realidad es más aburrida y más cercana: la mayoría de los sustos en pymes y autónomos vienen de
          descuidos básicos que se podrían haber evitado. Si tienes un negocio en Toledo o La Sagra, estos
          son los cinco fallos que vemos una y otra vez.
        </P>
        <H id="objetivo">Por qué van a por los pequeños</H>
        <P>
          Casi ningún ataque a un negocio pequeño es personal. Son campañas automáticas que lanzan miles de
          intentos y se cuelan por donde encuentran hueco. Y el hueco suele estar en el pequeño, que va con
          menos protección que una gran empresa con su departamento de informática. La buena noticia: como
          casi todo son fallos básicos, con poco esfuerzo bien hecho subes muchísimo tu nivel de protección.
        </P>
        <H id="fallos">Los 5 fallos más comunes</H>
        <P>
          Uno, no tener copias de seguridad de verdad: el día que se rompe un disco o entra un virus que
          cifra los archivos, sin copia se pierde todo. Dos, contraseñas débiles o repetidas en todos los
          sitios, de forma que si roban una, caen todas. Tres, equipos y programas sin actualizar, que dejan
          agujeros conocidos abiertos de par en par. Cuatro, caer en correos engañosos (phishing) que imitan
          a un banco o a un proveedor para robar datos o colar un archivo malicioso. Y cinco, no tener ningún
          plan para cuando algo falle: improvisar con el negocio parado es la peor forma de perder tiempo y
          dinero.
        </P>
        <H id="proteger">Cómo protegerte sin agobios</H>
        <P>
          No hace falta convertirte en experto ni gastar una fortuna. Con copias de seguridad automáticas y
          comprobadas, contraseñas fuertes (y a ser posible verificación en dos pasos), los equipos al día,
          un poco de formación para reconocer los correos raros y un plan claro de qué hacer si algo pasa,
          cubres la inmensa mayoría de los riesgos reales.
        </P>
        <P>
          Y si no quieres estar pendiente de todo esto, es exactamente de lo que nos encargamos con el{' '}
          <Link href="/empresas" className="text-electric2 hover:underline">
            mantenimiento informático para empresas
          </Link>
          : copias, seguridad y actualizaciones bajo control, con una cuota fija y alguien de la zona que
          responde cuando lo necesitas.
        </P>
      </div>
    ),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));
