import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Política de cookies',
  description: 'Información sobre el uso de cookies y almacenamiento local en el sitio web de VMPZ Informática.',
  path: '/politica-de-cookies',
  noindex: true,
});

export default function CookiesPage() {
  return (
    <LegalShell title="Política de cookies" updated="julio de 2026">
      <p>
        Esta web es muy respetuosa con tu privacidad y hace un uso mínimo de cookies. A continuación te
        explicamos con claridad qué se guarda y para qué.
      </p>

      <h2>¿Qué usamos?</h2>

      <h3>Almacenamiento propio (técnico)</h3>
      <p>
        Guardamos en tu navegador una única preferencia técnica para <strong>recordar que ya has cerrado el
        aviso de cookies</strong> y no volver a mostrártelo. No identifica a la persona ni se comparte con
        nadie, y permanece solo en tu dispositivo.
      </p>

      <h3>Cookies de terceros (mapa)</h3>
      <p>
        En la página de contacto mostramos un mapa de <strong>Google Maps</strong>. Al cargarlo, Google puede
        instalar cookies propias sobre las que {site.name} no tiene control. Puedes consultar cómo las usa en
        la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">política de cookies de Google</a>.
        Si no quieres que se carguen, evita entrar en la página de contacto o bloquea las cookies de terceros
        en tu navegador.
      </p>

      <h2>Cómo gestionar o eliminar las cookies</h2>
      <p>
        Puedes borrar o bloquear las cookies y el almacenamiento local desde la configuración de tu
        navegador. Aquí tienes las guías oficiales:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
      </ul>

      <h2>Cambios en esta política</h2>
      <p>
        Si en el futuro añadimos herramientas que usen cookies adicionales (por ejemplo, analítica),
        actualizaremos esta página y, si corresponde, te pediremos consentimiento.
      </p>

      <p>
        Para cualquier duda, escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
