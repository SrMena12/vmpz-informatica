// =============================================================
//  SERVICIOS — EDITA AQUÍ precios, textos, incluidos y FAQs.
//  El "slug" forma la URL: /servicios/<slug>
// =============================================================

export type Servicio = {
  slug: string;
  name: string;
  shortName: string;
  /** Precio en euros. null = "A consultar". */
  price: number | null;
  /** Etiqueta antes del precio (p. ej. "desde"). */
  pricePrefix?: string;
  /** Nombre del icono de lucide-react. */
  icon: string;
  /** Ruta de la imagen del personaje para esta página. */
  image: string;
  tagline: string;
  intro: string;
  includes: string[];
  benefits: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  keywords: string[];
};

export const servicios: Servicio[] = [
  {
    slug: 'instalacion-ssd',
    name: 'Instalación de SSD',
    shortName: 'SSD',
    price: 65,
    pricePrefix: 'desde',
    icon: 'HardDrive',
    image: '/personaje/ssd.png',
    tagline: '¿Tu ordenador tarda 5 minutos en encender?',
    intro:
      'Cambiar el disco duro mecánico por un SSD es la mejora que más se nota en un ordenador. Arranca en segundos, los programas abren al instante y esa sensación de lentitud desaparece. Clonamos tu sistema y tus archivos para que todo siga igual, pero mucho más rápido, sin perder nada.',
    includes: [
      'Instalación del SSD y montaje físico en tu equipo',
      'Clonado del sistema operativo y tus datos (o instalación limpia si lo prefieres)',
      'Optimización del arranque y ajustes de rendimiento',
      'Comprobación de temperaturas y estado del equipo',
      'Recomendación honesta sobre la capacidad que realmente necesitas',
    ],
    benefits: [
      { title: 'Arranque en segundos', text: 'Del botón de encendido al escritorio en menos de 15 segundos.' },
      { title: 'Sin perder nada', text: 'Clonamos tus programas y archivos tal y como los tienes.' },
      { title: 'Alarga la vida útil', text: 'Un equipo lento vuelve a ser útil en lugar de acabar en el cajón.' },
    ],
    faq: [
      { q: '¿Perderé mis archivos y programas al instalar el SSD?', a: 'No. Clonamos tu sistema completo al nuevo disco, así que enciendes y todo está igual que antes, solo que mucho más rápido.' },
      { q: '¿Cuánto tarda la instalación de un SSD?', a: 'En la mayoría de equipos la dejamos lista el mismo día. El clonado depende de la cantidad de datos, pero suele ser cuestión de un par de horas.' },
      { q: '¿El SSD está incluido en el precio?', a: 'El precio corresponde al servicio de instalación. Podemos aportar el SSD o instalar el que compres tú; te asesoramos sobre cuál te conviene según tu presupuesto.' },
    ],
    keywords: ['instalación SSD Toledo', 'cambiar disco duro por SSD', 'poner SSD ordenador Toledo', 'ordenador lento solución'],
  },
  {
    slug: 'montaje-de-equipos',
    name: 'Montaje de equipos',
    shortName: 'Montaje',
    price: 60,
    pricePrefix: 'desde',
    icon: 'Cpu',
    image: '/personaje/montaje.png',
    tagline: 'Tu PC a medida, montado por un profesional',
    intro:
      'Montamos ordenadores a medida para lo que realmente vas a hacer con ellos: ofimática, estudio, gaming o trabajo exigente. Elegimos componentes que encajan entre sí, sin pagar de más por marketing, y lo dejamos montado, probado y listo para usar.',
    includes: [
      'Asesoramiento de componentes según tu uso y presupuesto',
      'Montaje completo y gestión de cableado ordenada',
      'Instalación del sistema operativo y drivers actualizados',
      'Pruebas de estabilidad, temperaturas y rendimiento',
      'Entrega listo para encender y empezar a trabajar',
    ],
    benefits: [
      { title: 'A tu medida', text: 'Cada pieza elegida para tu uso real, ni de menos ni de más.' },
      { title: 'Montaje limpio', text: 'Cableado ordenado y buena refrigeración desde el primer día.' },
      { title: 'Probado de verdad', text: 'Se entrega tras pruebas de estabilidad, no solo "enciende y ya".' },
    ],
    faq: [
      { q: '¿Puedo aportar yo los componentes?', a: 'Sí. Puedes traer las piezas o encargarnos también la compra; en ambos casos te asesoramos para que todo sea compatible.' },
      { q: '¿Montáis PCs para gaming?', a: 'Sí, montamos equipos de gaming, de trabajo y de ofimática. Elegimos los componentes según los juegos o programas que vayas a usar.' },
      { q: '¿El equipo viene con sistema operativo?', a: 'Lo entregamos con el sistema instalado, actualizado y con los drivers al día, listo para usar.' },
    ],
    keywords: ['montaje PC Toledo', 'montar ordenador a medida Toledo', 'PC gaming Toledo', 'montaje ordenadores La Sagra'],
  },
  {
    slug: 'formateo-y-puesta-a-punto',
    name: 'Formateo y puesta a punto',
    shortName: 'Formateo',
    price: 50,
    icon: 'RefreshCw',
    image: '/personaje/hero.png',
    tagline: 'Tu ordenador como el primer día',
    intro:
      'Con el tiempo, cualquier equipo se llena de programas que no usas, arranques innecesarios y archivos temporales que lo ralentizan. Formateamos, reinstalamos el sistema limpio y lo dejamos afinado, protegiendo antes tus datos importantes.',
    includes: [
      'Copia de seguridad de tus archivos antes de formatear',
      'Instalación limpia del sistema operativo',
      'Drivers, actualizaciones y programas esenciales',
      'Optimización de arranque y limpieza de bloatware',
      'Restauración de tus datos ya en el sistema nuevo',
    ],
    benefits: [
      { title: 'Vuelve a volar', text: 'Sin la basura acumulada de años, el equipo responde de nuevo.' },
      { title: 'Datos a salvo', text: 'Guardamos tus archivos antes de tocar nada.' },
      { title: 'Listo para usar', text: 'Te lo devolvemos configurado y con lo esencial instalado.' },
    ],
    faq: [
      { q: '¿Se borran mis fotos y documentos al formatear?', a: 'Hacemos una copia de seguridad de tus archivos antes de formatear y los restauramos al terminar, así que no pierdes nada importante.' },
      { q: '¿Cuánto mejora el rendimiento tras un formateo?', a: 'La mejora es notable en equipos que llevan años sin reinstalarse. Si el disco es mecánico, combinarlo con un SSD multiplica el resultado.' },
      { q: '¿Qué sistema operativo instaláis?', a: 'Normalmente Windows actualizado, pero podemos instalar la versión o el sistema que necesites según tu equipo.' },
    ],
    keywords: ['formatear ordenador Toledo', 'puesta a punto PC Toledo', 'reinstalar Windows Toledo', 'ordenador lento formateo'],
  },
  {
    slug: 'copias-de-seguridad',
    name: 'Copias de seguridad',
    shortName: 'Copias',
    price: 30,
    icon: 'DatabaseBackup',
    image: '/personaje/espaldas.png',
    tagline: 'No esperes a perder tus recuerdos para protegerlos',
    intro:
      'Las fotos, los documentos de trabajo y los recuerdos no tienen precio, y un disco puede fallar sin avisar. Configuramos un sistema de copias de seguridad sencillo y automático para que tus datos estén siempre a salvo, sin que tengas que acordarte de nada.',
    includes: [
      'Análisis de qué datos son importantes para ti',
      'Configuración de copia local, en la nube o ambas',
      'Automatización para que las copias se hagan solas',
      'Prueba de restauración para verificar que funciona',
      'Explicación sencilla de cómo recuperar tus archivos',
    ],
    benefits: [
      { title: 'Automático', text: 'Se configura una vez y trabaja solo, sin que pienses en ello.' },
      { title: 'Recuperable', text: 'Probamos la restauración para asegurar que sirve cuando haga falta.' },
      { title: 'Tranquilidad', text: 'Si algo falla, tus recuerdos y tu trabajo siguen ahí.' },
    ],
    faq: [
      { q: '¿Cada cuánto debería hacer copias de seguridad?', a: 'Lo ideal es que sean automáticas y frecuentes. Configuramos la periodicidad según cómo uses el equipo, para que no dependa de tu memoria.' },
      { q: '¿Mejor copia local o en la nube?', a: 'La combinación de ambas es lo más seguro: una copia local rápida de recuperar y otra en la nube que resiste robos, incendios o averías.' },
      { q: '¿Sirve para móviles además del ordenador?', a: 'Sí, podemos incluir la copia de fotos y datos del móvil dentro del mismo plan.' },
    ],
    keywords: ['copias de seguridad Toledo', 'backup datos Toledo', 'recuperar archivos Toledo', 'copia de seguridad automática'],
  },
  {
    slug: 'limpieza-de-polvo',
    name: 'Limpieza de polvo',
    shortName: 'Limpieza',
    price: 30,
    icon: 'Wind',
    image: '/personaje/montaje.png',
    tagline: 'Menos temperatura, menos ruido, más vida',
    intro:
      'El polvo acumulado hace que el ventilador suene como un secador, sube las temperaturas y provoca apagones repentinos. Una limpieza interna a fondo y el cambio de pasta térmica devuelven el silencio y protegen los componentes.',
    includes: [
      'Limpieza interna completa de polvo y suciedad',
      'Cambio de pasta térmica del procesador',
      'Revisión y limpieza de ventiladores y disipadores',
      'Comprobación de temperaturas antes y después',
      'Consejos para mantenerlo limpio más tiempo',
    ],
    benefits: [
      { title: 'Más silencioso', text: 'Adiós al ruido de turbina: los ventiladores dejan de forzar.' },
      { title: 'Más fresco', text: 'Baja la temperatura y con ella los cuelgues y apagones.' },
      { title: 'Más duradero', text: 'El calor es el peor enemigo de los componentes; lo controlamos.' },
    ],
    faq: [
      { q: '¿Cada cuánto conviene limpiar el ordenador por dentro?', a: 'Como orientación, una vez al año en equipos de sobremesa, y con más frecuencia si hay mascotas o mucho polvo en el ambiente.' },
      { q: '¿Sirve también para portátiles?', a: 'Sí. En portátiles la limpieza y el cambio de pasta térmica son especialmente importantes porque se calientan más.' },
      { q: '¿Puede la limpieza solucionar apagones por temperatura?', a: 'Con frecuencia sí. Si el equipo se apaga por calor, la limpieza y la pasta térmica nueva suelen resolverlo.' },
    ],
    keywords: ['limpieza ordenador Toledo', 'cambio pasta térmica Toledo', 'ordenador hace ruido', 'ordenador se apaga solo calor'],
  },
  {
    slug: 'eliminacion-de-virus',
    name: 'Eliminación de virus',
    shortName: 'Virus',
    price: null,
    icon: 'ShieldCheck',
    image: '/personaje/contacto.png',
    tagline: '¿Ventanas raras, todo lento o publicidad sin parar?',
    intro:
      'Los virus y el malware ralentizan el equipo, roban datos y llenan la pantalla de publicidad. Eliminamos la amenaza, limpiamos el sistema y lo dejamos protegido, explicándote cómo evitar volver a caer. El precio se ajusta a la gravedad del caso: por eso lo valoramos primero.',
    includes: [
      'Diagnóstico del tipo de infección',
      'Eliminación de virus, malware y publicidad no deseada',
      'Revisión de arranque y procesos sospechosos',
      'Configuración de protección para el futuro',
      'Consejos prácticos para no volver a infectarte',
    ],
    benefits: [
      { title: 'Diagnóstico primero', text: 'Valoramos el caso antes de darte un precio justo y transparente.' },
      { title: 'Limpieza real', text: 'No solo "un antivirus": revisamos arranque y procesos a fondo.' },
      { title: 'Protegido después', text: 'Te dejamos el equipo asegurado y con hábitos claros.' },
    ],
    faq: [
      { q: '¿Por qué el precio es "a consultar"?', a: 'Porque no todas las infecciones son iguales. Un adware se quita rápido; un ransomware es otra historia. Valoramos tu caso concreto y te damos un precio justo antes de empezar.' },
      { q: '¿Voy a perder mis archivos?', a: 'El objetivo es limpiar el equipo conservando tus datos. Si la infección es grave, valoramos hacer copia de seguridad antes de actuar.' },
      { q: '¿Cómo sé si mi ordenador tiene virus?', a: 'Señales típicas: va muy lento, aparecen ventanas y publicidad de la nada, se abren páginas solas o el navegador cambia sin permiso. Ante la duda, lo revisamos.' },
    ],
    keywords: ['eliminar virus ordenador Toledo', 'quitar malware Toledo', 'ordenador con publicidad', 'limpiar virus PC Toledo'],
  },
  {
    slug: 'asesoramiento-tecnologico',
    name: 'Asesoramiento tecnológico',
    shortName: 'Asesoramiento',
    price: null,
    icon: 'Lightbulb',
    image: '/personaje/asesoramiento.png',
    tagline: 'Te ayudamos a tomar las mejores decisiones para tu tecnología',
    intro:
      'Antes de gastar en un equipo, un programa o una solución, merece la pena una opinión honesta. Te asesoramos sin tecnicismos ni ventas forzadas: equipos y componentes, seguridad y copias, software y licencias, redes y conectividad. El objetivo es que ahorres tiempo y dinero.',
    includes: [
      'Análisis de tus necesidades reales, sin sobredimensionar',
      'Recomendación de equipos y componentes',
      'Consejo sobre software, licencias y seguridad',
      'Mejoras de red y conectividad en casa u oficina',
      'Presupuesto claro antes de decidir nada',
    ],
    benefits: [
      { title: 'Sin compromiso', text: 'Consúltanos y decide con la información sobre la mesa.' },
      { title: 'Honesto', text: 'Te decimos lo que necesitas, no lo que más caro sale.' },
      { title: 'Cercano', text: 'Explicaciones en cristiano, sin tecnicismos innecesarios.' },
    ],
    faq: [
      { q: '¿El asesoramiento tiene coste?', a: 'La primera consulta es sin compromiso. Si el asesoramiento requiere un estudio a fondo, te lo decimos antes con total transparencia.' },
      { q: '¿Me vais a intentar vender lo más caro?', a: 'No. Nuestro trabajo es que aciertes con tu presupuesto. A veces la mejor recomendación es no comprar todavía.' },
      { q: '¿Asesoráis también a pequeñas empresas y autónomos?', a: 'Sí, ayudamos tanto a particulares como a autónomos y pequeñas oficinas con sus equipos, redes y seguridad.' },
    ],
    keywords: ['asesoramiento informático Toledo', 'consultor informático Toledo', 'ayuda comprar ordenador Toledo', 'soporte informático La Sagra'],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

export function formatPrecio(s: Pick<Servicio, 'price' | 'pricePrefix'>): string {
  if (s.price === null) return 'A consultar';
  return `${s.pricePrefix ? s.pricePrefix + ' ' : ''}${s.price}€`;
}
