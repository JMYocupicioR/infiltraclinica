import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Alivio significativo del dolor en reposo y movimiento",
  "Mejora gradual del rango de movimiento articular",
  "Reducción de la rigidez matutina",
  "Facilitación del proceso de rehabilitación",
  "Prevención de complicaciones por inmovilidad prolongada",
  "Mejora de la calidad del sueño al reducir el dolor nocturno"
];

const symptoms = [
  "Dolor profundo en el hombro que empeora por las noches",
  "Pérdida progresiva del rango de movimiento",
  "Dificultad para levantar el brazo por encima del hombro",
  "Dolor al intentar alcanzar objetos o vestirse",
  "Rigidez articular severa, especialmente en las mañanas",
  "Sensación de hombro 'congelado' o bloqueado"
];

const phases = [
  {
    name: "Fase de Congelación",
    duration: "2-9 meses",
    description: "Dolor intenso y progresiva pérdida de movilidad. El dolor puede ser severo incluso en reposo."
  },
  {
    name: "Fase Congelada", 
    duration: "4-12 meses",
    description: "El dolor puede disminuir, pero la rigidez persiste. El movimiento está muy limitado."
  },
  {
    name: "Fase de Descongelación",
    duration: "5-24 meses",
    description: "Gradual recuperación del movimiento. La fisioterapia es crucial en esta etapa."
  }
];

export default function CapsulitisAdesivaPage() {
  const conditionData = {
    name: "Capsulitis Adhesiva",
    description: "La capsulitis adhesiva, conocida como hombro congelado, es una condición que causa dolor y rigidez progresiva en la articulación del hombro.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones intraarticulares", "Fisioterapia guiada"]
  };

  return (
    <MainLayout
      title="Capsulitis Adhesiva (Hombro Congelado) | Infiltra Clínica"
      description="Tratamiento especializado para capsulitis adhesiva con infiltraciones de precisión. Alivio del dolor y recuperación de la movilidad del hombro congelado en Mérida."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Capsulitis Adhesiva', url: absoluteUrl('/padecimientos/capsulitis-adhesiva') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Capsulitis Adhesiva
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                También conocida como "hombro congelado", la capsulitis adhesiva causa dolor intenso y pérdida progresiva de movilidad. Las infiltraciones pueden acelerar significativamente la recuperación.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Capsulitis Adhesiva?</h2>
                <p className="text-gray-600 mb-4">
                  La capsulitis adhesiva es una condición en la que la cápsula articular del hombro se inflama 
                  y se vuelve rígida, limitando severamente el movimiento y causando dolor significativo.
                </p>
                <p className="text-gray-600 mb-6">
                  Esta condición afecta aproximadamente al 2-5% de la población general, siendo más común en 
                  personas entre 40-60 años. Las mujeres tienen mayor predisposición que los hombres.
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

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-orange-50 to-red-50 p-8">
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
                <div className="mt-8 p-4 bg-white rounded-2xl border border-orange-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Dato importante:</strong> Las infiltraciones en la fase 
                    temprana pueden reducir significativamente la duración total del proceso, de 18-24 meses 
                    a 6-12 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Fases de la Capsulitis Adhesiva
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-slate-800">{phase.name}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                      Duración: {phase.duration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
                Importancia del Tratamiento Temprano
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Intervención oportuna:</strong> Las infiltraciones en las 
                  primeras etapas pueden interrumpir el proceso inflamatorio y prevenir la formación 
                  de adherencias severas.
                </p>
                <p>
                  <strong className="text-gray-800">Dolor nocturno:</strong> Una de las principales quejas 
                  es el dolor que interrumpe el sueño. Las infiltraciones proporcionan alivio rápido 
                  de este síntoma.
                </p>
                <p>
                  <strong className="text-gray-800">Función laboral:</strong> La pérdida de movilidad puede 
                  afectar significativamente las actividades laborales y domésticas.
                </p>
                <p>
                  <strong className="text-gray-800">Rehabilitación efectiva:</strong> Al controlar el dolor 
                  e inflamación, se facilita la participación activa en fisioterapia.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                ¿Tienes síntomas de hombro congelado?
              </h3>
              <p className="text-gray-600 mb-6">
                No esperes a que la rigidez sea severa. La intervención temprana con infiltraciones 
                puede cambiar significativamente el curso de esta condición.
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
                  href="tel:+529993537967"
                  className="inline-flex px-6 py-3 rounded-2xl border border-slate-300 font-medium w-full justify-center hover:bg-slate-50"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
