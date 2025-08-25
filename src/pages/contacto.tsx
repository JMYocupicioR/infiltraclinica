import MainLayout from "@/layout/MainLayout";
import React from 'react';
import MonoIcon from '@/components/ui/MonoIcon';
import Check from '@/components/ui/Check';

export default function ContactoPage() {
  return (
    <MainLayout
      title="Contacto | Infiltra Clinica Mérida"
      description="Contáctanos para agendar tu cita de infiltraciones de precisión en Mérida, Yucatán. WhatsApp, teléfono y ubicación disponibles."
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
                Contacto
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estamos aquí para atenderte. Agenda tu cita, resuelve tus dudas o solicita información 
                sobre nuestros tratamientos especializados de infiltraciones de precisión.
              </p>
            </div>
          </div>
        </section>

        {/* Información de Contacto Principal */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-900">WhatsApp</h3>
                <p className="text-green-800 mb-4">
                  La forma más rápida de contactarnos. Respuesta inmediata para agendar citas y resolver dudas.
                </p>
                <a 
                  href="https://wa.me/529991234567" 
                  className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-colors"
                >
                  Enviar mensaje
                </a>
                <p className="text-green-700 text-sm mt-3 font-medium">+52 999 123 4567</p>
              </div>

              {/* Teléfono */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Teléfono</h3>
                <p className="text-blue-800 mb-4">
                  Llámanos directamente para consultas inmediatas o para agendar tu cita médica.
                </p>
                <a 
                  href="tel:+529991234567" 
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors"
                >
                  Llamar ahora
                </a>
                <p className="text-blue-700 text-sm mt-3 font-medium">+52 999 123 4567</p>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 text-center border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-900">Email</h3>
                <p className="text-purple-800 mb-4">
                  Envíanos un correo para consultas detalladas o solicitar información médica.
                </p>
                <a 
                  href="mailto:contacto@infiltraclinicamerida.com" 
                  className="inline-block px-6 py-3 bg-purple-500 text-white font-bold rounded-2xl hover:bg-purple-600 transition-colors"
                >
                  Enviar email
                </a>
                <p className="text-purple-700 text-sm mt-3 font-medium">contacto@infiltraclinicamerida.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Horarios y Ubicación */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Horarios */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: '#344D63' }}>Horarios de Atención</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Lunes a Viernes</span>
                    <span className="text-teal-600 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Sábados</span>
                    <span className="text-teal-600 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Domingos</span>
                    <span className="text-gray-500">Cerrado</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-teal-800 font-medium text-sm">Atención solo con cita previa</p>
                      <p className="text-teal-700 text-sm mt-1">
                        Agenda tu consulta por WhatsApp o teléfono para garantizar tu lugar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ubicación */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: '#344D63' }}>Ubicación</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                    <p className="text-gray-700">
                      Calle 19 No. 321<br />
                      Colonia Altabrisa<br />
                      C.P. 97133, Mérida, Yucatán<br />
                      México
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Referencias</h3>
                    <p className="text-gray-700 text-sm">
                      Entre Calle 42 y Calle 44, cerca de Plaza Altabrisa y Hospital Star Médica.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href="https://maps.google.com/?q=Calle+19+321+Altabrisa+Mérida" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-red-500 text-white font-bold rounded-2xl text-center hover:bg-red-600 transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                  <a 
                    href="https://waze.com/ul?q=Calle+19+321+Altabrisa+Mérida" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl text-center hover:bg-gray-50 transition-colors"
                  >
                    Abrir en Waze
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Contacto Rápido */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                Solicita tu Cita
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Completa este formulario y nos pondremos en contacto contigo para agendar tu evaluación especializada.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="999 123 4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-2">
                      Edad
                    </label>
                    <input 
                      type="number" 
                      id="edad" 
                      name="edad" 
                      min="18" 
                      max="100"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="35"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
                    Motivo de consulta *
                  </label>
                  <select 
                    id="motivo" 
                    name="motivo" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Selecciona tu motivo de consulta</option>
                    <option value="rodilla">Dolor de rodilla</option>
                    <option value="hombro">Dolor de hombro</option>
                    <option value="cadera">Dolor de cadera</option>
                    <option value="columna">Dolor de columna</option>
                    <option value="prp">Interés en PRP</option>
                    <option value="otras">Otras articulaciones</option>
                    <option value="consulta">Consulta general</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe brevemente tu situación
                  </label>
                  <textarea 
                    id="descripcion" 
                    name="descripcion" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Cuéntanos sobre tu dolor, cuándo comenzó, si has recibido tratamiento previo, etc."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="acepto" 
                    name="acepto" 
                    required
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="acepto" className="text-sm text-gray-700">
                    Acepto el tratamiento de mis datos personales de acuerdo con el{' '}
                    <a href="/aviso-de-privacidad" className="text-teal-600 hover:underline">
                      Aviso de Privacidad
                    </a>{' '}
                    para fines de atención médica y comunicación.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 px-8 py-4 text-white font-bold rounded-2xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#106D78' }}
                  >
                    Solicitar cita
                  </button>
                  <a 
                    href="https://wa.me/529991234567" 
                    className="flex-1 px-8 py-4 border-2 border-teal-600 text-teal-600 font-bold rounded-2xl text-center hover:bg-teal-50 transition-colors"
                  >
                    Prefiero WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Información Adicional */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#344D63' }}>
                Información Importante
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Todo lo que necesitas saber antes de tu consulta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#344D63' }}>
                  Primera Consulta
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Duración: 45-60 minutos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Evaluación completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Plan de tratamiento personalizado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#344D63' }}>
                  Formas de Pago
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Efectivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Tarjeta de crédito/débito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Transferencia bancaria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Facturación disponible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#344D63' }}>
                  Qué Traer
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Identificación oficial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Estudios previos (RX, RM, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Lista de medicamentos actuales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    <span>Reportes médicos anteriores</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
                <MonoIcon size={60} />
                <h3 className="text-2xl font-bold mt-4 mb-3" style={{ color: '#344D63' }}>
                  ¿Tienes más preguntas?
                </h3>
                <p className="text-gray-700 mb-6">
                  No dudes en contactarnos. Estamos aquí para resolver todas tus dudas 
                  y acompañarte en tu proceso de recuperación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/529991234567" 
                    className="px-6 py-3 text-white font-bold rounded-2xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#106D78' }}
                  >
                    Chatear por WhatsApp
                  </a>
                  <a 
                    href="/faq" 
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    Ver preguntas frecuentes
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