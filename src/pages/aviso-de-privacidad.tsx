import MainLayout from '@/layout/MainLayout';
import React, { useState } from 'react';

/**
 * Página de Aviso de Privacidad mejorada.
 * Detalla cómo Infiltra Clinica Mérida recolecta, usa y protege los datos personales de sus pacientes,
 * en cumplimiento con la LFPDPPP.
 */
const AvisoDePrivacidadPage = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'datos', title: '1. Datos Personales que Recabamos', anchor: 'datos-personales' },
    { id: 'finalidades', title: '2. Finalidades del Tratamiento', anchor: 'finalidades' },
    { id: 'transferencias', title: '3. Transferencia de Datos', anchor: 'transferencias' },
    { id: 'derechos', title: '4. Derechos ARCO', anchor: 'derechos-arco' },
    { id: 'cookies', title: '5. Cookies y Tecnologías', anchor: 'cookies' },
    { id: 'modificaciones', title: '6. Modificaciones', anchor: 'modificaciones' },
    { id: 'contacto', title: '7. Contacto', anchor: 'contacto' }
  ];

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(anchor);
    }
  };

  return (
    <MainLayout
      title="Aviso de Privacidad | Infiltra Clinica Mérida"
      description="Consulte nuestro aviso de privacidad para conocer cómo protegemos sus datos personales en Infiltra Clinica Mérida."
    >
      <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Aviso de Privacidad
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                  En Infiltra Clinica Mérida protegemos su información personal con los más altos estándares de seguridad y transparencia.
                </p>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Última actualización: 24 de agosto de 2025
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                
                {/* Tabla de Contenidos - Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contenido</h3>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.anchor)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeSection === section.anchor
                              ? 'bg-blue-100 text-blue-800 font-medium'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Contenido Principal */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    
                    {/* Introducción */}
                    <div className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-blue-800">Infiltra Clinica Mérida</strong>, con domicilio en{' '}
                        <span className="font-medium">Calle 19 No. 321, Colonia Altabrisa, C.P. 97133, Mérida, Yucatán, México</span>,
                        y con <strong className="text-blue-800">Dr. Roberto Carlos Pech Argüelles</strong> como responsable del tratamiento 
                        de los datos personales, se compromete a proteger su privacidad y a cumplir con la legislación aplicable sobre 
                        protección de datos personales en posesión de particulares.
                      </p>
                    </div>

                    {/* Sección 1: Datos Personales */}
                    <section id="datos-personales" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                        Datos Personales que Recabamos
                      </h2>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Para las finalidades establecidas en este Aviso de Privacidad, podemos recabar los siguientes datos personales:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Datos de Identificación
                          </h3>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• Nombre completo</li>
                            <li>• Fecha de nacimiento y edad</li>
                            <li>• Sexo</li>
                            <li>• CURP y RFC</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Datos de Contacto
                          </h3>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• Domicilio</li>
                            <li>• Correo electrónico</li>
                            <li>• Números telefónicos</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                            </svg>
                            Datos Financieros
                          </h3>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• Datos bancarios</li>
                            <li>• Información fiscal</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                          <h3 className="font-semibold text-lg text-red-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            Datos Sensibles (Salud)
                          </h3>
                          <ul className="text-red-800 space-y-1 text-sm">
                            <li>• Historial clínico completo</li>
                            <li>• Padecimientos y alergias</li>
                            <li>• Tratamientos médicos</li>
                            <li>• Fotografías clínicas</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Sección 2: Finalidades */}
                    <section id="finalidades" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                        Finalidades del Tratamiento de sus Datos
                      </h2>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Sus datos personales serán utilizados para las siguientes finalidades:
                      </p>

                      <div className="space-y-6">
                        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                          <h3 className="font-bold text-lg text-green-900 mb-4">
                            ✅ Finalidades Primarias (necesarias para el servicio)
                          </h3>
                          <ul className="text-green-800 space-y-2">
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Creación, estudio, análisis, actualización y conservación de su expediente clínico</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Realización de diagnósticos y planificación de tratamientos médicos y estéticos</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Facturación y cobro por los servicios prestados</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Agendamiento de citas y seguimiento de tratamientos</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Comunicación sobre aspectos relevantes de su atención médica</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                          <h3 className="font-bold text-lg text-blue-900 mb-4">
                            📊 Finalidades Secundarias (opcionales)
                          </h3>
                          <ul className="text-blue-800 space-y-2 mb-4">
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Mercadotecnia, publicidad y prospección comercial</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Análisis estadísticos para mejora de servicios</li>
                            <li className="flex items-start"><span className="font-medium mr-2">•</span> Uso educativo y de difusión (con consentimiento explícito)</li>
                          </ul>
                          <div className="bg-blue-100 rounded-lg p-4">
                            <p className="text-blue-900 text-sm">
                              <strong>Importante:</strong> Si no desea que sus datos sean tratados para finalidades secundarias, 
                              puede manifestarlo enviando un correo a <strong>privacidad@infiltraclinicamerida.com</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sección 3: Transferencias */}
                    <section id="transferencias" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                        Transferencia de Datos Personales
                      </h2>
                      
                      <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                        <p className="text-purple-900 leading-relaxed">
                          Sus datos personales, <strong>especialmente los sensibles</strong>, no serán transferidos a terceros sin su consentimiento, 
                          salvo en los casos previstos por el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, 
                          como requerimientos de autoridades competentes.
                        </p>
                      </div>
                    </section>

                    {/* Sección 4: Derechos ARCO */}
                    <section id="derechos-arco" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                        Derechos ARCO
                      </h2>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Usted tiene derecho a ejercer los siguientes derechos respecto a sus datos personales:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                          <h3 className="font-bold text-indigo-900 mb-2">🔍 Acceso</h3>
                          <p className="text-indigo-800 text-sm">Conocer qué datos tenemos y cómo los utilizamos</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                          <h3 className="font-bold text-indigo-900 mb-2">✏️ Rectificación</h3>
                          <p className="text-indigo-800 text-sm">Corregir información desactualizada o inexacta</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                          <h3 className="font-bold text-indigo-900 mb-2">🗑️ Cancelación</h3>
                          <p className="text-indigo-800 text-sm">Solicitar la eliminación de sus datos</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                          <h3 className="font-bold text-indigo-900 mb-2">⛔ Oposición</h3>
                          <p className="text-indigo-800 text-sm">Oponerse al uso de sus datos para fines específicos</p>
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">💡 ¿Cómo ejercer sus derechos ARCO?</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Envíe una solicitud por correo electrónico a <strong>privacidad@infiltraclinicamerida.com</strong> incluyendo:
                          su nombre completo, documento de identidad y descripción clara del derecho que desea ejercer.
                        </p>
                      </div>
                    </section>

                    {/* Sección 5: Cookies */}
                    <section id="cookies" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                        Uso de Cookies y Tecnologías de Rastreo
                      </h2>
                      
                      <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                        <p className="text-orange-900 mb-4 leading-relaxed">
                          Nuestro sitio web utiliza cookies y otras tecnologías para mejorar su experiencia de navegación y 
                          brindarle un mejor servicio.
                        </p>
                        
                        <div className="bg-orange-100 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-900 mb-2">Información que recopilamos:</h4>
                          <ul className="text-orange-800 text-sm space-y-1">
                            <li>• Tipo de navegador y sistema operativo</li>
                            <li>• Páginas web visitadas en nuestro sitio</li>
                            <li>• Preferencias de usuario</li>
                          </ul>
                          <p className="text-orange-800 text-sm mt-3">
                            <strong>Nota:</strong> Puede deshabilitar las cookies en la configuración de su navegador.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Sección 6: Modificaciones */}
                    <section id="modificaciones" className="mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">6</span>
                        Modificaciones al Aviso de Privacidad
                      </h2>
                      
                      <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                        <p className="text-teal-900 leading-relaxed">
                          Este aviso de privacidad puede sufrir modificaciones derivadas de nuevos requerimientos legales, 
                          necesidades operativas o cambios en nuestras prácticas de privacidad. Nos comprometemos a mantenerlo 
                          informado sobre cualquier cambio a través de nuestro sitio web{' '}
                          <strong className="text-teal-800">infiltraclinicamerida.com</strong>.
                        </p>
                      </div>
                    </section>

                    {/* Sección 7: Contacto */}
                    <section id="contacto" className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">7</span>
                        Información de Contacto
                      </h2>
                      
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-bold text-red-900 mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              Dirección Física
                            </h3>
                            <p className="text-red-800 text-sm">
                              Calle 19 No. 321<br />
                              Colonia Altabrisa<br />
                              C.P. 97133, Mérida, Yucatán<br />
                              México
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-red-900 mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              Contacto Digital
                            </h3>
                            <div className="space-y-2 text-sm">
                              <p className="text-red-800">
                                <strong>Email de Privacidad:</strong><br />
                                <a href="mailto:privacidad@infiltraclinicamerida.com" className="text-red-600 hover:text-red-800 underline">
                                  privacidad@infiltraclinicamerida.com
                                </a>
                              </p>
                              <p className="text-red-800">
                                <strong>Sitio Web:</strong><br />
                                <a href="https://infiltraclinicamerida.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">
                                  infiltraclinicamerida.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-red-200">
                          <h4 className="font-semibold text-red-900 mb-2">Responsable del Tratamiento:</h4>
                          <p className="text-red-800 text-sm">
                            <strong>Dr. Roberto Carlos Pech Argüelles</strong><br />
                            Director Médico - Infiltra Clinica Mérida
                          </p>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default AvisoDePrivacidadPage;