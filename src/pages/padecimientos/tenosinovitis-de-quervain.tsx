import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Alivio rápido del dolor en el lado radial de la muñeca",
  "Reducción significativa de la inflamación de la vaina tendinosa",
  "Mejora de la función del pulgar y prensión",
  "Facilitación de movimientos de pinza y agarre",
  "Evita la necesidad de cirugía (liberación tendinosa)",
  "Retorno a actividades laborales y cotidianas sin dolor"
];

const symptoms = [
  "Dolor intenso en el lado del pulgar de la muñeca",
  "Hinchazón visible en la base del pulgar",
  "Dolor que se intensifica al mover el pulgar o hacer puño",
  "Dificultad para agarrar objetos o hacer movimientos de pinza",
  "Dolor que se irradia hacia el antebrazo",
  "Sensibilidad al tacto sobre los tendones afectados",
  "Chasquido o sensación de atrapamiento al mover el pulgar"
];

const riskFactors = [
  {
    category: "Ocupacionales",
    factors: [
      "Movimientos repetitivos de pulgar y muñeca",
      "Uso prolongado de dispositivos móviles",
      "Actividades que requieren agarre fuerte",
      "Trabajo con herramientas manuales"
    ]
  },
  {
    category: "Demográficos",
    factors: [
      "Mujeres de 30-50 años (8 veces más común)",
      "Período posparto y lactancia",
      "Cambios hormonales",
      "Primera vez como madre (carga repetitiva del bebé)"
    ]
  },
  {
    category: "Actividades",
    factors: [
      "Deportes de raqueta (tenis, squash)",
      "Videojuegos prolongados",
      "Tejido y bordado",
      "Jardinería intensiva"
    ]
  }
];

const diagnosticTests = [
  {
    name: "Test de Finkelstein",
    description: "Maniobra específica que reproduce el dolor característico al cerrar el puño con el pulgar adentro y desviar la muñeca hacia el meñique"
  },
  {
    name: "Palpación directa",
    description: "Dolor exquisito al presionar sobre el primer compartimento dorsal de la muñeca"
  },
  {
    name: "Ecografía",
    description: "Confirma el engrosamiento de la vaina tendinosa y descarta otras patologías"
  }
];

export default function TenosinovitisDeQuervainPage() {
  const conditionData = {
    name: "Tenosinovitis de De Quervain",
    description: "La tenosinovitis de De Quervain es una condición dolorosa que afecta los tendones del lado del pulgar de la muñeca, causada por la inflamación de la vaina tendinosa que los recubre.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones guiadas por ecografía", "Reposo relativo", "Férula de inmovilización"]
  };

  return (
    <MainLayout
      title="Tenosinovitis de De Quervain | Tratamiento con Infiltraciones"
      description="Tratamiento especializado para tenosinovitis de De Quervain con infiltraciones de precisión. Alivio efectivo del dolor de pulgar y muñeca con resultados rápidos en Mérida."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Tenosinovitis de De Quervain', url: absoluteUrl('/padecimientos/tenosinovitis-de-quervain') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Tenosinovitis de De Quervain
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                También conocida como "tendinitis del pulgar" o "WhatsApp thumb", es una condición muy común que causa dolor intenso en la muñeca. Las infiltraciones ofrecen alivio rápido y efectivo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Tenosinovitis de De Quervain?</h2>
                <p className="text-gray-600 mb-4">
                  La tenosinovitis de De Quervain es una condición que afecta específicamente los tendones 
                  **abductor pollicis longus** y **extensor pollicis brevis**, que pasan por el primer 
                  compartimiento dorsal de la muñeca, en el lado del pulgar.
                </p>
                <p className="text-gray-600 mb-4">
                  Cuando estos tendones se inflaman, la vaina que los recubre (sinovial) se engrosa, 
                  creando fricción y dolor intenso con los movimientos del pulgar. Es especialmente 
                  común en mujeres jóvenes y madres primerizas.
                </p>
                <p className="text-gray-600 mb-6">
                  El nombre proviene del cirujano suizo **Fritz de Quervain**, quien describió 
                  esta condición en 1895. En la era digital, también se conoce coloquialmente 
                  como "pulgar de WhatsApp" o "pulgar de smartphone".
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

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8">
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
                <div className="mt-8 p-4 bg-white rounded-2xl border border-indigo-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Efectividad comprobada:</strong> Los estudios muestran 
                    que las infiltraciones con corticosteroides tienen una tasa de éxito del 83-90% 
                    en la tenosinovitis de De Quervain.
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
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex gap-2 items-start">
                        <Check size={14} />
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
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Diagnóstico Especializado
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {diagnosticTests.map((test, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 text-slate-800">{test.name}</h3>
                  <p className="text-sm text-slate-600">{test.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
                ¿Por qué las infiltraciones son tan efectivas?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Acción directa:</strong> El corticosteroide se aplica 
                  exactamente en la vaina tendinosa inflamada, proporcionando alivio inmediato donde 
                  más se necesita.
                </p>
                <p>
                  <strong className="text-gray-800">Reducción rápida de inflamación:</strong> Los 
                  corticosteroides son extremadamente efectivos para reducir la inflamación de 
                  la sinovial engrosada.
                </p>
                <p>
                  <strong className="text-gray-800">Evita la cirugía:</strong> En la mayoría de casos, 
                  una infiltración bien aplicada evita la necesidad de liberación quirúrgica del 
                  primer compartimento.
                </p>
                <p>
                  <strong className="text-gray-800">Procedimiento ambulatorio:</strong> Se realiza en 
                  consulta, sin necesidad de hospitalización o anestesia general.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
                <h3 className="font-semibold text-slate-800 mb-2">Tiempo de recuperación:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>48-72 horas:</strong> Alivio inicial del dolor</li>
                  <li>• <strong>1-2 semanas:</strong> Mejora significativa de la función</li>
                  <li>• <strong>4-6 semanas:</strong> Recuperación completa en mayoría de casos</li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                ¿Dolor en el pulgar que no mejora?
              </h3>
              <p className="text-gray-600 mb-6">
                La tenosinovitis de De Quervain puede volverse crónica si no se trata adecuadamente. 
                Una infiltración temprana puede resolver el problema de forma definitiva.
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
                  Llamar directamente
                </a>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">
                  <strong>Dato clínico:</strong> El 90% de los casos se resuelven con una sola infiltración cuando se diagnostica y trata tempranamente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
