import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Aviso legal',
  description: 'Aviso legal e información del titular de VMPZ Informática.',
  path: '/aviso-legal',
  noindex: true,
});

export default function AvisoLegalPage() {
  return (
    <LegalShell title="Aviso legal" updated="julio de 2026">
      {/* NOTA PARA VÍCTOR: revisa y completa los campos [ENTRE CORCHETES] con tus datos reales. */}
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
        Electrónico (LSSI-CE), se facilita la siguiente información sobre el titular de este sitio web.
      </p>

      <h2>Titular del sitio</h2>
      <ul>
        <li><strong>Titular:</strong> [NOMBRE Y APELLIDOS DEL TITULAR]</li>
        <li><strong>Nombre comercial:</strong> {site.name}</li>
        <li><strong>NIF:</strong> [NIF/DNI]</li>
        <li><strong>Domicilio:</strong> [DIRECCIÓN], {site.city} ({site.province})</li>
        <li><strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><strong>Teléfono:</strong> {site.phoneIntl}</li>
        <li><strong>Sitio web:</strong> <a href={site.url}>{site.url}</a></li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio tiene por objeto dar a conocer los servicios de soporte informático a domicilio que presta
        {' '}{site.name} en {site.province} y la comarca de {site.region}, y facilitar el contacto con clientes
        y personas interesadas.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio atribuye la condición de usuario e implica la aceptación de las
        condiciones recogidas en este aviso legal. El usuario se compromete a hacer un uso adecuado de los
        contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos de este sitio (textos, imágenes, diseño, logotipos y código) son titularidad de
        {' '}{site.name} o se utilizan con autorización, y están protegidos por la normativa de propiedad
        intelectual e industrial. Queda prohibida su reproducción o distribución sin autorización expresa.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        {site.name} no se hace responsable del mal uso que pueda hacerse de los contenidos, siendo
        responsabilidad exclusiva de la persona que accede a ellos. Se procura mantener la información
        actualizada, pero no se garantiza la ausencia de errores u omisiones.
      </p>

      <h2>Enlaces externos</h2>
      <p>
        Este sitio puede contener enlaces a páginas de terceros (por ejemplo, Google Maps, WhatsApp o
        Instagram). {site.name} no se responsabiliza del contenido ni de las políticas de dichos sitios.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia,
        las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>
    </LegalShell>
  );
}
