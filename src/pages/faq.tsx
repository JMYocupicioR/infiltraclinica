import MainLayout from "@/layout/MainLayout";
import FAQ, { faqItems } from "@/components/sections/FAQ";
import { absoluteUrl, faqJsonLd } from "@/lib/seo";

export default function FAQPage() {
  return (
    <MainLayout
      title="Preguntas frecuentes | Infiltra Clínica"
      description="Resuelve dudas comunes sobre infiltraciones de precisión, tiempos de recuperación y requisitos previos."
      breadcrumbs={[{ name: 'Preguntas frecuentes', url: absoluteUrl('/faq') }]}
      structuredData={[faqJsonLd(faqItems)]}
    >
      <FAQ />
    </MainLayout>
  );
}
