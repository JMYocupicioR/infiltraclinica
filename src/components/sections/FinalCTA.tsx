import MonoIcon from "../ui/MonoIcon";

export default function FinalCTA(){
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="h-full w-full" style={{ background: 'linear-gradient(135deg, #106D78 0%, #177E8A 50%, #344D63 100%)' }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-white">
        <div className="flex items-center gap-3">
          <MonoIcon size={40} variant="navy" />
          <h2 className="text-3xl font-bold tracking-tight">Da el primer paso</h2>
        </div>
        <p className="mt-2 text-white/90 max-w-2xl">Agenda una evaluación y conoce si una infiltración de precisión puede ayudarte. Te explicamos el procedimiento, riesgos y alternativas.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://w.app/infiltraclinica" className="px-5 py-3 rounded-2xl font-medium bg-white text-slate-900">Agenda por WhatsApp</a>
          <a href="tel:+529991234567" className="px-5 py-3 rounded-2xl font-medium border border-white/60">Llámanos</a>
        </div>
      </div>
    </section>
  );
}
