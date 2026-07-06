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
  /** Referencia local única (posición, río, pueblos vecinos): da contenido propio a cada página y evita textos calcados que Google penaliza. */
  local: string;
};

export const municipios: Municipio[] = [
  {
    slug: 'toledo',
    name: 'Toledo',
    comarca: 'Toledo capital',
    intro:
      'Damos servicio informático a domicilio en Toledo capital y sus barrios. Reparación, instalación de SSD, formateo y asesoramiento, sin que tengas que mover tu equipo.',
    local:
      'Llegamos a todo Toledo: desde el casco histórico hasta Santa Bárbara, Buenavista, Azucaica o el Polígono (Santa María de Benquerencia).',
  },
  {
    slug: 'mocejon',
    name: 'Mocejón',
    comarca: 'La Sagra',
    intro:
      'Somos de aquí. En Mocejón ofrecemos soporte informático cercano y rápido: si algo falla, estamos a un paso para ayudarte en tu casa o negocio.',
    local:
      'Mocejón es nuestra base, a orillas del Tajo. Al estar aquí mismo, solemos ser los que antes llegamos, y también atendemos los vecinos Olías del Rey, Magán y Villaseca de la Sagra.',
  },
  {
    slug: 'illescas',
    name: 'Illescas',
    comarca: 'La Sagra',
    intro:
      'Servicio informático a domicilio en Illescas. Montaje de equipos, eliminación de virus, copias de seguridad y todo lo que tu ordenador necesite, en tu propia casa.',
    local:
      'Illescas es uno de los municipios más grandes de La Sagra, a medio camino entre Toledo y Madrid. Damos servicio en todo el municipio y en los cercanos Yuncos, Ugena y Numancia de la Sagra.',
  },
  {
    slug: 'yuncos',
    name: 'Yuncos',
    comarca: 'La Sagra',
    intro:
      'Atendemos Yuncos y alrededores con soporte informático a domicilio. Sin desplazamientos por tu parte: vamos nosotros y lo dejamos funcionando.',
    local:
      'Yuncos está en pleno corazón de La Sagra, junto a Illescas. Desde aquí nos movemos con facilidad también a Numancia de la Sagra, Cedillo del Condado y Pantoja.',
  },
  {
    slug: 'olias-del-rey',
    name: 'Olías del Rey',
    comarca: 'La Sagra',
    intro:
      'Reparación y mantenimiento de ordenadores en Olías del Rey. Rápido, cercano y con un precio claro antes de empezar.',
    local:
      'Olías del Rey está a las puertas de Toledo, junto a la A-42, así que llegamos en un momento. También atendemos los vecinos Bargas, Cabañas de la Sagra y Magán.',
  },
  {
    slug: 'bargas',
    name: 'Bargas',
    comarca: 'La Sagra',
    intro:
      'En Bargas nos encargamos de tu informática a domicilio: SSD, formateos, virus, copias de seguridad y asesoramiento honesto.',
    local:
      'Bargas está pegada a Toledo capital, muy bien comunicada con nuestra zona. Damos servicio en todo el municipio y en los cercanos Olías del Rey y Yunclillos.',
  },
  {
    slug: 'magan',
    name: 'Magán',
    comarca: 'La Sagra',
    intro:
      'Soporte informático a domicilio en Magán. Te ayudamos con reparaciones, mejoras y puesta a punto de tus equipos sin complicaciones.',
    local:
      'Magán queda muy cerca de nuestra base en Mocejón, entre Olías del Rey y Cabañas de la Sagra, así que la atención es rápida y de tú a tú.',
  },
  {
    slug: 'cabanas-de-la-sagra',
    name: 'Cabañas de la Sagra',
    comarca: 'La Sagra',
    intro:
      'Damos servicio en Cabañas de la Sagra con atención cercana y rápida. Tu ordenador en buenas manos, en tu propia casa.',
    local:
      'Cabañas de la Sagra está junto a Olías del Rey y Magán, dentro de nuestra ruta habitual por la comarca, por lo que coordinamos la visita sin esperas largas.',
  },
  {
    slug: 'numancia-de-la-sagra',
    name: 'Numancia de la Sagra',
    comarca: 'La Sagra',
    intro:
      'Servicio informático a domicilio en Numancia de la Sagra. Reparamos, mejoramos y ponemos a punto tu equipo sin que salgas de casa.',
    local:
      'Numancia de la Sagra está junto a Yuncos y Pantoja, muy cerca de Illescas. Es zona que recorremos a menudo, así que llegamos pronto.',
  },
  {
    slug: 'cobeja',
    name: 'Cobeja',
    comarca: 'La Sagra',
    intro:
      'En Cobeja te ayudamos con tu informática a domicilio: instalación de SSD, formateos, virus y copias de seguridad, con un precio claro desde el principio.',
    local:
      'Cobeja es un municipio pequeño y tranquilo de La Sagra, junto a Villaluenga de la Sagra y Alameda de la Sagra, donde damos ese trato cercano de pueblo.',
  },
  {
    slug: 'villaluenga-de-la-sagra',
    name: 'Villaluenga de la Sagra',
    comarca: 'La Sagra',
    intro:
      'Soporte informático a domicilio en Villaluenga de la Sagra. Vamos a tu casa o negocio y lo dejamos todo funcionando.',
    local:
      'Villaluenga de la Sagra está entre Recas, Cobeja y Cedillo del Condado. Cubrimos todo el municipio y sus alrededores sin que tengas que moverte.',
  },
  {
    slug: 'recas',
    name: 'Recas',
    comarca: 'La Sagra',
    intro:
      'Reparación y mantenimiento de ordenadores en Recas. Atención rápida, cercana y sin sorpresas en el precio.',
    local:
      'Recas se sitúa en el oeste de La Sagra, junto a Villaluenga de la Sagra, Lominchar y Yunclillos, zona que atendemos con normalidad a domicilio.',
  },
  {
    slug: 'pantoja',
    name: 'Pantoja',
    comarca: 'La Sagra',
    intro:
      'Servicio informático a domicilio en Pantoja. Te ayudamos con reparaciones, mejoras y copias de seguridad en tu propia casa o negocio.',
    local:
      'Pantoja está junto a Yuncos, Numancia de la Sagra y Alameda de la Sagra, dentro de nuestra ruta por el corazón de La Sagra.',
  },
  {
    slug: 'anover-de-tajo',
    name: 'Añover de Tajo',
    comarca: 'La Sagra',
    intro:
      'En Añover de Tajo nos encargamos de tu informática a domicilio: SSD, formateos, virus, copias y asesoramiento honesto.',
    local:
      'Añover de Tajo está a orillas del Tajo, junto a Villaseca de la Sagra y Borox, cerca de nuestra base, por lo que la visita se coordina rápido.',
  },
  {
    slug: 'villaseca-de-la-sagra',
    name: 'Villaseca de la Sagra',
    comarca: 'La Sagra',
    intro:
      'Soporte informático a domicilio en Villaseca de la Sagra. Vamos nosotros, sin que tengas que mover el equipo, y con precio claro antes de empezar.',
    local:
      'Villaseca de la Sagra está a orillas del Tajo, muy cerca de nuestra base en Mocejón y de Añover de Tajo, así que somos de los que antes llegamos.',
  },
];

export function getMunicipio(slug: string): Municipio | undefined {
  return municipios.find((m) => m.slug === slug);
}

/**
 * FAQ localizada por municipio. Da profundidad de contenido (evita páginas
 * "doorway" casi vacías) y genera resultados enriquecidos (FAQPage) en Google.
 */
export function zonaFaq(m: Municipio): { q: string; a: string }[] {
  return [
    {
      q: `¿Vais a domicilio en ${m.name}?`,
      a: `Sí. Vamos a tu casa o negocio en ${m.name} y alrededores con todo lo necesario, así no tienes que mover el equipo ni esperar en una tienda.`,
    },
    {
      q: `¿Cuánto tardáis en atender en ${m.name}?`,
      a: `Somos de la zona (${m.comarca}), así que coordinamos la visita cuanto antes. Muchas reparaciones habituales se resuelven el mismo día.`,
    },
    {
      q: `¿Qué servicios ofrecéis en ${m.name}?`,
      a: `Instalación de SSD, montaje de equipos, formateo y puesta a punto, copias de seguridad, limpieza de polvo, eliminación de virus y asesoramiento. También mantenimiento informático para empresas y autónomos.`,
    },
    {
      q: `¿Trabajáis con empresas y autónomos en ${m.name}?`,
      a: `Sí. Además del servicio a particulares, ofrecemos mantenimiento informático a pymes y autónomos con cuota fija: copias, seguridad y soporte.`,
    },
    {
      q: `¿El precio incluye el desplazamiento a ${m.name}?`,
      a: `Te damos un precio claro antes de empezar, con el desplazamiento dentro de la zona incluido. Sin sorpresas al final.`,
    },
  ];
}
