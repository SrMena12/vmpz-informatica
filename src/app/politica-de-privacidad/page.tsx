import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Política de privacidad',
  description: 'Cómo trata VMPZ Informática los datos personales de quienes contactan a través del sitio web.',
  path: '/politica-de-privacidad',
  noindex: true,
});

export default function PrivacidadPage() {
  return (
    <LegalShell title="Política de privacidad" updated="julio de 2026">
      {/* NOTA PARA VÍCTOR: revisa los campos [ENTRE CORCHETES] y ajusta según cómo trates los datos. */}
      <p>
        En {site.name} nos tomamos en serio tu privacidad. Esta política explica qué datos tratamos, con qué
        finalidad y qué derechos tienes, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica
        3/2018 (LOPDGDD).
      </p>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> [NOMBRE Y APELLIDOS DEL TITULAR] ({site.name})</li>
        <li><strong>NIF:</strong> [NIF/DNI]</li>
        <li><strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
      </ul>

      <h2>Qué datos tratamos y con qué finalidad</h2>
      <p>
        Este sitio <strong>no dispone de formularios que almacenen datos en un servidor</strong>. El contacto
        se realiza directamente a través de:
      </p>
      <ul>
        <li>
          <strong>WhatsApp y teléfono:</strong> al escribirnos, tratamos el número y el contenido del mensaje
          con la única finalidad de atender tu consulta y prestar el servicio solicitado.
        </li>
        <li>
          <strong>Correo electrónico:</strong> los datos que nos facilites por email se usan solo para
          responderte y, en su caso, gestionar el servicio.
        </li>
      </ul>
      <p>
        La base jurídica es tu consentimiento al contactarnos y la ejecución de la relación de servicio que
        solicites.
      </p>

      <h2>Conservación</h2>
      <p>
        Conservamos tus datos el tiempo necesario para atender tu consulta y, si contratas un servicio,
        durante los plazos legales aplicables (por ejemplo, obligaciones fiscales). Después se eliminan.
      </p>

      <h2>Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Ten en cuenta que las comunicaciones por
        WhatsApp o Instagram se rigen además por las políticas de privacidad de Meta Platforms.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
        escribiendo a <a href={`mailto:${site.email}`}>{site.email}</a>. También puedes reclamar ante la
        Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>)
        si consideras que no hemos atendido tu solicitud.
      </p>

      <h2>Seguridad</h2>
      <p>
        Aplicamos medidas razonables para proteger la información que nos facilitas frente a accesos no
        autorizados, pérdida o alteración.
      </p>
    </LegalShell>
  );
}
