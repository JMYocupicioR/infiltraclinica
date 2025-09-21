import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import Badge from "@/components/ui/Badge";
import { absoluteUrl } from "@/lib/seo";

export default function NosotrosPage() {
  return (
    <MainLayout
      title="Nosotros | Infiltra Clínica Mérida"
      description="Conoce a nuestro equipo especializado en infiltraciones de precisión. Experiencia médica dedicada al alivio del dolor articular en Mérida, Yucatán."
      breadcrumbs={[{ name: 'Nosotros', url: absoluteUrl('/nosotros') }]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Monograma Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Nosotros
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Somos una clínica hiperespecializada dedicada a infiltraciones de precisión. Combinamos experiencia médica con tecnología de imagen avanzada para ofrecer alternativas efectivas al dolor articular.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4" aria-hidden="true">
                    <span className="text-white text-xl">M</span>
                  </div>
                  <h2 className="text-xl font-semibold text-blue-900">Misión</h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Brindar procedimientos de infiltración guiados con precisión, centrados en la seguridad, la educación del paciente y la coordinación con su equipo médico para lograr alivio articular sostenible.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mr-4" aria-hidden="true">
                    <span className="text-white text-xl">V</span>
                  </div>
                  <h2 className="text-xl font-semibold text-emerald-900">Visión</h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Ser la referencia en el sureste mexicano para infiltraciones de precisión, ofreciendo protocolos basados en evidencia y experiencias humanas que inspiren confianza y resultados medibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Equipo clínico dedicado</h2>
                <p className="mt-3 text-slate-600">
                  Nuestro equipo se integra por especialistas en medicina del dolor, rehabilitación y radiología intervencionista. Trabajamos de manera conjunta para planear cada infiltración y dar seguimiento cercano.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><Check /> Valoración clínica completa y revisión de estudios de imagen.</li>
                  <li className="flex gap-3"><Check /> Procedimientos guiados por ultrasonido o fluoroscopía.</li>
                  <li className="flex gap-3"><Check /> Protocolos de bioseguridad y control del dolor.</li>
                  <li className="flex gap-3"><Check /> Reportes para tu médico tratante en menos de 48 horas.</li>
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[{
                  title: 'Tecnología',
                  desc: 'Equipos de imagen y material médico certificados.',
                },
                {
                  title: 'Experiencia',
                  desc: 'Procedimientos realizados diariamente con métricas de calidad.',
                },
                {
                  title: 'Calidez humana',
                  desc: 'Acompañamiento y educación antes y después del procedimiento.',
                },
                {
                  title: 'Seguimiento',
                  desc: 'Plan conjunto con fisioterapia y especialistas remitentes.',
                }].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: '#E6F7FA' }}>
                      <MonoIcon size={20} decorative />
                    </div>
                    <div className="font-semibold" style={{ color: '#344D63' }}>{item.title}</div>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10" style={{ color: '#344D63' }}>
              Valores que guían cada infiltración
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                label: '01',
                title: 'Precisión responsable',
                desc: 'Nos enfocamos en la indicación correcta y la técnica adecuada para cada articulación.',
              },
              {
                label: '02',
                title: 'Transparencia absoluta',
                desc: 'Explicamos riesgos, beneficios y expectativas realistas antes del procedimiento.',
              },
              {
                label: '03',
                title: 'Cuidado integral',
                desc: 'Coordinamos tu rehabilitación y damos seguimiento proactivo a tu evolución.',
              }].map((value) => (
                <div key={value.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Badge>{value.label}</Badge>
                  <h3 className="mt-4 text-xl font-semibold" style={{ color: '#344D63' }}>{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Coordinación con tu médico tratante</h2>
                <p className="mt-3 text-slate-600">
                  Elaboramos reportes con hallazgos clínicos, dosis, técnica utilizada y plan sugerido. Facilitamos la comunicación con tu médico remitente para que el tratamiento conserve continuidad.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><Check /> Reportes digitales en menos de 48 horas.</li>
                  <li className="flex gap-3"><Check /> Disponibilidad para juntas clínicas bajo solicitud.</li>
                  <li className="flex gap-3"><Check /> Protocolos de seguimiento telefónico y por WhatsApp.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <h3 className="text-xl font-semibold" style={{ color: '#344D63' }}>¿Eres médico remitente?</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Podemos integrarnos como parte de tu equipo. Agenda una sesión para revisar casos y acordar protocolos de acción conjuntos.
                </p>
                <a
                  href="mailto:contacto@infiltraclinicamerida.com"
                  className="inline-flex mt-6 px-4 py-2 rounded-2xl text-white"
                  style={{ backgroundColor: '#106D78' }}
                >
                  Agenda sesión clínica
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
