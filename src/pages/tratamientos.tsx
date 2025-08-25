import MainLayout from "@/layout/MainLayout";
import React from 'react';
import MonoIcon from '@/components/ui/MonoIcon';
import Check from '@/components/ui/Check';
import Badge from '@/components/ui/Badge';

export default function TratamientosPage() {
  const tratamientos = [
    {
      name: 'Rodilla',
      fullName: 'Infiltraciones de Rodilla',
      description: 'Tratamiento especializado para osteoartritis, lesiones meniscales y bursitis de rodilla.',
      conditions: ['Osteoartritis de rodilla', 'Lesión meniscal', 'Bursitis prepatelar', 'Síndrome femoropatelar'],
      techniques: ['PRP (Plasma Rico en Plaquetas)', 'Ácido hialurónico', 'Corticosteroides', 'Viscosupplementación'],
      duration: '30-45 minutos',
      recovery: '24-48 horas',
      icon: '🦵',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      name: 'Hombro',
      fullName: 'Infiltraciones de Hombro',
      description: 'Procedimientos de precisión para lesiones del manguito rotador, bursitis y capsulitis adhesiva.',
      conditions: ['Lesión manguito rotador', 'Bursitis subacromial', 'Capsulitis adhesiva', 'Tendinitis bicipital'],
      techniques: ['Infiltración subacromial', 'Infiltración glenohumeral', 'PRP', 'Corticosteroides'],
      duration: '20-35 minutos',
      recovery: '48-72 horas',
      icon: '💪',
      color: 'from-green-50 to-emerald-50'
    },
    {
      name: 'Cadera',
      fullName: 'Infiltraciones de Cadera',
      description: 'Tratamiento efectivo para osteoartritis de cadera y bursitis trocantérica.',
      conditions: ['Osteoartritis de cadera', 'Bursitis trocantérica', 'Síndrome de impacto', 'Tendinitis de psoas'],
      techniques: ['Infiltración intraarticular', 'Infiltración de bursa trocantérica', 'PRP', 'Ácido hialurónico'],
      duration: '30-40 minutos',
      recovery: '24-48 horas',
      icon: '🦴',
      color: 'from-purple-50 to-indigo-50'
    },
    {
      name: 'Columna',
      fullName: 'Infiltraciones de Columna',
      description: 'Procedimientos especializados para facetarias, sacroilíacas y dolor radicular.',
      conditions: ['Artrosis facetaria', 'Disfunción sacroilíaca', 'Dolor radicular', 'Estenosis espinal'],
      techniques: ['Bloqueo facetario', 'Infiltración sacroilíaca', 'Epidural transforaminal', 'Radiofrecuencia'],
      duration: '40-60 minutos',
      recovery: '48-72 horas',
      icon: '🦴',
      color: 'from-orange-50 to-red-50'
    },
    {
      name: 'PRP',
      fullName: 'Plasma Rico en Plaquetas',
      description: 'Medicina regenerativa avanzada para acelerar la curación natural de tejidos.',
      conditions: ['Tendinopatías crónicas', 'Lesiones musculares', 'Artrosis inicial', 'Lesiones ligamentarias'],
      techniques: ['PRP convencional', 'PRP activado', 'PRP con células madre', 'Infiltración ecoguiada'],
      duration: '45-60 minutos',
      recovery: '72-96 horas',
      icon: '🩸',
      color: 'from-red-50 to-pink-50'
    },
    {
      name: 'Otras Articulaciones',
      fullName: 'Tratamientos Especializados',
      description: 'Procedimientos para tobillo, muñeca, codo y otras articulaciones específicas.',
      conditions: ['Artritis de tobillo', 'Síndrome túnel carpiano', 'Epicondilitis', 'Artritis temporomandibular'],
      techniques: ['Infiltraciones específicas', 'Bloqueos nerviosos', 'PRP localizado', 'Corticosteroides'],
      duration: '20-40 minutos',
      recovery: '24-48 horas',
      icon: '⚕️',
      color: 'from-teal-50 to-cyan-50'
    }
  ];

  return (
    <MainLayout
      title="Tratamientos | Infiltra Clinica Mérida"
      description="Conoce nuestros tratamientos especializados de infiltraciones de precisión para rodilla, hombro, cadera, columna, PRP y más. Procedimientos seguros y efectivos."
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
                Nuestros Tratamientos
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Procedimientos de infiltración especializados diseñados para tratar el dolor articular 
                de manera precisa y efectiva. Cada tratamiento es personalizado según tu condición específica.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#106D78' }}>6</div>
                <div className="text-sm text-gray-600">Tipos de tratamientos</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#106D78' }}>95%</div>
                <div className="text-sm text-gray-600">Tasa de éxito</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#106D78' }}>30-60</div>
                <div className="text-sm text-gray-600">Minutos por sesión</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#106D78' }}>24-72h</div>
                <div className="text-sm text-gray-600">Tiempo de recuperación</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamientos Detallados */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8">
              {tratamientos.map((tratamiento, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className={`bg-gradient-to-r ${tratamiento.color} p-8`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-4xl mr-4">{tratamiento.icon}</div>
                          <div>
                            <h2 className="text-3xl font-bold mb-2" style={{ color: '#344D63' }}>
                              {tratamiento.fullName}
                            </h2>
                            <p className="text-gray-700 text-lg max-w-2xl">
                              {tratamiento.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <MonoIcon size={60} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Condiciones Tratadas */}
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#344D63' }}>
                          Condiciones Tratadas
                        </h3>
                        <ul className="space-y-2">
                          {tratamiento.conditions.map((condition, condIndex) => (
                            <li key={condIndex} className="flex items-start gap-2">
                              <Check />
                              <span className="text-gray-700">{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Técnicas Utilizadas */}
                      <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#344D63' }}>
                          Técnicas
                        </h3>
                        <ul className="space-y-2">
                          {tratamiento.techniques.map((technique, techIndex) => (
                            <li key={techIndex} className="text-gray-700 text-sm">
                              • {technique}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Información del Procedimiento */}
                      <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#344D63' }}>
                          Detalles
                        </h3>
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm font-medium text-gray-900">Duración</div>
                            <div className="text-sm text-gray-600">{tratamiento.duration}</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm font-medium text-gray-900">Recuperación</div>
                            <div className="text-sm text-gray-600">{tratamiento.recovery}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-gray-600 text-sm max-w-2xl">
                          Este procedimiento se realiza con técnicas de precisión avanzada y bajo estrictos protocolos de seguridad. 
                          Los resultados pueden variar según el paciente y la condición específica.
                        </p>
                        <a 
                          href="https://wa.me/529991234567" 
                          className="px-6 py-3 rounded-2xl text-white font-medium hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: '#106D78' }}
                        >
                          Consultar tratamiento
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Tratamiento */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                ¿Cómo Funciona Nuestro Proceso?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un protocolo estructurado que garantiza seguridad, precisión y los mejores resultados posibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Evaluación Inicial',
                  description: 'Revisión completa de historial médico, síntomas actuales y estudios de imagen previos.',
                  icon: '📋'
                },
                {
                  step: '02',
                  title: 'Diagnóstico Especializado',
                  description: 'Examen físico detallado y determinación del plan de tratamiento más adecuado.',
                  icon: '🔍'
                },
                {
                  step: '03',
                  title: 'Procedimiento de Precisión',
                  description: 'Infiltración realizada con técnicas avanzadas, anestesia local y máxima esterilidad.',
                  icon: '💉'
                },
                {
                  step: '04',
                  title: 'Seguimiento Integral',
                  description: 'Monitoreo post-procedimiento y coordinación con tu equipo médico para continuidad.',
                  icon: '📞'
                }
              ].map((paso, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <Badge>{paso.step}</Badge>
                  <div className="text-3xl mt-4 mb-3">{paso.icon}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#344D63' }}>
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

        {/* Preguntas Frecuentes sobre Tratamientos */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                Preguntas Frecuentes sobre Tratamientos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Resuelve tus dudas más comunes sobre nuestros procedimientos y tratamientos especializados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: '¿Cuánto tiempo duran los efectos del tratamiento?',
                  a: 'La duración varía según el tipo de tratamiento y la condición del paciente. El PRP puede durar 6-12 meses, el ácido hialurónico 6-8 meses, y los corticosteroides 3-6 meses.'
                },
                {
                  q: '¿Los procedimientos son dolorosos?',
                  a: 'Utilizamos anestesia local y técnicas de precisión para minimizar las molestias. La mayoría de pacientes reportan dolor mínimo durante y después del procedimiento.'
                },
                {
                  q: '¿Necesito preparación especial antes del tratamiento?',
                  a: 'Generalmente no se requiere preparación especial. Te proporcionaremos instrucciones específicas según tu tratamiento durante la consulta inicial.'
                },
                {
                  q: '¿Cuándo podré retomar mis actividades normales?',
                  a: 'La mayoría de pacientes pueden retomar actividades ligeras en 24-48 horas. Actividades más intensas se recomiendan después de 72-96 horas, según el tipo de procedimiento.'
                },
                {
                  q: '¿Los tratamientos tienen efectos secundarios?',
                  a: 'Los efectos secundarios son mínimos y temporales: ligero dolor en el sitio de inyección, inflamación leve o sensibilidad que desaparece en 1-3 días.'
                },
                {
                  q: '¿Cuántas sesiones necesito?',
                  a: 'Depende de tu condición específica. Algunos pacientes ven mejoría con una sesión, otros pueden requerir 2-3 tratamientos espaciados en el tiempo para resultados óptimos.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-700 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center text-white">
              <MonoIcon size={60} variant="navy" />
              <h2 className="text-3xl font-bold mt-6 mb-4">
                ¿Listo para Comenzar tu Tratamiento?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Agenda una evaluación especializada y descubre cuál es el tratamiento más adecuado para tu condición. 
                Te explicamos cada paso del proceso y resolvemos todas tus dudas.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a 
                  href="https://wa.me/529991234567" 
                  className="px-8 py-3 bg-white text-teal-700 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  Agenda por WhatsApp
                </a>
                <a 
                  href="tel:+529991234567" 
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-teal-700 transition-colors"
                >
                  Llámanos Ahora
                </a>
              </div>

              <div className="mt-8 text-white/70 text-sm">
                <p>Consulta disponible de lunes a viernes • Respuesta inmediata por WhatsApp</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}