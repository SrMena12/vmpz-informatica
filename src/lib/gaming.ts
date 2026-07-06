// =============================================================
//  VMPZ GAMING — EDITA AQUÍ las configuraciones, piezas y precios.
//  Precios ORIENTATIVOS de julio 2026 (IVA y montaje incluidos).
//  ⚠️ RAM, SSD y gráficas están subiendo por la demanda de IA:
//     revisa los precios cada poco y confirma el total antes de comprar.
// =============================================================

export const gamingHero = {
  eyebrow: 'VMPZ Gaming',
  title: 'Montamos tu PC gaming a medida',
  subtitle:
    'Configuraciones equilibradas con piezas actuales, montadas, optimizadas y probadas por un profesional. Tú eliges el nivel; nosotros te lo dejamos listo para jugar.',
};

export type GamingComponent = { cat: string; icon: string; part: string };

export type GamingBuild = {
  slug: string;
  name: string;
  tagline: string;
  resolucion: string;
  uso: string;
  /** Precio "desde", en euros, con montaje incluido. Orientativo. */
  precio: number;
  highlight?: boolean;
  componentes: GamingComponent[];
};

export const gamingBuilds: GamingBuild[] = [
  {
    slug: 'basic',
    name: 'Basic',
    tagline: 'Para empezar a jugar en Full HD',
    resolucion: '1080p',
    uso: 'eSports y juegos actuales en 1080p a buena tasa de FPS.',
    precio: 849,
    componentes: [
      { cat: 'Procesador', icon: 'Cpu', part: 'AMD Ryzen 5 7500F (6 núcleos)' },
      { cat: 'Gráfica', icon: 'MonitorPlay', part: 'NVIDIA RTX 5060 8 GB GDDR7' },
      { cat: 'Placa base', icon: 'CircuitBoard', part: 'B650M (AM5)' },
      { cat: 'Memoria RAM', icon: 'MemoryStick', part: '16 GB DDR5 6000 MHz' },
      { cat: 'Almacenamiento', icon: 'HardDrive', part: 'SSD NVMe 1 TB' },
      { cat: 'Fuente', icon: 'Plug', part: '650 W 80+ Bronze' },
      { cat: 'Caja', icon: 'Box', part: 'Torre ATX con buen flujo de aire' },
    ],
  },
  {
    slug: 'standard',
    name: 'Standard',
    tagline: 'El equilibrio perfecto para 1440p',
    resolucion: '1440p',
    uso: 'Juega en QHD en calidad alta con soltura y margen para el futuro.',
    precio: 1449,
    highlight: true,
    componentes: [
      { cat: 'Procesador', icon: 'Cpu', part: 'AMD Ryzen 7 7700 (8 núcleos)' },
      { cat: 'Gráfica', icon: 'MonitorPlay', part: 'NVIDIA RTX 5070 12 GB GDDR7' },
      { cat: 'Placa base', icon: 'CircuitBoard', part: 'B650 (AM5)' },
      { cat: 'Memoria RAM', icon: 'MemoryStick', part: '32 GB DDR5 6000 MHz' },
      { cat: 'Almacenamiento', icon: 'HardDrive', part: 'SSD NVMe 1 TB Gen4' },
      { cat: 'Fuente', icon: 'Plug', part: '750 W 80+ Gold' },
      { cat: 'Caja', icon: 'Box', part: 'Torre ATX ARGB con buena ventilación' },
    ],
  },
  {
    slug: 'ultra',
    name: 'Ultra',
    tagline: 'Sin límites: 1440p alto y 4K',
    resolucion: '1440p / 4K',
    uso: 'Máxima potencia para 1440p a alta tasa de refresco y 4K con DLSS.',
    precio: 2599,
    componentes: [
      { cat: 'Procesador', icon: 'Cpu', part: 'AMD Ryzen 7 9800X3D (rey del gaming)' },
      { cat: 'Gráfica', icon: 'MonitorPlay', part: 'NVIDIA RTX 5080 16 GB GDDR7' },
      { cat: 'Placa base', icon: 'CircuitBoard', part: 'X670E / B650E (AM5)' },
      { cat: 'Memoria RAM', icon: 'MemoryStick', part: '32 GB DDR5 6000 MHz CL30' },
      { cat: 'Almacenamiento', icon: 'HardDrive', part: 'SSD NVMe 2 TB Gen4' },
      { cat: 'Refrigeración', icon: 'Fan', part: 'Líquida AIO 360 mm' },
      { cat: 'Fuente', icon: 'Plug', part: '850 W 80+ Gold' },
      { cat: 'Caja', icon: 'Box', part: 'Premium con gran flujo de aire' },
    ],
  },
];

/** Lo que va incluido en cualquier montaje. */
export const gamingIncluye: string[] = [
  'Montaje profesional y gestión de cables',
  'Configuración de BIOS (perfil EXPO de RAM y arranque)',
  'Instalación de Windows 11 y todos los drivers',
  'Pruebas de estabilidad y control de temperaturas',
  'Limpieza y revisión final del equipo',
  'Garantía del fabricante en todas las piezas',
];

export const gamingFaq: { q: string; a: string }[] = [
  {
    q: '¿El precio incluye el montaje?',
    a: 'Sí. El precio "desde" incluye el montaje, la configuración de la BIOS, la instalación de Windows 11 con drivers y las pruebas. Recibes un equipo listo para jugar, no una caja de piezas.',
  },
  {
    q: '¿Puedo personalizar los componentes?',
    a: 'Por supuesto. Estas son configuraciones de partida. Ajustamos gráfica, procesador, RAM o almacenamiento a tu presupuesto y a los juegos a los que juegas. Cuéntanos qué buscas y te preparamos un presupuesto a medida.',
  },
  {
    q: '¿Por qué los precios son orientativos?',
    a: 'Porque ahora mismo los precios de la RAM, los SSD y las gráficas están subiendo mucho por la demanda de la IA. Antes de comprar nada te confirmamos el precio final y cerrado.',
  },
  {
    q: '¿Incluye monitor, teclado o ratón?',
    a: 'Por defecto el precio es solo de la torre. Si quieres pantalla y periféricos, te los añadimos al presupuesto sin problema.',
  },
  {
    q: '¿Cómo recibo el equipo?',
    a: 'Te lo montamos, lo probamos y te lo llevamos a domicilio en Toledo y La Sagra, listo para enchufar y jugar.',
  },
  {
    q: '¿Tiene garantía?',
    a: 'Sí. Cada componente mantiene su garantía de fabricante y nosotros respondemos del montaje y la puesta a punto.',
  },
];

export const gamingKeywords: string[] = [
  'montar PC gaming Toledo',
  'PC gaming a medida La Sagra',
  'ordenador gaming Mocejón',
  'montaje de PC gaming Illescas',
  'PC gaming personalizado Toledo',
];
