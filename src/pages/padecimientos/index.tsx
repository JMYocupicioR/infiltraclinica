import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import { absoluteUrl } from "@/lib/seo";

const conditions = [
  {
    name: "Osteoartritis",
    slug: "osteoartritis",
    description: "Desgaste del cartílago articular que causa dolor y rigidez",
    commonAreas: ["Rodilla", "Cadera", "Columna"],
    color: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  {
    name: "Bursitis", 
    slug: "bursitis",
    description: "Inflamación de las bolsas que amortiguan las articulaciones",
    commonAreas: ["Hombro", "Cadera", "Rodilla"],
    color: "from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  {
    name: "Tendinitis",
    slug: "tendinitis", 
    description: "Inflamación de los tendones por uso excesivo o lesión",
    commonAreas: ["Hombro", "Codo", "Muñeca"],
    color: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200"
  },
  {
    name: "Capsulitis Adhesiva",
    slug: "capsulitis-adhesiva",
    description: "Rigidez y dolor progresivo en la articulación del hombro",
    commonAreas: ["Hombro"],
    color: "from-orange-50 to-red-50", 
    borderColor: "border-orange-200"
  },
  {
    name: "Síndrome Femoropatelar",
    slug: "sindrome-femoropatelar",
    description: "Dolor alrededor de la rótula por desalineación o sobrecarga",
    commonAreas: ["Rodilla"],
    color: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200"
  },
  {
    name: "Dolor Radicular",
    slug: "dolor-radicular",
    description: "Dolor que se irradia desde la columna hacia brazos o piernas",
    commonAreas: ["Columna cervical", "Columna lumbar"],
    color: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200"
  },
  {
    name: "Tenosinovitis de De Quervain",
    slug: "tenosinovitis-de-quervain",
    description: "Inflamación dolorosa de los tendones del pulgar, muy común en la era digital",
    commonAreas: ["Muñeca", "Pulgar"],
    color: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200"
  },
  {
    name: "Gonartrosis",
    slug: "gonartrosis",
    description: "Artrosis específica de rodilla, una de las causas más comunes de dolor y limitación funcional",
    commonAreas: ["Rodilla"],
    color: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200"
  }
];

export default function PadecimientosIndexPage() {
  return (
    <MainLayout
      title="Padecimientos Tratados con Infiltraciones | Infiltra Clínica"
      description="Conoce los padecimientos que tratamos con infiltraciones de precisión: osteoartritis, bursitis, tendinitis, capsulitis adhesiva y más. Información médica especializada."
      breadcrumbs={[
        { name: 'Padecimientos', url: absoluteUrl('/padecimientos') }
      ]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Padecimientos
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conoce las condiciones que tratamos con infiltraciones de precisión. Información detallada sobre síntomas, tratamientos y beneficios para cada padecimiento.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((condition) => (
                <a
                  key={condition.slug}
                  href={`/padecimientos/${condition.slug}`}
                  className={`block rounded-3xl border ${condition.borderColor} p-6 bg-gradient-to-br ${condition.color} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <h2 className="text-xl font-semibold mb-3" style={{ color: '#344D63' }}>
                    {condition.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {condition.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Áreas comunes:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {condition.commonAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 border border-gray-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#106D78' }}>
                    Ver información completa →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#344D63' }}>
              ¿No encuentras tu condición?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tratamos muchas otras condiciones articulares y musculares. Si tienes dolor persistente 
              en articulaciones, músculos o tendones, contáctanos para una evaluación personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="px-6 py-3 rounded-2xl text-white font-medium"
                style={{ backgroundColor: '#106D78' }}
              >
                Consultar mi caso
              </a>
              <a
                href="/tratamientos"
                className="px-6 py-3 rounded-2xl border border-slate-300 font-medium hover:bg-slate-50"
              >
                Ver todos los tratamientos
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
