import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TopBar from '../components/sections/TopBar';
import Footer from '../components/sections/Footer';
import type { ReactNode } from 'react';
import {
  SITE_CONFIG,
  absoluteUrl,
  breadcrumbJsonLd,
  localBusinessJsonLd,
  type BreadcrumbItem,
  type StructuredData,
} from '@/lib/seo';

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export type MainLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: StructuredData[];
};

export default function MainLayout({
  children,
  title,
  description,
  canonical,
  image,
  noIndex,
  breadcrumbs,
  structuredData,
}: MainLayoutProps) {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pageTitle = title || SITE_CONFIG.defaultTitle;
  const metaDescription = description || SITE_CONFIG.description;

  const path = router.asPath?.split('#')[0] || '/';
  const canonicalUrl = canonical || absoluteUrl(path);
  const ogImageUrl = image ? absoluteUrl(image) : absoluteUrl(SITE_CONFIG.defaultImagePath);
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';

  const breadcrumbItems = breadcrumbs?.length
    ? breadcrumbJsonLd([
        { name: 'Inicio', url: SITE_CONFIG.siteUrl },
        ...breadcrumbs,
      ])
    : null;

  const schemaBlocks = [localBusinessJsonLd(), breadcrumbItems, ...(structuredData || [])].filter(
    Boolean,
  ) as StructuredData[];

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content={robotsContent} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={SITE_CONFIG.locale} />
        {SITE_CONFIG.localeAlternate.map((locale) => (
          <meta key={locale} property="og:locale:alternate" content={locale} />
        ))}
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={`${SITE_CONFIG.name} - ${metaDescription}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="author" content={SITE_CONFIG.name} />
        {googleVerification ? (
          <meta name="google-site-verification" content={googleVerification} />
        ) : null}
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang="es-MX" href={SITE_CONFIG.siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={SITE_CONFIG.siteUrl} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#106D78" />
        
        {/* Facebook específico */}
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* DNS prefetch para redes sociales */}
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//platform.twitter.com" />
        {schemaBlocks.map((block, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
      </Head>

      <TopBar />
      <main>{children}</main>
      <Footer />

      {/* Widget de Chat Integrado */}
      <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1000 }}>
        {/* Ventana del Chat */}
        {isChatOpen && (
          <div
            style={{
              position: 'absolute',
              bottom: '100px',
              right: '20px',
              width: '380px',
              height: '500px',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            {/* Header del Chat */}
            <div
              style={{
                backgroundColor: '#106D78',
                color: 'white',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
                  Chat con Infiltra Clínica
                </h4>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>
                  Resolvemos tus dudas al instante
                </p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Cerrar chat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            
            {/* Iframe del Chat */}
            <iframe
              src="https://app.vectorshift.ai/chatbots/embedded/68d416bb4965a82592a22659?openChatbot=true&skipIntro=true"
              style={{
                flex: 1,
                border: 'none',
                width: '100%'
              }}
              allow="clipboard-read; clipboard-write; microphone"
              title="Chat de Infiltra Clínica"
            />
          </div>
        )}

        {/* Botón Flotante */}
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '70px',
            height: '70px',
            backgroundColor: '#106D78',
            borderRadius: '50%',
            boxShadow: '0 4px 16px rgba(16, 109, 120, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: isChatOpen ? 'scale(0.9)' : 'scale(1)'
          }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          onMouseEnter={(e) => {
            if (!isChatOpen) {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#0D5A63';
            }
          }}
          onMouseLeave={(e) => {
            if (!isChatOpen) {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#106D78';
            }
          }}
          title={isChatOpen ? "Minimizar chat" : "Abrir chat"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsChatOpen(!isChatOpen);
            }
          }}
        >
          {isChatOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 9l-7 7-7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 12h8m-8 4h6m4-8V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12l4-4h8a2 2 0 002-2V8z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 640px) {
          .chat-widget {
            width: calc(100vw - 40px) !important;
            height: 400px !important;
            right: 20px !important;
            left: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
