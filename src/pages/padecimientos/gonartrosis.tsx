import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";
import { useEffect, useState } from 'react';

const benefits = [
  "Alivio significativo del dolor de rodilla al caminar y subir escaleras",
  "Mejora de la movilidad y flexibilidad articular",
  "Retraso en la progresión del desgaste cartilaginoso",
  "Reducción de la rigidez matutina y nocturna",
  "Mejora de la calidad de vida y capacidad para actividades cotidianas",
  "Alternativa efectiva antes de considerar cirugía de reemplazo"
];

const symptoms = [
  "Dolor progresivo en la rodilla que empeora con la actividad",
  "Rigidez articular, especialmente por las mañanas",
  "Crepitación (ruidos) al mover la rodilla",
  "Hinchazón intermitente de la rodilla",
  "Dificultad para subir y bajar escaleras",
  "Sensación de inestabilidad o 'cedimiento' de la rodilla",
  "Dolor que mejora con el reposo"
];

const stages = [
  {
    grade: "Grado I",
    description: "Leve",
    characteristics: ["Dolor ocasional", "Cartílago ligeramente rugoso", "Sin limitación funcional significativa"]
  },
  {
    grade: "Grado II", 
    description: "Moderado",
    characteristics: ["Dolor más frecuente", "Estrechamiento del espacio articular", "Rigidez matutina"]
  },
  {
    grade: "Grado III",
    description: "Severo",
    characteristics: ["Dolor constante", "Deformidad articular", "Limitación funcional importante"]
  },
  {
    grade: "Grado IV",
    description: "Muy Severo",
    characteristics: ["Dolor en reposo", "Pérdida completa del cartílago", "Candidato a reemplazo articular"]
  }
];

export default function GonartriosisPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Reinitialize Facebook SDK when component mounts
    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  const conditionData = {
    name: "Gonartrosis",
    description: "La gonartrosis es el término médico específico para la osteoartritis de rodilla, caracterizada por el desgaste progresivo del cartílago articular que causa dolor, rigidez y pérdida de función.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con ácido hialurónico", "Corticosteroides intraarticulares", "Viscosuplementación", "Infiltraciones ecoguiadas"]
  };

  return (
    <MainLayout
      title="Gonartrosis (Artrosis de Rodilla) | Infiltra Clínica Mérida"
      description="Tratamiento especializado para gonartrosis con infiltraciones de precisión en Mérida. Alivio del dolor de rodilla y mejora de la movilidad con ácido hialurónico."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Gonartrosis', url: absoluteUrl('/padecimientos/gonartrosis') }
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
                Gonartrosis
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La gonartrosis es la forma más común de artritis que afecta la rodilla. Las infiltraciones especializadas pueden proporcionar alivio significativo y mejorar tu movilidad.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Video Educativo: Entendiendo la Gonartrosis
            </h2>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <p className="text-center text-gray-600 mb-6">
                  Nuestro especialista explica qué es la gonartrosis, sus grados de severidad y cómo las infiltraciones 
                  pueden ayudarte a mantener una vida activa sin dolor de rodilla.
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 min-h-[300px]">
                  {isClient ? (
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1G6kHwehMd%2F&show_text=false&width=560&t=0"
                      width="100%"
                      height="100%"
                      style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Video educativo sobre Gonartrosis"
                      className="rounded-2xl"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-pulse mb-4">
                          <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4"></div>
                        </div>
                        <p className="text-slate-500">Cargando video educativo...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.facebook.com/share/v/1G6kHwehMd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800"
                  >
                    Ver en Facebook
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
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>¿Qué es la Gonartrosis?</h2>
                <p className="text-gray-600 mb-4">
                  La gonartrosis es el término médico específico para la **osteoartritis de rodilla**. 
                  Es una enfermedad degenerativa que afecta el cartílago articular de la rodilla, 
                  causando dolor, rigidez y limitación funcional.
                </p>
                <p className="text-gray-600 mb-6">
                  La rodilla es una articulación compleja que soporta el peso corporal y permite 
                  movimientos esenciales como caminar, subir escaleras y ponerse de pie. Cuando 
                  el cartílago se desgasta, los huesos pueden rozar entre sí, causando dolor 
                  significativo.
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
                    <strong className="text-gray-800">Efectividad comprobada:</strong> Las infiltraciones con 
                    ácido hialurónico pueden proporcionar alivio durante 6-12 meses en el 70-80% 
                    de pacientes con gonartrosis leve a moderada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Grados de Gonartrosis
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-2">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-slate-800">{stage.grade}</h3>
                    <span className="text-sm text-slate-500">{stage.description}</span>
                  </div>
                  <ul className="space-y-1">
                    {stage.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="text-xs text-slate-600 flex gap-1">
                        <span className="text-blue-500">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
                ¿Por qué elegir infiltraciones para gonartrosis?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-800">Tratamiento dirigido:</strong> Las infiltraciones colocan 
                  el medicamento exactamente donde se necesita, en el espacio articular de la rodilla.
                </p>
                <p>
                  <strong className="text-gray-800">Ácido hialurónico:</strong> Actúa como lubricante 
                  natural, mejorando la viscosidad del líquido sinovial y reduciendo la fricción.
                </p>
                <p>
                  <strong className="text-gray-800">Menos efectos sistémicos:</strong> Al aplicar el 
                  tratamiento localmente, se minimizan los efectos secundarios en comparación 
                  con medicamentos orales.
                </p>
                <p>
                  <strong className="text-gray-800">Mejores candidatos:</strong> Especialmente efectivo 
                  en gonartrosis grado I-III, antes de que sea necesario el reemplazo articular.
                </p>
              </div>
            </div>
            
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                ¿Dolor de rodilla que limita tu movilidad?
              </h3>
              <p className="text-gray-600 mb-6">
                No esperes a que la gonartrosis avance. Una evaluación temprana y el tratamiento 
                adecuado pueden ayudarte a mantener una vida activa por más tiempo.
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
                  <strong>Recomendación:</strong> La gonartrosis temprana (grado I-II) responde mejor 
                  a las infiltraciones con ácido hialurónico.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
