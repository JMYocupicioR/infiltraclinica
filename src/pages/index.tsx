import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhySection from "@/components/sections/WhySection";
import Treatments from "@/components/sections/Treatments";
import GonartriosisVideo from "@/components/sections/GonartriosisVideo";
import Process from "@/components/sections/Process";
import Doctor from "@/components/sections/Doctor";
import FacebookPost from "@/components/sections/FacebookPost";
import Testimonials from "@/components/sections/Testimonials";
import FAQ, { faqItems } from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import LocationHighlight from "@/components/sections/LocationHighlight";
import LocationCTA from "@/components/sections/LocationCTA";
import MainLayout from "@/layout/MainLayout";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <MainLayout
      title="Infiltraciones de precisión en Mérida | Infiltra Clínica"
      description="Clínica hiperespecializada en infiltraciones para aliviar el dolor articular en Mérida, Yucatán. Agenda evaluación y recibe acompañamiento médico integral."
      structuredData={[faqJsonLd(faqItems)]}
    >
      <Hero />
      <TrustStrip />
      <WhySection />
      <Treatments />
      <GonartriosisVideo />
      <Process />
      <Doctor />      <LocationHighlight />      <FacebookPost />
      <Testimonials />      <LocationCTA />      <FAQ />
      <FinalCTA />
    </MainLayout>
  );
}




