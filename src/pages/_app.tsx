import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="gtm-google"
            strategy="afterInteractive"
            src={https://www.googletagmanager.com/gtag/js?id=}
          />
          <Script id="gtm-google-init" strategy="afterInteractive">
            {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '', {
                anonymize_ip: true,
                allow_google_signals: false,
                transport_url: 'https://www.google-analytics.com',
              });
            }
          </Script>
        </>
      ) : null}

      <Component {...pageProps} />
    </>
  );
}
