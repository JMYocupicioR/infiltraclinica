export default function FacebookPost() {

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>
            Síguenos en Redes Sociales
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Mantente informado con contenido educativo, consejos de salud articular y novedades de nuestra clínica.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <img 
                  src="https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/537263236_122104067540985311_7161699102706751421_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PazPQls9GBwQ7kNvwHWzAYr&_nc_oc=AdksqEpLuKUetIN0Ji2K1K9HjwZuD74yPKIztxSABV0C1hPS68gGM_2ZIXTsWUkJzG6XX9uKLrd2R2SQcYJ5Suly&_nc_zt=23&_nc_ht=scontent.fmid2-1.fna&_nc_gid=wqKMkBaxV6dayZfh4EA4yA&oh=00_AfZHHy95dyl4BAxrzvjtX3yKBnptEmQ6oJo5sjm6TZk9GQ&oe=68D56CFB"
                  alt="Infiltra Clínica - Imagen de Facebook"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-md"
                  onError={(e) => {
                    // Fallback to Facebook icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-20 h-20 rounded-full hidden items-center justify-center border-4 border-blue-100 shadow-md" 
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Infiltra Clínica</h3>
                <p className="text-slate-500">Especialistas en infiltraciones</p>
              </div>
            </div>
            
            <div className="text-center py-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Mantente conectado con nosotros
                </h3>
                <p className="text-slate-600 text-sm">
                  Síguenos para recibir consejos de salud articular, novedades sobre tratamientos y contenido educativo especializado.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.facebook.com/61579559341262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#1877F2' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Seguir en Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
