import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Alivio significativo del dolor irradiado hacia brazo o pierna",
  "Reducción de hormigueos y entumecimiento",
  "Mejora de la función neurológica y sensibilidad",
  "Facilitación de la movilidad y actividades diarias",
  "Reducción de la necesidad de medicamentos sistémicos",
  "Mejora de la calidad del sueño al controlar el dolor nocturno"
];

const symptoms = [
  "Dolor que se irradia desde la columna hacia brazo o pierna",
  "Sensación de hormigueo o 'corriente eléctrica'",
  "Entumecimiento en la distribución del nervio afectado",
  "Debilidad muscular en el área inervada",
  "Dolor que empeora con ciertos movimientos o posturas",
  "Dolor nocturno que interrumpe el sueño"
];

const locations = [
  {
    area: "Cervical",
    distribution: "Cuello hacia brazo y mano",
    commonCauses: ["Hernia discal cervical", "Estenosis foraminal", "Espondilosis cervical"],
    description: "El dolor se irradia típicamente hacia el hombro, brazo y puede llegar hasta los dedos"
  },
  {
    area: "Lumbar", 
    distribution: "Espalda baja hacia pierna y pie",
    commonCauses: ["Hernia discal lumbar", "Estenosis espinal", "Síndrome piramidal"],
    description: "Comúnmente conocido como ciática, el dolor se extiende hacia glúteo, muslo y pantorrilla"
  }
];

export default function DolorRadicularPage() {
  const conditionData = {
    name: "Dolor Radicular",
    description: "El dolor radicular es causado por la irritación o compresión de una raíz nerviosa, resultando en dolor que se irradia a lo largo de la distribución del nervio afectado.",
    symptoms: symptoms,
    treatments: ["Bloqueos de raíz nerviosa", "Infiltraciones epidurales", "Bloqueos facetarios", "Radiofrecuencia"]
  };

  return (
    <MainLayout
      title="Dolor Radicular | Tratamiento con Infiltraciones Espinales"
      description="Tratamiento especializado para dolor radicular con bloqueos de raíz nerviosa e infiltraciones epidurales. Alivio efectivo para ciática y dolor cervical irradiado."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Dolor Radicular', url: absoluteUrl('/padecimientos/dolor-radicular') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-pink-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Dolor Radicular
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                El dolor radicular causa síntomas intensos que se irradian desde la columna. Los bloqueos de raíz nerviosa y infiltraciones epidurales ofrecen alivio dirigido y efectivo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es el Dolor Radicular?</h2>
                <p className="text-gray-600 mb-4">
                  El dolor radicular ocurre cuando una raíz nerviosa se irrita o comprime, típicamente 
                  por una hernia discal, estenosis espinal o inflamación. El dolor sigue la distribución 
                  específica del nervio afectado.
                </p>
                <p className="text-gray-600 mb-6">
                  A diferencia del dolor local de espalda, el dolor radicular se caracteriza por irradiarse 
                  a áreas distantes, como brazos o piernas, y puede estar acompañado de síntomas neurológicos 
                  como hormigueo, entumecimiento o debilidad.
                </p>
                
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>Síntomas característicos</h3>
                <div className="space-y-2">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check />
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-pink-50 to-rose-50 p-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#344D63' }}>
                  Beneficios de los Bloqueos Nerviosos
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-2xl border border-pink-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Precisión diagnóstica:</strong> Los bloqueos 
                    nerviosos no solo proporcionan alivio, sino que también ayudan a confirmar 
                    el origen específico del dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Tipos de Dolor Radicular
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-sm">{location.area[0]}</span>
                    </div>
                    <h3 className="font-semibold text-slate-800">Dolor Radicular {location.area}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                      {location.distribution}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{location.description}</p>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Causas comunes:</h4>
                    <ul className="space-y-1">
                      {location.commonCauses.map((cause, causeIndex) => (
                        <li key={causeIndex} className="flex gap-2 items-start">
                          <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-slate-600">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
                Técnicas de Infiltración Especializada
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Bloqueos de raíz nerviosa:</strong> Infiltración 
                  dirigida específicamente a la raíz nerviosa afectada bajo guía fluoroscópica.
                </p>
                <p>
                  <strong className="text-gray-800">Infiltraciones epidurales:</strong> Administración 
                  de medicamento en el espacio epidural para reducir la inflamación alrededor 
                  de las raíces nerviosas.
                </p>
                <p>
                  <strong className="text-gray-800">Bloqueos facetarios:</strong> Para casos donde 
                  las articulaciones facetarias contribuyen al dolor irradiado.
                </p>
                <p>
                  <strong className="text-gray-800">Radiofrecuencia:</strong> Técnica avanzada para 
                  casos de dolor crónico que no responden a infiltraciones convencionales.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                ¿Dolor que se irradia?
              </h3>
              <p className="text-gray-600 mb-6">
                El dolor radicular puede ser incapacitante y afectar significativamente tu calidad de vida. 
                Una evaluación especializada puede determinar el mejor enfoque terapéutico.
              </p>
              <div className="space-y-3">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="inline-flex px-6 py-3 rounded-2xl text-white font-medium w-full justify-center"
                  style={{ backgroundColor: '#106D78' }}
                >
                  Consultar especialista
                </a>
                <a
                  href="/tratamientos"
                  className="inline-flex px-6 py-3 rounded-2xl border border-slate-300 font-medium w-full justify-center hover:bg-slate-50"
                >
                  Ver tratamientos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
