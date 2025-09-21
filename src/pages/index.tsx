import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhySection from "@/components/sections/WhySection";
import Treatments from "@/components/sections/Treatments";
import Process from "@/components/sections/Process";
import Doctor from "@/components/sections/Doctor";
import FacebookPost from "@/components/sections/FacebookPost";
import Testimonials from "@/components/sections/Testimonials";
import FAQ, { faqItems } from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import MainLayout from "@/layout/MainLayout";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <MainLayout
      title="Infiltraciones de precisión en Mérida | Infiltra Clínica"
      description="Clínica hiperespecializada en infiltraciones guiadas para aliviar el dolor articular en Mérida, Yucatán. Agenda evaluación y recibe acompañamiento médico integral."
      structuredData={[faqJsonLd(faqItems)]}
    >
      <Hero />
      <TrustStrip />
      <WhySection />
      <Treatments />
      <Process />
      <Doctor />
      <FacebookPost />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </MainLayout>
  );
}
