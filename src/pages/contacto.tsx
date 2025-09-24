import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo";

export default function ContactoPage() {
  return (
    <MainLayout
      title="Contacto | Infiltra Clínica Mérida"
      description="Contáctanos para agendar tu cita de infiltraciones de precisión en Mérida, Yucatán. WhatsApp, teléfono y ubicación disponibles."
      breadcrumbs={[{ name: 'Contacto', url: absoluteUrl('/contacto') }]}
    >
      <main className="bg-white text-gray-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} ariaLabel="Isotipo Infiltra Clínica" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Contacto
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estamos aquí para atenderte. Agenda tu cita, resuelve tus dudas o solicita información sobre nuestros tratamientos especializados de infiltraciones de precisión.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold" style={{ color: '#106D78' }}>WhatsApp</h2>
                <p className="mt-2 text-sm text-slate-600">Respuesta el mismo día en horario laboral.</p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="mt-4 inline-flex px-4 py-2 rounded-2xl bg-green-500 text-white text-sm"
                >
                  Enviar mensaje
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25h-15c-1.243 0-2.25-1.007-2.25-2.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 7.8 5.85a1.125 1.125 0 0 0 1.35 0L20 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold" style={{ color: '#344D63' }}>Correo</h2>
                <p className="mt-2 text-sm text-slate-600">Envíanos estudios, dudas o solicitudes de coordinación.</p>
                <a
                  href="mailto:contacto@infiltraclinicamerida.com"
                  className="mt-4 inline-flex px-4 py-2 rounded-2xl bg-blue-500 text-white text-sm"
                >
                  Escribir correo
                </a>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold" style={{ color: '#1f2937' }}>Ubicación</h2>
                <p className="mt-2 text-sm text-slate-600">Mérida, Yucatán. Compartimos la dirección exacta al agendar.</p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="mt-4 inline-flex px-4 py-2 rounded-2xl border border-slate-300 text-sm"
                >
                  Solicitar ubicación
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>Horarios de atención</h2>
                <p className="mt-3 text-sm text-slate-600">
                  Atendemos con cita previa y espacios limitados para mantener la calidad asistencial.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><Check /> Lunes a viernes: 09:00 – 19:00 hrs.</li>
                  <li className="flex gap-2"><Check /> Sábados: 09:00 – 13:00 hrs (agenda anticipada).</li>
                  <li className="flex gap-2"><Check /> Emergencias y seguimiento: línea directa vía WhatsApp.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
                <h3 className="text-xl font-semibold" style={{ color: '#344D63' }}>Chat en vivo disponible</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Tenemos un asistente virtual disponible las 24 horas para resolver tus dudas y ayudarte a agendar tu cita. Búscalo en la esquina inferior derecha de la pantalla.
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-800">Asistente disponible ahora</span>
                  </div>
                  <p className="mt-2 text-xs text-blue-600">
                    Haz clic en el chat para obtener respuestas inmediatas sobre tratamientos, horarios y agendar citas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
