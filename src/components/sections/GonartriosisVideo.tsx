import { useEffect, useState } from 'react';

export default function GonartriosisVideo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Reinitialize Facebook SDK when component mounts
    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>
            Conoce Más Sobre la Gonartrosis
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Descubre qué es la gonartrosis (artrosis de rodilla), sus síntomas y cómo las infiltraciones especializadas pueden ayudarte.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 min-h-[300px]">
              {isClient ? (
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1G6kHwehMd%2F&show_text=false&width=560&t=0"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: 0, left: 0 }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Video educativo sobre Gonartrosis"
                  className="rounded-2xl"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-pulse mb-4">
                      <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4"></div>
                    </div>
                    <p className="text-slate-500">Cargando video educativo...</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/padecimientos/gonartrosis"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-medium"
                style={{ backgroundColor: '#106D78' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver información completa sobre gonartrosis
              </a>
              <a 
                href="https://www.facebook.com/share/v/1G6kHwehMd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800"
              >
                Ver en Facebook
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
