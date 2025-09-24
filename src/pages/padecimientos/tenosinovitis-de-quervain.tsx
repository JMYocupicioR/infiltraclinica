import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl, medicalConditionJsonLd } from "@/lib/seo";
import Head from "next/head";

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
  const pageUrl = absoluteUrl('/padecimientos/tenosinovitis-de-quervain');
  const imageUrl = absoluteUrl('/tenosinovitis-quervain.png');
  
  const conditionData = {
    name: "Tenosinovitis de De Quervain",
    description: "La tenosinovitis de De Quervain es una condición dolorosa que afecta los tendones del lado del pulgar de la muñeca, causada por la inflamación de la vaina tendinosa que los recubre.",
    symptoms: symptoms,
    treatments: ["Infiltraciones con corticosteroides", "Infiltraciones guiadas por ecografía", "Reposo relativo", "Férula de inmovilización"]
  };

  // Datos estructurados adicionales para mejor SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tenosinovitis de De Quervain: Tratamiento con Infiltraciones",
    "description": "Información completa sobre la tenosinovitis de De Quervain, síntomas, diagnóstico y tratamiento con infiltraciones de precisión en Mérida, Yucatán.",
    "url": pageUrl,
    "image": imageUrl,
    "inLanguage": "es-MX",
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "MedicalOrganization",
      "name": "Infiltra Clínica",
      "url": SITE_CONFIG.siteUrl
    },
    "publisher": {
      "@type": "MedicalOrganization", 
      "name": "Infiltra Clínica",
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl("/favicon.svg")
      }
    },
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Tenosinovitis de De Quervain",
      "alternateName": ["Pulgar de WhatsApp", "Tendinitis del pulgar", "Síndrome de De Quervain"],
      "description": conditionData.description,
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tendones del pulgar y muñeca"
      },
      "signOrSymptom": symptoms.map(symptom => ({
        "@type": "MedicalSignOrSymptom",
        "name": symptom
      })),
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Infiltraciones con corticosteroides guiadas por imagen"
      }
    }
  };

  return (
    <MainLayout
      title="Tenosinovitis de De Quervain: Tratamiento con Infiltraciones | Infiltra Clínica Mérida"
      description="Tratamiento especializado para tenosinovitis de De Quervain (pulgar de WhatsApp) con infiltraciones de precisión en Mérida. Alivio efectivo del dolor de pulgar y muñeca con 90% de efectividad. Consulta especializada."
      image="/tenosinovitis-quervain.png"
      canonical={absoluteUrl('/padecimientos/tenosinovitis-de-quervain')}
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') },
        { name: 'Tenosinovitis de De Quervain', url: absoluteUrl('/padecimientos/tenosinovitis-de-quervain') }
      ]}
      structuredData={[medicalConditionJsonLd(conditionData), articleStructuredData]}
    >
      <Head>
        {/* Metadatos adicionales para SEO */}
        <meta name="keywords" content="tenosinovitis de quervain, pulgar whatsapp, dolor pulgar, infiltraciones merida, tendinitis pulgar, dolor muñeca, tratamiento quervain, infiltraciones corticosteroides, dolor tendones pulgar" />
        <meta name="author" content="Infiltra Clínica" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph mejorado para Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tenosinovitis de De Quervain: Tratamiento con Infiltraciones | Infiltra Clínica" />
        <meta property="og:description" content="Tratamiento especializado para tenosinovitis de De Quervain (pulgar de WhatsApp) con infiltraciones de precisión en Mérida. Alivio efectivo del dolor con 90% de efectividad." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Anatomía de la tenosinovitis de De Quervain mostrando inflamación de tendones del pulgar" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Infiltra Clínica" />
        <meta property="og:locale" content="es_MX" />
        <meta property="article:author" content="Infiltra Clínica" />
        <meta property="article:section" content="Salud" />
        <meta property="article:tag" content="tenosinovitis, dolor pulgar, infiltraciones, tratamiento" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenosinovitis de De Quervain: Tratamiento Efectivo" />
        <meta name="twitter:description" content="Tratamiento especializado para dolor de pulgar con infiltraciones de precisión. 90% de efectividad en Mérida." />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Anatomía de la tenosinovitis de De Quervain" />
        
        {/* Metadatos médicos específicos */}
        <meta name="medical-condition" content="Tenosinovitis de De Quervain" />
        <meta name="treatment-type" content="Infiltraciones con corticosteroides" />
        <meta name="specialty" content="Medicina del Dolor, Reumatología" />
        <meta name="location" content="Mérida, Yucatán, México" />
        
        {/* Schema.org adicional para imagen */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "url": imageUrl,
              "name": "Anatomía de la tenosinovitis de De Quervain",
              "description": "Ilustración médica mostrando la inflamación de los tendones del pulgar en la tenosinovitis de De Quervain",
              "width": "800",
              "height": "600",
              "encodingFormat": "image/png"
            })
          }}
        />
      </Head>
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
                <div className="mb-8">
                  <img 
                    src="/tenosinovitis-quervain.png" 
                    alt="Anatomía de la tenosinovitis de De Quervain mostrando inflamación de tendones del pulgar"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg border border-slate-200"
                    width="400"
                    height="300"
                    loading="eager"
                  />
                  <p className="text-xs text-slate-500 text-center mt-2">
                    Ilustración anatómica de la tenosinovitis de De Quervain
                  </p>
                </div>
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
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#344D63' }}>
              Video Educativo: ¿Qué es la Tenosinovitis de De Quervain?
            </h2>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <p className="text-center text-gray-600 mb-6">
                  Nuestro especialista explica de manera clara y sencilla qué es la tenosinovitis de De Quervain, 
                  sus síntomas principales y cómo las infiltraciones pueden ayudarte a recuperar la función normal de tu mano.
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61579559341262%2Fvideos%2F1358041189278198%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0 }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Video educativo sobre Tenosinovitis de De Quervain"
                    className="rounded-2xl"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.facebook.com/61579559341262/videos/1358041189278198"
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
