import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
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

      <Script
        id="whatsapp-widget"
        src="https://w.app/widget-v1/4Q97wE.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
