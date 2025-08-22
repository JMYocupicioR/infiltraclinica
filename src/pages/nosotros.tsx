import MainLayout from "@/layout/MainLayout";
import WhySection from "@/components/sections/WhySection";
import Doctor from "@/components/sections/Doctor";
import Process from "@/components/sections/Process";

export default function NosotrosPage() {
  return (
    <MainLayout>
      <WhySection />
      <Doctor />
      <Process />
    </MainLayout>
  );
}
