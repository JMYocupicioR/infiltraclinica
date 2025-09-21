import { useEffect, useState } from 'react';

export default function FacebookPost() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Reinitialize Facebook SDK when component mounts
    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

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
        
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1877F2' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-800">Infiltra Clínica</div>
                <div className="text-sm text-slate-500">Síguenos en Facebook</div>
              </div>
            </div>
            
            <div className="relative min-h-[200px]">
              {isClient ? (
                <div 
                  className="fb-post" 
                  data-href="https://www.facebook.com/share/p/16ukiTHg4i/" 
                  data-width="500" 
                  data-show-text="true"
                ></div>
              ) : (
                // Server-side fallback content
                <div className="text-center py-8">
                  <div className="animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mb-3"></div>
                    <div className="h-32 bg-slate-200 rounded mx-auto"></div>
                  </div>
                  <p className="text-sm text-slate-500 mt-4">Cargando publicación de Facebook...</p>
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://www.facebook.com/61579559341262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-white text-sm font-medium"
                style={{ backgroundColor: '#1877F2' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
