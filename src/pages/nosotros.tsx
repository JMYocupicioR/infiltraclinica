import MainLayout from "@/layout/MainLayout";
import React from 'react';
import MonoIcon from '@/components/ui/MonoIcon';
import Check from '@/components/ui/Check';
import Badge from '@/components/ui/Badge';

export default function NosotrosPage() {
  return (
    <MainLayout
      title="Nosotros | Infiltra Clinica Mérida"
      description="Conoce a nuestro equipo especializado en infiltraciones de precisión. Experiencia médica dedicada al alivio del dolor articular en Mérida, Yucatán."
    >
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <MonoIcon size={80} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#344D63' }}>
                Nosotros
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Somos una clínica hiperespecializada dedicada exclusivamente a infiltraciones de precisión. 
                Nuestro enfoque único combina experiencia médica avanzada con tecnología de vanguardia 
                para ofrecer alternativas efectivas al dolor articular.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Nuestra Misión</h2>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  Proporcionar alternativas efectivas y seguras para el manejo del dolor articular, 
                  ofreciendo infiltraciones de máxima precisión con un enfoque humanizado y 
                  basado en evidencia científica, mejorando la calidad de vida de nuestros pacientes.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-900">Nuestra Visión</h2>
                </div>
                <p className="text-green-800 leading-relaxed">
                  Ser la clínica líder en Yucatán en tratamientos de infiltración, reconocida por 
                  nuestra excelencia médica, innovación tecnológica y compromiso con el bienestar 
                  integral de nuestros pacientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Roberto Carlos Pech */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#344D63' }}>
                  Dr. Roberto Carlos Pech Argüelles
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Director Médico y especialista en infiltraciones de precisión con más de 10 años 
                  de experiencia en el manejo del dolor articular y procedimientos intervencionistas.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Especialidades y Certificaciones</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check />
                      <span className="text-gray-700">Medicina Interna con subespecialidad en Reumatología</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check />
                      <span className="text-gray-700">Certificación en Procedimientos Intervencionistas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check />
                      <span className="text-gray-700">Especialización en Infiltraciones Articulares</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check />
                      <span className="text-gray-700">Experto en PRP y Medicina Regenerativa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check />
                      <span className="text-gray-700">Miembro del Colegio Mexicano de Reumatología</span>
                    </li>
                  </ul>
                </div>

                <blockquote className="bg-white p-6 rounded-xl border-l-4" style={{ borderLeftColor: '#106D78' }}>
                  <p className="text-gray-700 italic mb-3">
                    "Mi compromiso es ofrecer a cada paciente la mejor alternativa terapéutica, 
                    combinando experiencia clínica con las técnicas más avanzadas para lograr 
                    resultados efectivos y duraderos."
                  </p>
                  <cite className="text-sm font-medium" style={{ color: '#106D78' }}>
                    - Dr. Roberto Carlos Pech Argüelles
                  </cite>
                </blockquote>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-64 h-64 mx-auto rounded-full mb-6" 
                       style={{ background: 'radial-gradient(circle at 30% 30%, #E6F7FA, #D3EEF2)' }} 
                       aria-label="Foto del Dr. Roberto Carlos Pech Argüelles" />
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#344D63' }}>
                      Experiencia Comprobada
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: '#106D78' }}>10+</div>
                        <div className="text-sm text-gray-600">Años de experiencia</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: '#106D78' }}>2000+</div>
                        <div className="text-sm text-gray-600">Procedimientos realizados</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: '#106D78' }}>95%</div>
                        <div className="text-sm text-gray-600">Satisfacción del paciente</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                Nuestros Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los principios que guían nuestra práctica médica y definen la excelencia en el cuidado de nuestros pacientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Precisión',
                  description: 'Técnicas especializadas y protocolos rigurosos para resultados óptimos.',
                  icon: '🎯',
                  color: 'bg-blue-50 border-blue-200'
                },
                {
                  title: 'Seguridad',
                  description: 'Estándares más altos de esterilidad y protocolos de seguridad del paciente.',
                  icon: '🛡️',
                  color: 'bg-green-50 border-green-200'
                },
                {
                  title: 'Humanización',
                  description: 'Trato cálido, empático y centrado en las necesidades individuales.',
                  icon: '❤️',
                  color: 'bg-red-50 border-red-200'
                },
                {
                  title: 'Innovación',
                  description: 'Actualización constante en técnicas y tecnologías médicas avanzadas.',
                  icon: '⚡',
                  color: 'bg-purple-50 border-purple-200'
                }
              ].map((valor, index) => (
                <div key={index} className={`rounded-2xl p-6 border ${valor.color}`}>
                  <div className="text-4xl mb-4 text-center">{valor.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#344D63' }}>
                    {valor.title}
                  </h3>
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestro Proceso */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                Nuestro Enfoque Integral
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un proceso estructurado y personalizado que garantiza los mejores resultados para cada paciente.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Evaluación Integral',
                  description: 'Historia clínica completa, exploración física detallada y revisión de estudios previos.'
                },
                {
                  step: '02',
                  title: 'Diagnóstico Preciso',
                  description: 'Análisis especializado para determinar la causa exacta del dolor y opciones terapéuticas.'
                },
                {
                  step: '03',
                  title: 'Plan Personalizado',
                  description: 'Diseño de tratamiento individualizado con explicación de riesgos, beneficios y alternativas.'
                },
                {
                  step: '04',
                  title: 'Seguimiento Continuo',
                  description: 'Monitoreo post-procedimiento y coordinación con su equipo médico tratante.'
                }
              ].map((paso, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <Badge>{paso.step}</Badge>
                  <h3 className="text-lg font-bold mt-4 mb-3" style={{ color: '#344D63' }}>
                    {paso.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {paso.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso con la Excelencia */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center">
                <MonoIcon size={60} variant="navy" />
                <h2 className="text-3xl font-bold mt-6 mb-4">
                  Nuestro Compromiso Contigo
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Nos comprometemos a brindarte la más alta calidad en atención médica especializada, 
                  combinando experiencia, tecnología y un enfoque humano para tu bienestar.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎓</div>
                    <h3 className="font-bold mb-2">Educación Continua</h3>
                    <p className="text-white/80 text-sm">
                      Actualización constante en las técnicas más avanzadas
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <h3 className="font-bold mb-2">Trabajo en Equipo</h3>
                    <p className="text-white/80 text-sm">
                      Coordinación integral con tu equipo médico tratante
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold mb-2">Resultados Medibles</h3>
                    <p className="text-white/80 text-sm">
                      Enfoque basado en evidencia y resultados comprobables
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <a 
                    href="https://wa.me/529991234567" 
                    className="inline-block px-8 py-3 bg-white text-teal-700 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    Agenda tu consulta hoy
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