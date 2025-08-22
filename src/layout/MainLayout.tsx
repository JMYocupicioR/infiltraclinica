import TopBar from '../components/sections/TopBar';
import Footer from '../components/sections/Footer';
import { useEffect } from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
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
      <TopBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
