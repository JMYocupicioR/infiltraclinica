import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Alivio rápido del dolor e inflamación",
  "Recuperación de la función normal del movimiento",
  "Evita la cronicidad de la inflamación",
  "Permite retomar actividades cotidianas sin dolor",
  "Reducción significativa de la hinchazón",
  "Mejora del rango de movimiento articular"
];

const symptoms = [
  "Dolor intenso en el área afectada, especialmente al mover la articulación",
  "Hinchazón visible alrededor de la articulación",
  "Sensibilidad al tacto en la zona inflamada",
  "Rigidez articular, especialmente en las mañanas",
  "Dolor que empeora por las noches",
  "Limitación para realizar movimientos específicos"
];

const affectedAreas = [
  {
    name: "Bursitis Subacromial (Hombro)",
    description: "La más común en el hombro, causa dolor al levantar el brazo por encima de la cabeza"
  },
  {
    name: "Bursitis Trocantérica (Cadera)", 
    description: "Genera dolor en la parte externa de la cadera que puede irradiar hacia el muslo"
  },
  {
    name: "Bursitis Prerrotuliana (Rodilla)",
    description: "Conocida como 'rodilla de empleada doméstica', común en personas que se arrodillan frecuentemente"
  }
];

export default function BursitisPage() {
  const conditionData = {
    name: "Bursitis",
    description: "La bursitis es la inflamación de las bursas, pequeñas bolsas llenas de líquido que actúan como cojines entre huesos, tendones y músculos.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones guiadas por ecografía", "Drenaje de bursa inflamada"]
  };

  return (
    <MainLayout
      title="Bursitis y Infiltraciones | Infiltra Clínica Mérida"
      description="Tratamiento efectivo para bursitis con infiltraciones guiadas en Mérida. Alivio del dolor e inflamación en hombro, cadera y rodilla con seguimiento especializado."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Bursitis', url: absoluteUrl('/padecimientos/bursitis') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData)]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Bursitis
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La bursitis puede causar dolor intenso y limitar tus actividades diarias. Las infiltraciones de precisión ofrecen alivio efectivo y duradero.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Bursitis?</h2>
                <p className="text-gray-600 mb-4">
                  La bursitis es la inflamación de las bursas, pequeñas bolsas llenas de líquido que actúan como 
                  cojines entre huesos, tendones, músculos y piel cerca de las articulaciones.
                </p>
                <p className="text-gray-600 mb-6">
                  Cuando estas bursas se inflaman, causan dolor, rigidez e hinchazón. La bursitis puede ser aguda 
                  (de aparición súbita) o crónica (de larga duración), y afecta comúnmente al hombro, cadera, 
                  codo y rodilla.
                </p>
                
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>Síntomas de alerta</h3>
                <div className="space-y-2">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check />
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
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
                <div className="mt-8 p-4 bg-white rounded-2xl border border-green-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Importante:</strong> Las infiltraciones para bursitis 
                    suelen mostrar mejoría en las primeras 48-72 horas del tratamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Tipos de Bursitis que Tratamos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {affectedAreas.map((area, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 text-slate-800">{area.name}</h3>
                  <p className="text-sm text-slate-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
                ¿Por qué elegir infiltraciones?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Acción directa:</strong> El medicamento se aplica exactamente 
                  donde está la inflamación, proporcionando alivio más efectivo que los medicamentos orales.
                </p>
                <p>
                  <strong className="text-gray-800">Menos efectos secundarios:</strong> Al aplicar el tratamiento 
                  localmente, se minimiza el impacto en el resto del cuerpo.
                </p>
                <p>
                  <strong className="text-gray-800">Resultados rápidos:</strong> La mayoría de los pacientes 
                  experimenta alivio significativo en los primeros días posteriores al procedimiento.
                </p>
                <p>
                  <strong className="text-gray-800">Guiadas por imagen:</strong> Utilizamos ecografía para 
                  asegurar la precisión del procedimiento y maximizar los resultados.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                ¿Tienes síntomas de bursitis?
              </h3>
              <p className="text-gray-600 mb-6">
                No esperes a que el dolor se vuelva crónico. Una evaluación temprana puede prevenir 
                complicaciones y acelerar tu recuperación.
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="inline-flex px-6 py-3 rounded-2xl text-white font-medium w-full justify-center"
                style={{ backgroundColor: '#106D78' }}
              >
                Agendar evaluación
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
