import Dot from "../ui/Dot";

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
        <span>Atención de máxima precisión</span>
        <Dot />
        <span>Protocolos de esterilidad</span>
        <Dot />
        <span>Consentimiento informado</span>
        <Dot />
        <span>Reportes para tu médico tratante</span>
      </div>
    </section>
  );
}
