import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo";
import { useEffect, useState } from 'react';

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Reinitialize Facebook SDK when component mounts
    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

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

        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>
                Infiltraciones de Rodilla en Acción
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Observa cómo realizamos las infiltraciones de rodilla con precisión y técnica especializada para garantizar los mejores resultados.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 min-h-[300px]">
                  {isClient ? (
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02vwCArHgsfgwaoF8JeUNVfNo2apKbg78ZpAbrKvhVNfjR48vChxTiJedNY9mhVSHLl%26id%3D61579559341262%26rdid%3DwYrfSK8FukKgFYR8&show_text=false&width=560&t=0"
                      width="100%"
                      height="100%"
                      style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Video de infiltración de rodilla - Infiltra Clínica"
                      className="rounded-2xl"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-pulse mb-4">
                          <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4"></div>
                        </div>
                        <p className="text-slate-500">Cargando video de tratamiento...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Técnica Precisa</h3>
                    <p className="text-sm text-slate-600 mt-1">Guiada por ecografía para máxima precisión</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Procedimiento Rápido</h3>
                    <p className="text-sm text-slate-600 mt-1">30-45 minutos con mínimas molestias</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Resultados Efectivos</h3>
                    <p className="text-sm text-slate-600 mt-1">Alivio prolongado del dolor de rodilla</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-medium"
                    style={{ backgroundColor: '#106D78' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                    Agendar infiltración de rodilla
                  </a>
                  <a 
                    href="https://www.facebook.com/permalink.php?story_fbid=pfbid02vwCArHgsfgwaoF8JeUNVfNo2apKbg78ZpAbrKvhVNfjR48vChxTiJedNY9mhVSHLl&id=61579559341262&rdid=wYrfSK8FukKgFYR8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800 px-4 py-3"
                  >
                    Ver video completo en Facebook
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
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
