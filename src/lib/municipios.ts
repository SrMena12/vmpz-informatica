// =============================================================
//  ZONAS DE SERVICIO — EDITA AQUÍ los municipios.
//  Cada uno genera una página: /zonas/<slug>
//  Añadir un municipio nuevo es tan simple como copiar un bloque.
// =============================================================

export type Municipio = {
  slug: string;
  name: string;
  /** Frase corta con el gentilicio o matiz local. */
  intro: string;
  /** Comarca o referencia geográfica. */
  comarca: string;
};

export const municipios: Municipio[] = [
  {
    slug: 'toledo',
    name: 'Toledo',
    comarca: 'Toledo capital',
    intro:
      'Damos servicio informático a domicilio en Toledo capital y sus barrios. Reparación, instalación de SSD, formateo y asesoramiento, sin que tengas que mover tu equipo.',
  },
  {
    slug: 'mocejon',
    name: 'Mocejón',
    comarca: 'La Sagra',
    intro:
      'Somos de aquí. En Mocejón ofrecemos soporte informático cercano y rápido: si algo falla, estamos a un paso para ayudarte en tu casa o negocio.',
  },
  {
    slug: 'illescas',
    name: 'Illescas',
    comarca: 'La Sagra',
    intro:
      'Servicio informático a domicilio en Illescas. Montaje de equipos, eliminación de virus, copias de seguridad y todo lo que tu ordenador necesite, en tu propia casa.',
  },
  {
    slug: 'yuncos',
    name: 'Yuncos',
    comarca: 'La Sagra',
    intro:
      'Atendemos Yuncos y alrededores con soporte informático a domicilio. Sin desplazamientos por tu parte: vamos nosotros y lo dejamos funcionando.',
  },
  {
    slug: 'olias-del-rey',
    name: 'Olías del Rey',
    comarca: 'La Sagra',
    intro:
      'Reparación y mantenimiento de ordenadores en Olías del Rey. Rápido, cercano y con un precio claro antes de empezar.',
  },
  {
    slug: 'bargas',
    name: 'Bargas',
    comarca: 'La Sagra',
    intro:
      'En Bargas nos encargamos de tu informática a domicilio: SSD, formateos, virus, copias de seguridad y asesoramiento honesto.',
  },
  {
    slug: 'magan',
    name: 'Magán',
    comarca: 'La Sagra',
    intro:
      'Soporte informático a domicilio en Magán. Te ayudamos con reparaciones, mejoras y puesta a punto de tus equipos sin complicaciones.',
  },
  {
    slug: 'cabanas-de-la-sagra',
    name: 'Cabañas de la Sagra',
    comarca: 'La Sagra',
    intro:
      'Damos servicio en Cabañas de la Sagra con atención cercana y rápida. Tu ordenador en buenas manos, en tu propia casa.',
  },
];

export function getMunicipio(slug: string): Municipio | undefined {
  return municipios.find((m) => m.slug === slug);
}
