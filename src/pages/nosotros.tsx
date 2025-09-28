import MainLayout from "@/layout/MainLayout";
import MonoIcon from "@/components/ui/MonoIcon";
import Check from "@/components/ui/Check";
import Badge from "@/components/ui/Badge";
import LocationMap from "@/components/ui/LocationMap";
import { absoluteUrl, SITE_CONFIG } from "@/lib/seo";

export default function NosotrosPage() {
  return (
    <MainLayout
      title="Nosotros | Infiltra Clínica Mérida"
      description="Conoce a nuestro equipo especializado en infiltraciones de precisión. Experiencia médica dedicada al alivio del dolor articular en Mérida, Yucatán."
      breadcrumbs={[{ name: 'Nosotros', url: absoluteUrl('/nosotros') }]}
    >
      <main className="bg-white text-slate-800">
        {/* Hero Section with Cover Image */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://static.wixstatic.com/media/fc5d1a_46a5fb97b66b4f8c850227d6252fb1b9~mv2.jpg"
              alt="Instalaciones de Infiltra Clínica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <MonoIcon size={48} ariaLabel="Monograma Infiltra Clínica" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Conoce a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                Infiltra Clínica
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Especialistas dedicados a transformar el tratamiento del dolor articular con 
              <span className="text-white font-semibold"> precisión médica excepcional</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Agenda tu cita
              </a>
              <a
                href="#equipo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Conoce al equipo
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Quiénes somos
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#344D63' }}>
                Medicina especializada.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Resultados excepcionales.
                </span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
                Somos una clínica hiperespecializada en infiltraciones de precisión en el sureste mexicano. 
                Combinamos experiencia médica avanzada de rehabilitacion fisica.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#344D63' }}>
                      Nuestra especialidad
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Nos enfocamos exclusivamente en procedimientos de infiltración para el tratamiento de dolor articular, tendones y estructuras periarticulares. Esta hiperespecialización nos permite ofrecer la máxima precisión y seguridad en cada procedimiento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#344D63' }}>
                      Valoracion de especialidad
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Somos un equipo de Médicos especialistas en rehabilitacion fisica especializados en infiltraciones de precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-900">Misión</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Brindar procedimientos de infiltración guiados con precisión excepcional, centrados en la 
                    seguridad del paciente, la educación médica continua y la coordinación integral con el equipo 
                    tratante para lograr alivio articular sostenible y mejorar la calidad de vida.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border border-teal-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-teal-900">Visión</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Ser la referencia líder en el sureste mexicano para infiltraciones de precisión, estableciendo 
                    nuevos estándares de excelencia médica mediante protocolos basados en evidencia científica y 
                    experiencias humanas que inspiren confianza y generen resultados medibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Nuestro equipo
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#344D63' }}>
                Especialistas dedicados a tu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> bienestar</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Nuestro equipo multidisciplinario combina experiencia médica avanzada con un enfoque humano y personalizado
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: '#344D63' }}>
                        Dr. Roberto Carlos Pech Argüelles
                      </h3>
                      <p className="text-teal-600 font-medium">Medicina de Rehabilitación</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Universidad Autónoma de Yucatán (UADY)
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Cédula Profesional: 6539830
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Especialidad: Cédula 8662895
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#344D63' }}>
                        Valoración clínica integral
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Evaluación completa del paciente y revisión detallada de estudios de imagen previos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#344D63' }}>
                        Procedimientos guiados
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Infiltraciones de precisión guiadas por ultrasonido o fluoroscopía según el caso
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#344D63' }}>
                        Seguimiento personalizado
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Reportes médicos detallados y coordinación continua con tu equipo tratante
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                Ubicación
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#344D63' }}>
                Encuéntranos en<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Mérida, Yucatán
                </span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Ubicados estratégicamente en la zona norte de Mérida para tu comodidad y accesibilidad
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: '#344D63' }}>
                        Unidad de Rehabilitación Altabrisa
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Instalaciones modernas equipadas con la más alta tecnología médica para 
                        garantizar procedimientos seguros y efectivos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Horarios</h4>
                    <p className="text-sm text-slate-600">
                      Lunes a viernes<br />
                      9:00 - 19:00 hrs
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Citas</h4>
                    <p className="text-sm text-slate-600">
                      Solo con cita previa<br />
                      Agenda por WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold text-center hover:from-teal-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Agenda tu cita
                  </a>
                  <a
                    href="tel:+529999123456"
                    className="flex-1 px-6 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-semibold text-center hover:border-slate-300 transition-all duration-300"
                  >
                    Llamar ahora
                  </a>
                </div>
              </div>

              <div>
                <LocationMap className="h-96" title="Ubicación de Infiltra Clínica en Mérida" />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Requirements Section */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-6 text-center" style={{ color: '#344D63' }}>
                Información legal y regulatoria
              </h3>
              <div className="prose prose-sm max-w-none text-center text-slate-600">
                <p className="mb-4">
                  <strong>Servicio de infiltraciones.</strong>
                </p>
                <p className="mb-4">
                  Dr. Roberto Carlos Pech Argüelles, (UADY, Céd. 6539830) Medicina de Rehabilitación (8662895).
                </p>
                <p className="mb-4">
                  <strong>UNIDAD DE REHABILITACION ALTABRISA.</strong>
                </p>
                <p>
                  Aviso de funcionamiento No. 2431015036X00405, Aviso de publicidad: 2431012002A00118
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
