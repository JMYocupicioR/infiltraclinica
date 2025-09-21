import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Reducción significativa del dolor y la inflamación",
  "Promoción de la curación del tendón dañado",
  "Mejora de la función y movilidad articular",
  "Prevención de la progresión a tendinitis crónica",
  "Retorno más rápido a las actividades deportivas y laborales",
  "Reducción de la necesidad de cirugía"
];

const symptoms = [
  "Dolor localizado en el tendón que empeora con el movimiento",
  "Rigidez, especialmente en las mañanas",
  "Hinchazón leve a moderada en el área afectada",
  "Sensación de crujido al mover el tendón",
  "Debilidad en el músculo asociado al tendón",
  "Dolor que puede irradiarse hacia áreas cercanas"
];

const commonTypes = [
  {
    name: "Tendinitis del Manguito Rotador",
    location: "Hombro",
    description: "Afecta los tendones que estabilizan el hombro, causando dolor al levantar el brazo"
  },
  {
    name: "Tendinitis Bicipital", 
    location: "Hombro/Brazo",
    description: "Inflamación del tendón del bíceps, común en atletas que realizan movimientos repetitivos por encima de la cabeza"
  },
  {
    name: "Tendinitis de Psoas",
    location: "Cadera",
    description: "Afecta el músculo flexor de la cadera, causando dolor en la ingle y dificultad para caminar"
  },
  {
    name: "Tendinitis Rotuliana",
    location: "Rodilla", 
    description: "También conocida como 'rodilla del saltador', común en deportistas"
  }
];

export default function TendinitisPage() {
  const conditionData = {
    name: "Tendinitis",
    description: "La tendinitis es la inflamación o irritación de un tendón, las cuerdas fibrosas que conectan los músculos con los huesos.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones peritendinosas", "Rehabilitación guiada"]
  };

  return (
    <MainLayout
      title="Tendinitis y Infiltraciones | Infiltra Clínica Mérida"
      description="Tratamiento especializado para tendinitis con infiltraciones de precisión en Mérida. Alivio efectivo para tendinitis de hombro, cadera y rodilla con recuperación acelerada."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Tendinitis', url: absoluteUrl('/padecimientos/tendinitis') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Tendinitis
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La tendinitis puede limitar significativamente tu movilidad y rendimiento. Las infiltraciones de precisión aceleran la curación y restauran la función normal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Tendinitis?</h2>
                <p className="text-gray-600 mb-4">
                  La tendinitis es la inflamación o irritación de un tendón, las cuerdas fibrosas que conectan 
                  los músculos con los huesos. Esta condición puede desarrollarse gradualmente por uso excesivo 
                  o aparecer súbitamente por una lesión.
                </p>
                <p className="text-gray-600 mb-6">
                  Es común en personas que realizan actividades repetitivas, deportistas, y trabajadores que 
                  ejecutan movimientos constantes. Sin tratamiento adecuado, puede volverse crónica y más 
                  difícil de tratar.
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

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
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
                <div className="mt-8 p-4 bg-white rounded-2xl border border-purple-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Efectividad comprobada:</strong> Los estudios muestran 
                    que las infiltraciones con corticosteroides pueden proporcionar alivio del dolor en 
                    85-90% de los casos de tendinitis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Tipos Comunes de Tendinitis
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonTypes.map((type, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-800">{type.name}</h3>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                      {type.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#344D63' }}>
                    Recuperación Acelerada
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Las infiltraciones para tendinitis no solo alivian el dolor, sino que también:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><Check /> Reducen la inflamación local</li>
                    <li className="flex gap-2"><Check /> Mejoran la vascularización del área</li>
                    <li className="flex gap-2"><Check /> Facilitan la reparación del tejido</li>
                    <li className="flex gap-2"><Check /> Permiten iniciar rehabilitación más pronto</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
                      <MonoIcon size={40} decorative />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#344D63' }}>
                    ¿Dolor persistente en tendones?
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    No permitas que la tendinitis se vuelva crónica. 
                    Actúa ahora con un tratamiento especializado.
                  </p>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    className="inline-flex px-6 py-3 rounded-2xl text-white font-medium"
                    style={{ backgroundColor: '#106D78' }}
                  >
                    Consultar mi caso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
