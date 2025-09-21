import type { FaqItem } from "@/lib/seo";

export const faqItems: FaqItem[] = [
  {
    question: '¿Duele la infiltración?',
    answer:
      'Utilizamos anestesia local y técnicas de precisión para minimizar molestias. La mayoría de los pacientes lo tolera bien.',
  },
  {
    question: '¿Cuánto dura el efecto?',
    answer:
      'Depende de la articulación y el diagnóstico. Con ácido hialurónico el beneficio puede durar varios meses; los resultados varían según cada caso.',
  },
  {
    question: '¿Quiénes son candidatos?',
    answer:
      'Pacientes con dolor articular que buscan una alternativa intermedia entre fármacos y cirugía. Se valora en consulta individual.',
  },
  {
    question: '¿Necesito estudios previos?',
    answer:
      'Si cuentas con radiografías, resonancias u otros estudios tráelos a la consulta. Ahí definimos si se requieren adicionales.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Preguntas frecuentes</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {faqItems.map((qa) => (
          <div key={qa.question} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="font-medium text-slate-800">{qa.question}</div>
            <div className="text-sm text-slate-600">{qa.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
