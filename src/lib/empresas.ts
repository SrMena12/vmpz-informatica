// =============================================================
//  SECCIÓN EMPRESAS — EDITA AQUÍ los textos, planes y precios.
//  Alimenta la página /empresas (mantenimiento informático B2B).
//  Los PRECIOS de los planes son ORIENTATIVOS: ajústalos a los tuyos.
// =============================================================

export const empresasHero = {
  eyebrow: 'Para empresas y autónomos',
  title: 'Tu departamento de informática, sin contratar a nadie',
  subtitle:
    'Mantenimiento informático para pymes, comercios y autónomos en Toledo y La Sagra. Cuota fija, todo bajo control y alguien de la zona que responde cuando lo necesitas.',
};

/** Los dolores que resuelve el servicio (el "¿te suena?"). */
export const dolores: string[] = [
  'No tienes tiempo para ocuparte de los ordenadores y siempre lo dejas para después.',
  'Si un equipo falla, tu negocio se para y pierdes horas de facturación.',
  'No sabes si tus copias de seguridad funcionan de verdad… hasta que las necesitas.',
  'Nadie revisa la seguridad ni las actualizaciones de forma regular.',
];

/** Qué incluye el servicio de mantenimiento. */
export const incluye: { icon: string; title: string; text: string }[] = [
  {
    icon: 'RefreshCw',
    title: 'Mantenimiento preventivo',
    text: 'Revisamos tus equipos con regularidad para que los problemas no te pillen por sorpresa.',
  },
  {
    icon: 'DatabaseBackup',
    title: 'Copias de seguridad gestionadas',
    text: 'Configuramos, automatizamos y verificamos las copias. Si algo falla, nos enteramos nosotros.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Seguridad y protección',
    text: 'Antivirus, actualizaciones y buenas prácticas para proteger tus datos y los de tus clientes.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Soporte prioritario',
    text: 'Cuando algo falla, te atendemos antes: remoto al momento o en persona si hace falta.',
  },
  {
    icon: 'Laptop',
    title: 'Gestión de equipos',
    text: 'Altas y bajas de empleados, configuración de equipos nuevos y control del inventario.',
  },
  {
    icon: 'Wifi',
    title: 'Redes y conectividad',
    text: 'Wifi estable, red ordenada y conexión fiable en toda la oficina.',
  },
];

export type PlanEmpresa = {
  name: string;
  /** Precio mensual en euros. null = "A medida". */
  price: number | null;
  ideal: string;
  features: string[];
  /** Marca el plan destacado (el del medio). */
  highlight?: boolean;
};

/** PRECIOS ORIENTATIVOS — ajústalos a tu tarifa real. */
export const planes: PlanEmpresa[] = [
  {
    name: 'Esencial',
    price: 49,
    ideal: 'Autónomos y oficinas de 1–3 equipos',
    features: [
      'Mantenimiento preventivo trimestral',
      'Copias de seguridad configuradas y verificadas',
      'Antivirus y actualizaciones al día',
      'Soporte por WhatsApp y teléfono',
    ],
  },
  {
    name: 'Negocio',
    price: 99,
    ideal: 'Pymes y comercios de 4–8 equipos',
    highlight: true,
    features: [
      'Todo lo del plan Esencial',
      'Visita de mantenimiento mensual',
      'Copias monitorizadas con aviso si fallan',
      'Soporte prioritario y asistencia remota',
      'Gestión de altas y bajas de empleados',
    ],
  },
  {
    name: 'A medida',
    price: null,
    ideal: 'Más equipos, varias sedes o necesidades específicas',
    features: [
      'Plan diseñado para tu empresa',
      'Redes, servidores y conectividad',
      'Inventario y control de equipos',
      'Asesoramiento tecnológico continuo',
    ],
  },
];

/** Motivos de confianza para el B2B. */
export const razones: { title: string; text: string }[] = [
  {
    title: 'Experiencia real en sistemas',
    text: 'No es un hobby: administro sistemas en entorno profesional. Tus equipos y tus datos, en manos que saben lo que hacen.',
  },
  {
    title: 'Precio fijo, sin sorpresas',
    text: 'Una cuota mensual clara y cerrada. Sabes lo que pagas y lo que incluye desde el primer día.',
  },
  {
    title: 'De la zona, no un call center',
    text: 'Estamos aquí al lado, en La Sagra. Cuando nos necesitas, respondemos rápido y vamos en persona si hace falta.',
  },
  {
    title: 'Con tus datos en regla',
    text: 'Te ayudamos con lo esencial de protección de datos: copias seguras, control de accesos y buenas prácticas.',
  },
];

/** Sectores a los que se dirige (útil también para SEO). */
export const sectores: string[] = [
  'Gestorías y asesorías',
  'Clínicas dentales y fisioterapia',
  'Despachos de abogados',
  'Inmobiliarias',
  'Comercios con TPV',
  'Talleres y autoescuelas',
];

export const empresasFaq: { q: string; a: string }[] = [
  {
    q: '¿Qué incluye un contrato de mantenimiento informático?',
    a: 'Mantenimiento preventivo de tus equipos, copias de seguridad gestionadas y verificadas, seguridad y actualizaciones, soporte prioritario y gestión de altas y bajas de empleados. Lo ajustamos al tamaño y las necesidades de tu negocio.',
  },
  {
    q: '¿Tengo que tener muchos ordenadores para que me interese?',
    a: 'No. Desde un autónomo con un par de equipos hasta una oficina de varios puestos. El plan Esencial está pensado precisamente para negocios pequeños que no quieren complicarse.',
  },
  {
    q: '¿Y si tengo una urgencia fuera de la visita programada?',
    a: 'Para eso está el soporte prioritario: te atendemos antes que a una incidencia suelta, primero en remoto para resolver cuanto antes y, si hace falta, con una visita.',
  },
  {
    q: '¿Podéis ayudarnos con la protección de datos (RGPD)?',
    a: 'Sí, con la parte técnica: copias de seguridad seguras, control de accesos, contraseñas y buenas prácticas para proteger la información de tu empresa y de tus clientes.',
  },
  {
    q: '¿Trabajáis con factura?',
    a: 'Sí. Los servicios a empresas se prestan con factura y con un acuerdo de servicio claro, para que lo tengas todo en regla.',
  },
  {
    q: '¿Dais servicio fuera de Mocejón?',
    a: 'Sí, en Toledo y toda La Sagra: Illescas, Yuncos, Olías del Rey, Bargas, Magán, Cabañas de la Sagra y alrededores.',
  },
];

/** Servicio de renovación / suministro de equipos de oficina. */
export const renovacion = {
  eyebrow: 'Renovación de equipos',
  title: 'Renovamos los equipos de tu oficina',
  text: 'Ordenadores lentos frenan a tu equipo. Nos encargamos de todo: te asesoramos, conseguimos los equipos, los dejamos configurados y listos para trabajar, y migramos tus datos del equipo antiguo. Tú solo enciendes y sigues trabajando.',
  opciones: [
    {
      icon: 'Laptop',
      title: 'Equipos nuevos a medida',
      text: 'Portátiles y sobremesa elegidos para lo que hace tu negocio, ni de más ni de menos. Instalados, actualizados y listos.',
    },
    {
      icon: 'RefreshCw',
      title: 'Reacondicionados de empresa',
      text: 'Equipos profesionales renovados y garantizados: gran rendimiento por bastante menos y con una opción más sostenible.',
    },
    {
      icon: 'DatabaseBackup',
      title: 'Migración y puesta a punto',
      text: 'Pasamos tus datos, cuentas y programas del equipo viejo al nuevo, sin perder nada y sin parar tu actividad.',
    },
  ],
};

export const empresasKeywords: string[] = [
  'mantenimiento informático empresas Toledo',
  'informático para autónomos La Sagra',
  'soporte informático pymes Toledo',
  'mantenimiento equipos oficina Illescas',
  'informático empresas Mocejón',
];
