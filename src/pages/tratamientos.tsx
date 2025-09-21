import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo";

const treatments = [
  {
    name: 'Rodilla',
    fullName: 'Infiltraciones de rodilla',
    description:
      'Protocolos para osteoartritis, lesiones meniscales y dolor femoropatelar con guía de imagen y seguimiento funcional.',
    conditions: ['Osteoartritis', 'Lesión meniscal', 'Bursitis', 'Síndrome femoropatelar'],
    techniques: ['Ácido hialurónico', 'Corticosteroides', 'Viscosuplementación'],
    duration: '30-45 minutos',
    recovery: '24-48 horas',
    color: 'from-blue-50 to-cyan-50',
  },
  {
    name: 'Hombro',
    fullName: 'Infiltraciones de hombro',
    description:
      'Procedimientos guiados para manguito rotador, bursitis y capsulitis adhesiva. Individualizamos abordajes subacromiales y glenohumerales.',
    conditions: ['Manguito rotador', 'Bursitis subacromial', 'Capsulitis adhesiva', 'Tendinitis bicipital'],
    techniques: ['Infiltración subacromial', 'Infiltración glenohumeral', 'Corticosteroides'],
    duration: '20-35 minutos',
    recovery: '48-72 horas',
    color: 'from-green-50 to-emerald-50',
  },
  {
    name: 'Cadera',
    fullName: 'Infiltraciones de cadera',
    description:
      'Abordajes intraarticulares y de bursa trocantérica para aliviar dolor y mejorar movilidad en casos de artrosis y tendinopatías.',
    conditions: ['Artrosis de cadera', 'Bursitis trocantérica', 'Tendinitis de psoas', 'Síndrome de impacto'],
    techniques: ['Infiltración intraarticular', 'Bursa trocantérica', 'Ácido hialurónico'],
    duration: '30-40 minutos',
    recovery: '24-48 horas',
    color: 'from-purple-50 to-indigo-50',
  },
  {
    name: 'Columna',
    fullName: 'Infiltraciones de columna',
    description:
      'Protocolos para dolor facetario, sacroilíaco y radicular con fluoroscopía y radiofrecuencia cuando está indicado.',
    conditions: ['Artrosis facetaria', 'Disfunción sacroilíaca', 'Dolor radicular', 'Estenosis espinal'],
    techniques: ['Bloqueo facetario', 'Infiltración sacroilíaca', 'Epidural transforaminal', 'Radiofrecuencia'],
    duration: '40-60 minutos',
    recovery: '48-72 horas',
    color: 'from-orange-50 to-red-50',
  },
];

export default function TratamientosPage() {
  return (
    <MainLayout
      title="Tratamientos | Infiltra Clínica Mérida"
      description="Infiltraciones de rodilla, hombro, cadera y columna en Mérida. Procedimientos guiados por especialistas con seguimiento personalizado."
      breadcrumbs={[{ name: 'Tratamientos', url: absoluteUrl('/tratamientos') }]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Tratamientos
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Diseñamos cada infiltración para responder a la anatomía y diagnóstico específico de cada articulación. Conoce nuestras líneas de tratamiento.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 space-y-10">
            {treatments.map((treatment) => (
              <article
                key={treatment.name}
                className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${treatment.color}`} aria-hidden="true" />
                <div className="p-8 grid md:grid-cols-[2fr,1fr] gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold" style={{ color: '#344D63' }}>{treatment.fullName}</h2>
                    <p className="mt-3 text-sm text-slate-600 max-w-2xl">{treatment.description}</p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-200 p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Indicaciones frecuentes</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {treatment.conditions.map((condition) => (
                            <li key={condition} className="flex gap-2">
                              <Check />
                              <span>{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-slate-200 p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Técnicas empleadas</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {treatment.techniques.map((technique) => (
                            <li key={technique} className="flex gap-2">
                              <Check />
                              <span>{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 h-fit">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Datos clave</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li><strong className="block text-slate-800">Duración</strong> {treatment.duration}</li>
                      <li><strong className="block text-slate-800">Recuperación estimada</strong> {treatment.recovery}</li>
                      <li>
                        <strong className="block text-slate-800">Seguimiento</strong>
                        Videollamada o presencial a los 7 y 30 días con escalas validadas.
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-col gap-2">
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        className="px-4 py-2 rounded-2xl text-white text-sm text-center"
                        style={{ backgroundColor: '#106D78' }}
                      >
                        Consultar disponibilidad
                      </a>
                      <a
                        href="tel:+529999123456"
                        className="px-4 py-2 rounded-2xl border border-slate-300 text-sm text-center"
                      >
                        Hablar con el equipo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>Proceso clínico estandarizado</h2>
              <p className="mt-3 text-sm text-slate-600">
                Cada paciente pasa por una evaluación previa, explicación de riesgos y consentimiento informado. Documentamos escalas de dolor y funcionalidad para medir resultados.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><Check /> Historia clínica, revisión de estudios y planeación guiada.</li>
                <li className="flex gap-2"><Check /> Técnica estéril con control analgésico personalizado.</li>
                <li className="flex gap-2"><Check /> Reporte postprocedimiento y recomendaciones de rehabilitación.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold" style={{ color: '#344D63' }}>¿Necesitas una segunda opinión?</h3>
              <p className="mt-3 text-sm text-slate-600">
                Revisamos estudios previos y evaluamos si una infiltración de precisión es adecuada para tu caso. Envía tus documentos y agenda una consulta diagnóstica.
              </p>
              <a
                href="mailto:contacto@infiltraclinicamerida.com"
                className="inline-flex mt-6 px-4 py-2 rounded-2xl text-white"
                style={{ backgroundColor: '#106D78' }}
              >
                Enviar estudios
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
