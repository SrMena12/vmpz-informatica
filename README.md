# VMPZ Informática — Web oficial

Sitio web profesional de **VMPZ Informática**, servicio de soporte informático a domicilio en Toledo y la comarca de La Sagra. Construido con Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS y animaciones con Framer Motion + Lenis.

> Esta web está pensada para sustituir a la actual en `https://informatica.vmpz.es`.

---

## 1. Requisitos previos

- **Node.js 18.18 o superior** (recomendado 20 LTS). Compruébalo con `node -v`.
- **npm** (viene con Node). También sirve pnpm o yarn si lo prefieres.

## 2. Poner en marcha en local

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar en modo desarrollo (recarga automática)
npm run dev
# Abre http://localhost:3000

# 3. Comprobar que compila para producción (IMPORTANTE antes de desplegar)
npm run build
npm run start   # sirve la versión de producción en local
```

> **Nota sobre las tipografías:** el proyecto usa Google Fonts (Space Grotesk + Inter) a través de `next/font`. La primera vez que ejecutes `npm run dev` o `npm run build` con conexión a internet, Next las descarga y las deja autoalojadas. Ejecuta el `npm run build` una vez en tu equipo (o directamente en Vercel) antes de dar por buena la web.

## 3. Subir a GitHub

```bash
git init
git add .
git commit -m "Web VMPZ Informática"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vmpz-informatica.git
git push -u origin main
```

## 4. Desplegar en Vercel

1. Entra en [vercel.com](https://vercel.com) y pulsa **Add New → Project**.
2. Importa el repositorio de GitHub. Vercel detecta Next.js automáticamente (no toques la configuración de build).
3. En **Environment Variables** añade:
   - `NEXT_PUBLIC_SITE_URL` = `https://informatica.vmpz.es`
4. Pulsa **Deploy**. En un par de minutos tendrás una URL `*.vercel.app`.
5. Para usar tu dominio: **Settings → Domains → Add**, escribe `informatica.vmpz.es` y sigue las instrucciones de DNS (Vercel te da el registro CNAME/A que debes poner en tu proveedor de dominio).

## 5. Estructura del proyecto

```
src/
├─ app/                      # Páginas (App Router)
│  ├─ page.tsx               # Inicio
│  ├─ servicios/             # Índice + página por servicio ([slug])
│  ├─ zonas/[municipio]/     # Página SEO por municipio
│  ├─ blog/                  # Índice + artículo ([slug])
│  ├─ contacto/              # WhatsApp + correo prellenados, mapa
│  ├─ aviso-legal/ · politica-de-privacidad/ · politica-de-cookies/
│  ├─ sitemap.ts · robots.ts # SEO técnico (se generan solos)
│  └─ not-found.tsx          # Página 404
├─ components/               # Componentes reutilizables (UI, secciones, layout)
└─ lib/                      # DATOS Y CONFIGURACIÓN (edita aquí los textos)
   ├─ site.ts                # ← Datos de la empresa (teléfono, email, redes…)
   ├─ servicios.ts           # ← Catálogo de servicios y precios
   ├─ municipios.ts          # ← Zonas de servicio
   ├─ blog.tsx               # ← Artículos del blog
   └─ seo.ts                 # Metadatos (no hace falta tocar)
public/
├─ personaje/                # Imágenes del personaje (hero, contacto, ssd…)
└─ brand/logo.png
```

## 6. Cómo cambiar contenidos (sin saber programar)

Casi todo el texto vive en `src/lib/`. Son archivos con comentarios en español:

- **Datos de contacto** (teléfono, email, Instagram, reseñas): `src/lib/site.ts`.
- **Servicios y precios**: `src/lib/servicios.ts`. Cada servicio es un bloque; copia uno para crear otro nuevo. El precio `null` muestra «A consultar».
- **Municipios / zonas**: `src/lib/municipios.ts`. Añadir un pueblo es copiar un bloque; su página `/zonas/<slug>` se crea sola.
- **Artículos del blog**: `src/lib/blog.tsx`.
- **Imágenes**: sustituye los archivos dentro de `public/personaje/` manteniendo el mismo nombre y no hace falta tocar nada más.

Tras cualquier cambio, si tienes el proyecto en GitHub + Vercel, basta con hacer `git commit` y `git push`: Vercel vuelve a desplegar automáticamente.

## 7. Formulario de contacto

Por decisión de diseño, **no hay backend ni base de datos**. Los botones de contacto abren:
- **WhatsApp** con un mensaje ya escrito (`wa.me`).
- **Correo** con asunto y cuerpo prellenados (`mailto:`).

Es la opción más simple y fiable: no requiere servidor, ni mantenimiento, ni cumplir requisitos de almacenamiento de datos.

## 8. Pendientes recomendados antes de publicar

- [ ] Revisar y completar los datos `[ENTRE CORCHETES]` en las páginas legales (NIF, domicilio, titular).
- [ ] Ejecutar `npm run build` una vez para confirmar que todo compila.
- [ ] Revisar las imágenes `personaje/ssd.png` y `personaje/asesoramiento.png`: llevan texto incrustado. La imagen `personaje/montaje.png` contiene una errata generada por IA («INPORMATICA»); conviene sustituirla si se va a usar de forma destacada.
- [ ] Verificar el número de reseñas de Google en `site.ts` (`reviews.count`).

## 9. Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Desarrollo con recarga en caliente |
| `npm run build` | Compila para producción |
| `npm run start` | Sirve la build de producción |
| `npm run lint` | Revisa el código |

---

Hecho con Next.js 15. Para dudas técnicas, la configuración central está en `src/lib/site.ts`.
