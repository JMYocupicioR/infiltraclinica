import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhySection from "@/components/sections/WhySection";
import Treatments from "@/components/sections/Treatments";
import Process from "@/components/sections/Process";
import Doctor from "@/components/sections/Doctor";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <TrustStrip />
      <WhySection />
      <Treatments />
      <Process />
      <Doctor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </MainLayout>
  );
}
