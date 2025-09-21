import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Reducción significativa del dolor en actividades cotidianas",
  "Mejora de la función para subir y bajar escaleras",
  "Reducción de la sensación de inestabilidad de la rodilla",
  "Mejora del rendimiento deportivo y capacidad para correr",
  "Disminución de la inflamación alrededor de la rótula",
  "Facilitación de la rehabilitación y fortalecimiento muscular"
];

const symptoms = [
  "Dolor alrededor o detrás de la rótula (choquezuela)",
  "Dolor que empeora al subir o bajar escaleras",
  "Molestia al permanecer sentado por períodos prolongados",
  "Sensación de crujido o chasquido en la rodilla al moverse",
  "Dolor durante actividades como correr, saltar o ponerse en cuclillas",
  "Sensación de inestabilidad o 'cedimiento' de la rodilla"
];

const riskFactors = [
  {
    category: "Anatómicos",
    factors: ["Desalineación de la rótula", "Diferencia en longitud de piernas", "Pie plano o arco alto"]
  },
  {
    category: "Musculares", 
    factors: ["Debilidad del cuádriceps", "Desequilibrio muscular", "Tensión en músculos de la cadera"]
  },
  {
    category: "Actividad",
    factors: ["Deportes de alto impacto", "Aumento súbito de actividad", "Técnica inadecuada de entrenamiento"]
  }
];

export default function SindromeFemorpatelarPage() {
  const conditionData = {
    name: "Síndrome Femoropatelar",
    description: "El síndrome femoropatelar es una condición común que causa dolor alrededor o detrás de la rótula, especialmente durante actividades que involucran flexión de la rodilla.",
    symptoms: symptoms,
    treatments: ["Infiltraciones periarticulares", "Ácido hialurónico", "Corticosteroides", "Fisioterapia especializada"]
  };

  return (
    <MainLayout
      title="Síndrome Femoropatelar | Infiltraciones para Dolor de Rodilla"
      description="Tratamiento del síndrome femoropatelar con infiltraciones de precisión. Alivio del dolor de rótula y mejora de la función en deportistas y pacientes activos en Mérida."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Síndrome Femoropatelar', url: absoluteUrl('/padecimientos/sindrome-femoropatelar') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Síndrome Femoropatelar
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Una de las causas más comunes de dolor de rodilla en deportistas y personas activas. Las infiltraciones pueden proporcionar alivio efectivo cuando los tratamientos conservadores no son suficientes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es el Síndrome Femoropatelar?</h2>
                <p className="text-gray-600 mb-4">
                  El síndrome femoropatelar, también conocido como "rodilla del corredor", es una condición 
                  que causa dolor alrededor o detrás de la rótula (patela) debido a problemas en el 
                  movimiento de esta sobre el fémur.
                </p>
                <p className="text-gray-600 mb-6">
                  Esta condición es especialmente común en atletas jóvenes, corredores y personas que 
                  practican deportes que involucran saltos, pero también puede afectar a personas 
                  sedentarias con factores de riesgo específicos.
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

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-yellow-50 to-amber-50 p-8">
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
                <div className="mt-8 p-4 bg-white rounded-2xl border border-yellow-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Para deportistas:</strong> Las infiltraciones pueden 
                    permitir el retorno más rápido a la actividad deportiva cuando se combinan con 
                    un programa de rehabilitación adecuado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Factores de Riesgo
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {riskFactors.map((category, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-slate-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex gap-2 items-start">
                        <Check />
                        <span className="text-sm text-slate-600">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-gradient-to-r from-slate-50 to-yellow-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#344D63' }}>
                    ¿Cuándo considerar infiltraciones?
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong className="text-gray-800">Tratamiento conservador fallido:</strong> Cuando 
                      fisioterapia, modificación de actividades y antiinflamatorios no han sido efectivos.
                    </p>
                    <p>
                      <strong className="text-gray-800">Dolor persistente:</strong> Síntomas que duran más 
                      de 6-8 semanas a pesar del tratamiento adecuado.
                    </p>
                    <p>
                      <strong className="text-gray-800">Limitación funcional:</strong> Cuando el dolor 
                      interfiere significativamente con actividades cotidianas o deportivas.
                    </p>
                    <p>
                      <strong className="text-gray-800">Atletas competitivos:</strong> Para acelerar 
                      el retorno seguro a la competición cuando está justificado médicamente.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                      <MonoIcon size={48} decorative />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#344D63' }}>
                    ¿Dolor persistente en la rodilla?
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    No dejes que el síndrome femoropatelar limite tu actividad. 
                    Una evaluación especializada puede identificar el tratamiento más efectivo.
                  </p>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    className="inline-flex px-6 py-3 rounded-2xl text-white font-medium"
                    style={{ backgroundColor: '#106D78' }}
                  >
                    Evaluar mi caso
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
