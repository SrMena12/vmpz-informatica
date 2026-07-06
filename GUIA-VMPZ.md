# 🛠️ Guía de mantenimiento — VMPZ Informática

Todo lo que necesitas para actualizar la web tú mismo, sin depender de nadie.
La web está hecha con **Next.js** y desplegada en **Vercel**, conectada a tu repo de **GitHub**.

> **Regla de oro:** casi todo el contenido (textos, precios, servicios, zonas, blog…)
> vive en archivos dentro de la carpeta **`src/lib/`**. Son archivos de "datos":
> los abres, cambias el texto entre comillas y guardas. No hace falta tocar el diseño.

---

## 📑 Índice

1. [Cómo publicar los cambios](#1-cómo-publicar-los-cambios)
2. [⚡ Editar PRECIOS (lo más rápido)](#2--editar-precios-lo-más-rápido)
3. [Escribir y editar el blog](#3-escribir-y-editar-el-blog)
4. [Servicios](#4-servicios)
5. [Sección Empresas](#5-sección-empresas)
6. [Sección Gaming](#6-sección-gaming)
7. [Zonas y municipios](#7-zonas-y-municipios)
8. [Datos del negocio y SEO](#8-datos-del-negocio-y-seo)
9. [Los efectos RGB](#9-los-efectos-rgb)
10. [Checklist después de publicar](#10-checklist-después-de-publicar)
11. [Qué NO tocar](#11-qué-no-tocar)

---

## 1. Cómo publicar los cambios

Cada vez que guardas cambios y los subes a GitHub, **Vercel publica la web solo** en 1-2 minutos.

**Opción sencilla (desde la web de GitHub):**
1. Entra en tu repositorio en github.com.
2. Navega hasta el archivo que quieres cambiar (por ejemplo `src/lib/gaming.ts`).
3. Pulsa el lápiz ✏️ (Edit), haz el cambio, y abajo pulsa **Commit changes**.
4. Vercel detecta el commit y publica automáticamente.

**Opción desde tu ordenador (Git):**
```bash
git add .
git commit -m "Actualizo precios gaming"
git push
```

**Probar antes de publicar (opcional, recomendado para cambios grandes):**
```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:3000
```
Cuando termines, `Ctrl + C` para parar.

---

## 2. ⚡ Editar PRECIOS (lo más rápido)

Los precios son números sueltos. Cambias el número y listo. Aquí está cada uno:

### PC Gaming → `src/lib/gaming.ts`
Busca el campo `precio:` de cada configuración:
```ts
{
  slug: 'basic',
  name: 'Basic',
  precio: 849,   // 👈 CAMBIA ESTE NÚMERO
  ...
}
```
Se muestra como "desde 849€". Hay uno por cada nivel (basic, standard, ultra).

### Planes de Empresas → `src/lib/empresas.ts`
Busca `price:` dentro de `planes`:
```ts
{
  name: 'Esencial',
  price: 49,   // 👈 en €/mes. Pon null si es "A medida"
  ...
}
```

### Servicios (particulares) → `src/lib/servicios.ts`
Busca `price:` dentro de cada servicio:
```ts
{
  slug: 'instalacion-ssd',
  price: 65,             // 👈 número, o null para "consultar"
  pricePrefix: 'desde',  // texto antes del precio ("desde", "por")
  ...
}
```

> 💡 Los precios de gaming son **orientativos** por la subida de RAM/SSD/gráficas.
> Repásalos cada pocas semanas. El texto de aviso ya está puesto en la web.

---

## 3. Escribir y editar el blog

Los artículos están en **`src/lib/blog.tsx`**. Cada artículo es un objeto dentro de `posts`.
Aparecen automáticamente en `/blog` y crean su propia página.

### Editar un artículo existente
Busca su `title` o `slug`, y cambia el texto que quieras (título, resumen, contenido…).

### Añadir un artículo nuevo
Copia un bloque entero `{ ... }` existente, pégalo dentro del array `posts` y cambia los datos.
Plantilla lista para pegar:

```tsx
{
  slug: 'titulo-del-articulo-con-guiones',   // sale en la URL, sin acentos ni espacios
  title: 'Título que se ve arriba',
  excerpt: 'Resumen corto de 1-2 frases que aparece en la lista del blog.',
  category: 'Rendimiento',                   // Rendimiento, Seguridad, Consejos...
  author: 'VMPZ Informática',
  date: '2026-07-15',                        // formato AAAA-MM-DD
  readingMinutes: 4,
  keywords: ['palabra clave 1', 'palabra clave 2'],
  toc: [                                      // índice de secciones (opcional pero recomendado)
    { id: 'seccion-1', label: 'Primer apartado' },
    { id: 'seccion-2', label: 'Segundo apartado' },
  ],
  faq: [                                      // preguntas frecuentes del artículo
    { q: '¿Una pregunta?', a: 'La respuesta.' },
  ],
  content: (
    <div className="space-y-5">
      <P>Primer párrafo de introducción.</P>
      <H id="seccion-1">Primer apartado</H>
      <P>Texto del apartado.</P>
      <H id="seccion-2">Segundo apartado</H>
      <P>Más texto.</P>
    </div>
  ),
},
```

**Reglas del contenido:**
- Cada párrafo va dentro de `<P> ... </P>`.
- Cada título de sección va dentro de `<H id="lo-que-sea"> ... </H>`.
- El `id` del `<H>` debe coincidir con el `id` del `toc` para que funcione el índice.
- Ojo con las comillas y las comas: cada línea acaba en coma, y el bloque `{ }` también.

---

## 4. Servicios

Archivo: **`src/lib/servicios.ts`**. Cada servicio de particulares es un objeto.
Campos principales:
```ts
{
  slug: 'instalacion-ssd',   // URL del servicio
  name: 'Instalación de SSD',
  price: 65,
  pricePrefix: 'desde',
  short: 'Frase corta para las tarjetas.',
  icon: 'HardDrive',         // ver iconos disponibles abajo
  keywords: [...],
  intro: 'Texto de la cabecera del servicio.',
  includes: ['Punto 1', 'Punto 2'],   // qué incluye
  benefits: [{ title, text }],        // beneficios
  faq: [{ q, a }],                    // preguntas frecuentes
}
```
Para añadir uno nuevo, copia un objeto entero y cámbialo.

**Iconos disponibles** (campo `icon`): `HardDrive`, `Cpu`, `RefreshCw`, `DatabaseBackup`,
`Wind`, `ShieldCheck`, `Lightbulb`, `MemoryStick`, `Wifi`, `Printer`, `DownloadCloud`,
`AtSign`, `LifeBuoy`, `Wrench`, `Laptop`.

---

## 5. Sección Empresas

Archivo: **`src/lib/empresas.ts`**. Bloques que puedes editar:

- `empresasHero` → título y subtítulo de la cabecera.
- `dolores` → la lista del "¿te suena?".
- `incluye` → tarjetas de "qué incluye el mantenimiento".
- `planes` → los 3 planes y sus **precios** (ver sección 2).
- `razones` → bloque "por qué VMPZ".
- `sectores` → etiquetas de tipos de negocio.
- `renovacion` → la sección de renovación de equipos (título, texto y las 3 opciones).
- `empresasFaq` → preguntas frecuentes de empresas.
- `empresasKeywords` → palabras clave para Google.

---

## 6. Sección Gaming

Archivo: **`src/lib/gaming.ts`**. Bloques:

- `gamingHero` → título y subtítulo.
- `gamingBuilds` → las 3 configuraciones. Dentro de cada una:
  - `precio` → el número (ver sección 2).
  - `resolucion`, `tagline`, `uso` → textos.
  - `componentes` → lista de piezas. Para cambiar una pieza, edita el texto de `part`:
    ```ts
    { cat: 'Gráfica', icon: 'MonitorPlay', part: 'NVIDIA RTX 5070 12 GB GDDR7' },
    ```
    Iconos de componentes: `Cpu`, `MonitorPlay`, `CircuitBoard`, `MemoryStick`,
    `HardDrive`, `Plug`, `Fan`, `Box`.
  - `highlight: true` → marca la configuración destacada (la del marco RGB). Solo una.
- `gamingIncluye` → lista de "siempre incluido".
- `gamingFaq` → preguntas frecuentes.

---

## 7. Zonas y municipios

Archivo: **`src/lib/municipios.ts`**. Cada pueblo es un objeto:
```ts
{ slug: 'illescas', name: 'Illescas', comarca: 'La Sagra', intro: 'Texto de la zona...' },
```
Para añadir una zona nueva, copia una línea y cámbiala. Se genera sola su página `/zonas/illescas`,
entra en el sitemap y en el menú del pie. Las preguntas frecuentes de cada zona se generan
automáticamente con el nombre del pueblo (función `zonaFaq`, no hace falta tocar nada).

---

## 8. Datos del negocio y SEO

Archivo: **`src/lib/site.ts`**. Aquí está la información que aparece en toda la web y en Google:

```ts
name: 'VMPZ Informática',
tagline: 'Tu tecnología, en buenas manos',
phone: '624905055',
phoneIntl: '+34 624 905 055',
phoneWa: '34624905055',                 // para los enlaces de WhatsApp
email: 'informatica@vmpz.es',
instagramUrl: 'https://instagram.com/informatica_vmpz',
mapsUrl: 'https://maps.app.goo.gl/...',  // tu ficha de Google
reviews: { count: 8, rating: 5 },        // 👈 actualiza cuando tengas más reseñas
geo: { lat: 39.9403, lng: -3.9036 },     // 👈 tu ubicación exacta (Google Maps → clic derecho)
hours: [ ... ],                          // 👈 tus horarios reales
```

> ⚠️ **Importante:** mantén el **mismo teléfono y web en todos lados** (aquí, en Google, en
> Instagram, en la furgoneta). La coherencia ayuda al posicionamiento local.
> Y actualiza `reviews.count` cuando subas de 8 reseñas.

---

## 8b. Testimonios y página "Sobre VMPZ"

**Testimonios (reseñas reales)** → `src/lib/testimonios.ts`. Cada reseña es un bloque con `author`, `rating`, `text`, `date` y `source`. Se muestran en la home y alimentan el schema de reseñas para Google. Para añadir una nueva reseña de Google, copia un bloque y rellénalo (la fecha es aproximada; ponla lo más cercana posible al "hace X meses" de Google).

**Página "Sobre VMPZ"** → `src/app/sobre-vmpz/page.tsx`. Los textos de tu historia están marcados con `✍️ EDITA` para que los cambies a tu voz. No lleva foto; cuando quieras añadirla, se pone en el bloque de imagen.

## 9. Los efectos RGB

Todos los efectos RGB (menú, tiras LED, marco animado) están en **`src/app/globals.css`**,
en el bloque *"Efectos RGB — VMPZ Gaming"*. Clases disponibles:

- `.rgb-strip` → tira LED horizontal.
- `.rgb-frame` → marco animado tipo torre RGB (en la tarjeta destacada).
- `.rgb-underline` → subrayado RGB (el del botón "Gaming" del menú).
- `.rgb-text` → texto con degradado RGB.
- `.rgb-dot` → puntito LED que "respira".
- `.rgb-gradient` → degradado RGB de fondo.

**Para cambiar los colores o la velocidad:** edita los `linear-gradient(...)` (colores) o
el `6s` de `animation: rgb-flow 6s ...` (más segundos = más lento).
Los efectos se desactivan solos para usuarios con "reducir movimiento" activado (accesibilidad).

El botón "Gaming" del menú está marcado con `rgb: true` en `src/components/layout/Navbar.tsx`.

---

## 10. Checklist después de publicar

- [ ] Revisa la web publicada (Vercel te da la URL; luego se ve en informatica.vmpz.es).
- [ ] Si has añadido una página nueva, entra en **Google Search Console** y reenvía el sitemap
      (`https://informatica.vmpz.es/sitemap.xml`) para que Google la indexe antes.
- [ ] Comprueba en el móvil que se ve bien.

---

## 11. Qué NO tocar

Para evitar romper la web, no toques (salvo que sepas lo que haces):
- La carpeta `src/components/` (el diseño y los bloques reutilizables).
- Los archivos `.tsx` de `src/app/` **salvo** los textos que veas claramente entre comillas.
- Archivos de configuración: `package.json`, `next.config`, `tailwind.config.ts`, `tsconfig.json`.

Si algo falla tras un cambio, Vercel te avisa del error en el despliegue y **la versión anterior
sigue online**. Puedes deshacer el último commit en GitHub y todo vuelve a la normalidad.

---

*Cualquier duda, esta guía se puede ampliar. ¡A por todas, Víctor! 🚀*
