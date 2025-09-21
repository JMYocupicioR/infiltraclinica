import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Reducción significativa del dolor articular",
  "Mejora de la movilidad y función articular", 
  "Retraso en la progresión del daño cartilaginoso",
  "Alternativa no quirúrgica a la cirugía de reemplazo",
  "Mejora de la calidad de vida diaria",
  "Reducción de la dependencia a analgésicos orales"
];

const symptoms = [
  "Dolor articular que empeora con la actividad",
  "Rigidez matutina que dura menos de 30 minutos",
  "Pérdida gradual de movilidad",
  "Sensación de crujidos o chasquidos al mover la articulación",
  "Hinchazón ocasional de la articulación",
  "Debilidad en los músculos alrededor de la articulación"
];

const treatments = [
  {
    name: "Ácido Hialurónico",
    description: "Mejora la lubricación articular y tiene propiedades antiinflamatorias"
  },
  {
    name: "Corticosteroides", 
    description: "Proporcionan alivio rápido de la inflamación y el dolor"
  },
  {
    name: "Viscosuplementación",
    description: "Restaura las propiedades viscoelásticas del líquido sinovial"
  }
];

export default function OsteoartritisPage() {
  const conditionData = {
    name: "Osteoartritis",
    description: "La osteoartritis es la forma más común de artritis, caracterizada por el desgaste del cartílago articular que causa dolor, rigidez y pérdida de movilidad.",
    symptoms: symptoms,
    treatments: ["Ácido hialurónico", "Corticosteroides", "Viscosuplementación"]
  };

  return (
    <MainLayout
      title="Osteoartritis y Infiltraciones | Infiltra Clínica Mérida"
      description="Tratamiento de osteoartritis con infiltraciones de precisión en Mérida. Conoce los beneficios del ácido hialurónico y corticosteroides para el alivio del dolor articular."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Osteoartritis', url: absoluteUrl('/padecimientos/osteoartritis') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Osteoartritis
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La osteoartritis es la forma más común de artritis. Las infiltraciones de precisión pueden proporcionar alivio significativo y mejorar tu calidad de vida.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Osteoartritis?</h2>
                <p className="text-gray-600 mb-4">
                  La osteoartritis (OA) es una enfermedad degenerativa de las articulaciones que afecta el cartílago, 
                  el tejido resbaladizo que cubre los extremos de los huesos donde se forman las articulaciones.
                </p>
                <p className="text-gray-600 mb-6">
                  A medida que el cartílago se desgasta, los huesos comienzan a rozar entre sí, causando dolor, 
                  rigidez y pérdida de movilidad. Es más común en las articulaciones que soportan peso como 
                  rodillas, caderas y columna vertebral.
                </p>
                
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>Síntomas principales</h3>
                <div className="space-y-2">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check />
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#344D63' }}>
                  Beneficios de las Infiltraciones
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-2xl border border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">¿Sabías que?</strong> Las infiltraciones con ácido hialurónico 
                    pueden proporcionar alivio durante 6-12 meses en muchos pacientes con osteoartritis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Opciones de Tratamiento con Infiltraciones
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 text-slate-800">{treatment.name}</h3>
                  <p className="text-sm text-slate-600">{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#344D63' }}>
                ¿La osteoartritis está limitando tu movilidad?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                No tienes que vivir con dolor constante. Las infiltraciones de precisión pueden ayudarte a 
                recuperar tu calidad de vida y mantenerte activo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="px-6 py-3 rounded-2xl text-white font-medium"
                  style={{ backgroundColor: '#106D78' }}
                >
                  Consultar mi caso
                </a>
                <a
                  href="/tratamientos"
                  className="px-6 py-3 rounded-2xl border border-slate-300 font-medium hover:bg-slate-50"
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
