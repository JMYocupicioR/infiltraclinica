import MainLayout from "@/layout/MainLayout";
import { useEffect, useState } from "react";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";

const benefits = [
  "Alivio significativo del dolor en reposo y movimiento",
  "Mejora gradual del rango de movimiento articular",
  "ReducciÃ³n de la rigidez matutina",
  "FacilitaciÃ³n del proceso de rehabilitaciÃ³n",
  "PrevenciÃ³n de complicaciones por inmovilidad prolongada",
  "Mejora de la calidad del sueÃ±o al reducir el dolor nocturno"
];

const symptoms = [
  "Dolor profundo en el hombro que empeora por las noches",
  "PÃ©rdida progresiva del rango de movimiento",
  "Dificultad para levantar el brazo por encima del hombro",
  "Dolor al intentar alcanzar objetos o vestirse",
  "Rigidez articular severa, especialmente en las maÃ±anas",
  "SensaciÃ³n de hombro 'congelado' o bloqueado"
];

const phases = [
  {
    name: "Fase de CongelaciÃ³n",
    duration: "2-9 meses",
    description: "Dolor intenso y progresiva pÃ©rdida de movilidad. El dolor puede ser severo incluso en reposo."
  },
  {
    name: "Fase Congelada", 
    duration: "4-12 meses",
    description: "El dolor puede disminuir, pero la rigidez persiste. El movimiento estÃ¡ muy limitado."
  },
  {
    name: "Fase de DescongelaciÃ³n",
    duration: "5-24 meses",
    description: "Gradual recuperaciÃ³n del movimiento. La fisioterapia es crucial en esta etapa."
  }
];

export default function CapsulitisAdesivaPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  const conditionData = {
    name: "Capsulitis Adhesiva",
    description: "La capsulitis adhesiva, conocida como hombro congelado, es una condiciÃ³n que causa dolor y rigidez progresiva en la articulaciÃ³n del hombro.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones intraarticulares", "Fisioterapia guiada"]
  };

  return (
    <MainLayout
      title="Capsulitis Adhesiva (Hombro Congelado) | Infiltra ClÃ­nica"
      description="Tratamiento especializado para capsulitis adhesiva con infiltraciones de precisiÃ³n. Alivio del dolor y recuperaciÃ³n de la movilidad del hombro congelado en MÃ©rida."
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
                <MonoIcon size={80} ariaLabel="Monograma Infiltra ClÃ­nica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Capsulitis Adhesiva
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                TambiÃ©n conocida como "hombro congelado", la capsulitis adhesiva causa dolor intenso y pÃ©rdida progresiva de movilidad. Las infiltraciones pueden acelerar significativamente la recuperaciÃ³n.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>Â¿QuÃ© es la Capsulitis Adhesiva?</h2>
                <p className="text-gray-600 mb-4">
                  La capsulitis adhesiva es una condiciÃ³n en la que la cÃ¡psula articular del hombro se inflama 
                  y se vuelve rÃ­gida, limitando severamente el movimiento y causando dolor significativo.
                </p>
                <p className="text-gray-600 mb-6">
                  Esta condiciÃ³n afecta aproximadamente al 2-5% de la poblaciÃ³n general, siendo mÃ¡s comÃºn en 
                  personas entre 40-60 aÃ±os. Las mujeres tienen mayor predisposiciÃ³n que los hombres.
                </p>
                
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>SÃ­ntomas principales</h3>
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
                    temprana pueden reducir significativamente la duraciÃ³n total del proceso, de 18-24 meses 
                    a 6-12 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Video educativo: Omalgia y hombro congelado
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <p className="text-center text-gray-600 mb-6">
                  Nuestro especialista explica como reconocer la omalgia ligada a la capsulitis adhesiva, los signos de alarma y como las infiltraciones guiadas pueden devolver el movimiento del hombro.
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 min-h-[300px]">
                  {isClient ? (
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61579559341262%2Fvideos%2F1341538360894181%2F&show_text=false&width=560&t=0"
                      width="100%"
                      height="100%"
                      style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Video educativo sobre omalgia"
                      className="rounded-2xl"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-pulse mb-4">
                          <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4"></div>
                          <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
                          <div className="h-4 bg-slate-200 rounded w-2/4 mx-auto"></div>
                        </div>
                        <p className="text-slate-500">Cargando video educativo...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.facebook.com/61579559341262/videos/1341538360894181/"
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
                      DuraciÃ³n: {phase.duration}
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
                  <strong className="text-gray-800">IntervenciÃ³n oportuna:</strong> Las infiltraciones en las 
                  primeras etapas pueden interrumpir el proceso inflamatorio y prevenir la formaciÃ³n 
                  de adherencias severas.
                </p>
                <p>
                  <strong className="text-gray-800">Dolor nocturno:</strong> Una de las principales quejas 
                  es el dolor que interrumpe el sueÃ±o. Las infiltraciones proporcionan alivio rÃ¡pido 
                  de este sÃ­ntoma.
                </p>
                <p>
                  <strong className="text-gray-800">FunciÃ³n laboral:</strong> La pÃ©rdida de movilidad puede 
                  afectar significativamente las actividades laborales y domÃ©sticas.
                </p>
                <p>
                  <strong className="text-gray-800">RehabilitaciÃ³n efectiva:</strong> Al controlar el dolor 
                  e inflamaciÃ³n, se facilita la participaciÃ³n activa en fisioterapia.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#344D63' }}>
                Â¿Tienes sÃ­ntomas de hombro congelado?
              </h3>
              <p className="text-gray-600 mb-6">
                No esperes a que la rigidez sea severa. La intervenciÃ³n temprana con infiltraciones 
                puede cambiar significativamente el curso de esta condiciÃ³n.
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



