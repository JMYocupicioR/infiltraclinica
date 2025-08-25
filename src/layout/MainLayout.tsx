import TopBar from '../components/sections/TopBar';
import Footer from '../components/sections/Footer';
import { useEffect } from 'react';
import Head from 'next/head';

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function MainLayout({ children, title, description }: MainLayoutProps) {
  useEffect(() => {
    // WhatsApp Widget Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://w.app/widget-v1/4Q97wE.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <Head>
        <title>{title || 'Infiltra Clinica Mérida'}</title>
        <meta name="description" content={description || 'Clínica especializada en medicina estética y tratamientos de infiltración en Mérida, Yucatán.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
