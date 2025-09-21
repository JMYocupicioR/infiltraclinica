import { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { absoluteUrl } from '@/lib/seo';

const sections = [
  { id: 'datos', title: '1. Datos personales que recabamos', anchor: 'datos-personales' },
  { id: 'finalidades', title: '2. Finalidades del tratamiento', anchor: 'finalidades' },
  { id: 'transferencias', title: '3. Transferencia de datos', anchor: 'transferencias' },
  { id: 'derechos', title: '4. Derechos ARCO', anchor: 'derechos-arco' },
  { id: 'cookies', title: '5. Cookies y tecnologías', anchor: 'cookies' },
  { id: 'seguridad', title: '6. Seguridad de la información', anchor: 'seguridad' },
  { id: 'modificaciones', title: '7. Modificaciones al aviso', anchor: 'modificaciones' },
  { id: 'contacto', title: '8. Contacto', anchor: 'contacto' },
];

const sectionContent: Record<string, { heading: string; paragraphs: string[]; list?: string[] }> = {
  datos: {
    heading: 'Datos personales que recabamos',
    paragraphs: [
      'Infiltra Clínica Mérida recaba los datos que nos proporcionas de manera directa al solicitar informes, agendar una cita o completar formularios en nuestro sitio web.',
      'Los datos pueden incluir: nombre completo, teléfono, correo electrónico, fecha de nacimiento, datos de facturación y antecedentes clínicos necesarios para el procedimiento solicitado.',
    ],
    list: [
      'Datos de identificación y contacto (nombre, teléfono, correo electrónico).',
      'Datos clínicos y de salud relevantes para el diagnóstico y tratamiento.',
      'Datos de facturación en caso de requerir comprobantes fiscales.',
    ],
  },
  finalidades: {
    heading: 'Finalidades del tratamiento',
    paragraphs: [
      'Utilizamos tus datos personales para brindarte servicios médicos especializados en infiltraciones de precisión y dar seguimiento a tu evolución.',
      'Finalidades primarias:',
    ],
    list: [
      'Agendar citas, confirmar disponibilidad y coordinar procedimientos.',
      'Elaborar expedientes clínicos, órdenes médicas y reportes postprocedimiento.',
      'Brindar seguimiento telefónico o digital posterior al tratamiento.',
      'Gestionar pagos, facturación y requerimientos administrativos asociados.',
    ],
  },
  transferencias: {
    heading: 'Transferencia de datos',
    paragraphs: [
      'Compartimos datos personales únicamente cuando es necesario para brindar el servicio médico, cumplir obligaciones legales o a solicitud tuya.',
    ],
    list: [
      'Especialistas médicos o fisioterapeutas que formarán parte de tu plan de tratamiento, previo consentimiento.',
      'Laboratorios o gabinetes de imagen cuando coordinamos estudios complementarios.',
      'Autoridades competentes que los soliciten conforme a la legislación aplicable.',
    ],
  },
  derechos: {
    heading: 'Derechos ARCO',
    paragraphs: [
      'Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), así como revocar el consentimiento otorgado, enviando un correo a contacto@infiltraclinicamerida.com.',
      'Tu solicitud debe incluir nombre completo, medio de contacto, descripción clara del derecho que deseas ejercer y documentos que acrediten tu identidad o representación legal.',
    ],
  },
  cookies: {
    heading: 'Cookies y tecnologías',
    paragraphs: [
      'Nuestro sitio utiliza cookies y tecnologías similares para mejorar la experiencia de navegación, recordar preferencias y analizar métricas de rendimiento.',
      'Puedes administrar las cookies desde las preferencias de tu navegador. Si las deshabilitas, algunas funciones del sitio podrían no mostrarse de manera óptima.',
    ],
  },
  seguridad: {
    heading: 'Seguridad de la información',
    paragraphs: [
      'Implementamos medidas administrativas, técnicas y físicas para proteger tus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.',
      'El acceso a los expedientes clínicos está limitado únicamente al personal autorizado involucrado en tu atención.',
    ],
  },
  modificaciones: {
    heading: 'Modificaciones al aviso de privacidad',
    paragraphs: [
      'Nos reservamos el derecho de actualizar este aviso de privacidad para reflejar cambios normativos o mejoras en nuestros procesos.',
      'Publicaremos cualquier modificación en este mismo sitio web e indicaremos la fecha de la última actualización.',
    ],
  },
  contacto: {
    heading: 'Contacto del responsable',
    paragraphs: [
      'Si tienes dudas sobre el manejo de tus datos personales, puedes contactarnos a través de los siguientes medios:',
      'Correo: contacto@infiltraclinicamerida.com',
      'Teléfono / WhatsApp: +52 999 353 7967',
      'Domicilio: Mérida, Yucatán (la dirección completa se comparte al agendar).',
    ],
  },
};

const AvisoDePrivacidadPage = () => {
  const [activeSection, setActiveSection] = useState<string>('datos');

  return (
    <MainLayout
      title="Aviso de privacidad | Infiltra Clínica Mérida"
      description="Consulta cómo Infiltra Clínica Mérida protege y utiliza tus datos personales conforme a la LFPDPPP."
      breadcrumbs={[{ name: 'Aviso de privacidad', url: absoluteUrl('/aviso-de-privacidad') }]}
      noIndex
    >
      <main className="bg-white text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Aviso de Privacidad
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En Infiltra Clínica Mérida protegemos tus datos personales y los tratamos de forma responsable, en apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[260px,1fr] gap-8">
            <nav aria-label="Índice del aviso" className="space-y-2 sticky top-28 self-start h-fit">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl border text-sm transition ${
                    activeSection === section.id
                      ? 'bg-blue-50 border-blue-200 text-blue-800'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            <div className="space-y-12">
              {sections.map((section) => {
                const content = sectionContent[section.id];
                if (!content) return null;
                return (
                  <article key={section.id} id={section.anchor} className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: '#344D63' }}>
                      {content.heading}
                    </h2>
                    {content.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm text-slate-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {content.list ? (
                      <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                        {content.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-slate-500">
            Última actualización: {new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </section>
      </main>
    </MainLayout>
  );
};

export default AvisoDePrivacidadPage;