import Check from "../ui/Check";

export default function Doctor(){
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm flex items-center justify-center" aria-label="Foto del especialista (placeholder)">
          <div className="w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #E6F7FA, #D3EEF2)' }} />
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: '#344D63' }}>Tu especialista</h3>
          <p className="mt-2 text-slate-600">Médico con práctica dedicada a infiltraciones guiadas por imagen. Entrenamiento en técnicas avanzadas y protocolos de seguridad. Trabajo coordinado con reumatología, ortopedia y rehabilitación.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><Check /> Experiencia en PRP/ácido hialurónico y esteroides intraarticulares.</li>
            <li className="flex gap-2"><Check /> Consentimiento informado y educación del paciente.</li>
            <li className="flex gap-2"><Check /> Comunicación con tu fisio/médico para continuidad del cuidado.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
