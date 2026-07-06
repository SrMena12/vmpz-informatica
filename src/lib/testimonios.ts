// =============================================================
//  TESTIMONIOS — reseñas reales de clientes en Google.
//  Se muestran en la home y alimentan el schema de reseñas (SEO).
//  Para añadir una nueva: copia un bloque y rellena los datos.
//  La fecha es aproximada (Google solo muestra "hace X meses"); edítala si la sabes exacta.
// =============================================================

export type Testimonio = {
  author: string;
  rating: number; // 1 a 5
  text: string;
  date: string; // ISO 'YYYY-MM-DD' (aproximada)
  source: string;
};

export const testimonios: Testimonio[] = [
  {
    author: 'Sergio Pérez',
    rating: 5,
    text: 'Lo recomiendo totalmente. Es un profesional muy competente, resolutivo y en quien se puede confiar. Siempre encuentra soluciones claras y eficaces, explica las cosas de forma sencilla y cumple con lo que promete. Se nota que sabe bien lo que hace. Un profesional de 10.',
    date: '2026-01-15',
    source: 'Google',
  },
  {
    author: 'David López',
    rating: 5,
    text: 'Un trato genial. Vino a casa a por el ordenador y me lo trajo. Excelente trabajo y rapidez. Si vuelvo a tener un problema, le llamaré sin dudarlo.',
    date: '2026-01-10',
    source: 'Google',
  },
  {
    author: 'Víctor Sánchez Talavante',
    rating: 5,
    text: 'Me arregló mi portátil, rápido y quedó genial. Lo recomiendo.',
    date: '2026-06-15',
    source: 'Google',
  },
  {
    author: 'Miriam Gallego',
    rating: 5,
    text: 'El ordenador de mi novio iba lento y decidí llevárselo a Víctor para que le instalase un disco SSD que otro había intentado poner y no fue capaz. Todo perfecto y un chico muy majo, la verdad.',
    date: '2026-02-10',
    source: 'Google',
  },
  {
    author: 'Marcos Araque Souto',
    rating: 5,
    text: 'Muy buen servicio. Si tengo algún problema más, volveré sin duda. Recomendable 100x100.',
    date: '2025-10-15',
    source: 'Google',
  },
];
