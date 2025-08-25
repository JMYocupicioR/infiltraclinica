export default function Process(){
  const steps = [
    {title:'Evaluación', desc:'Historia clínica, exploración y revisión de estudios.'},
    {title:'Plan', desc:'Indicaciones, riesgos/beneficios y consentimiento informado.'},
    {title:'Procedimiento', desc:'Técnicas de precisión médica. Control del dolor y esterilidad.'},
    {title:'Seguimiento', desc:'Plan de rehabilitación y comunicación con tu médico tratante.'},
  ];
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#344D63' }}>Cómo funciona</h2>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {steps.map((s, i)=> (
          <div key={s.title} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="text-sm font-semibold" style={{ color: '#106D78' }}>Paso {String(i+1).padStart(2,'0')}</div>
            <div className="mt-1 font-semibold text-slate-800">{s.title}</div>
            <div className="text-sm text-slate-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
